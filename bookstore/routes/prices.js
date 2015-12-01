var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
//var url = 'mongodb://localhost/bookstore';
var url = 'mongodb://admin:admin@ds035280.mongolab.com:35280/book_store';

/**
 * @api {get} /api/prices/ Get all Prices
 * @apiName GetAllPrices
 * @apiGroup Prices
 * @apiVersion 0.0.1
 *
 * @apiSuccess {Number} base_price Base price of the Book.
 * @apiSuccess {Number} sale_price  Selling price of the Book.
 *
 * @apiSuccess (Success 304) 304 Not Modified
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id" : "ObjectId(12345)",
 *       "base_price" : 255.50,
 *       "sale_price": 300,
 *     }
 *
 * @apiSuccessExample {json} Success-Response (304):
 *     HTTP/1.1 304 Not Modified
 *
 * @apiSampleRequest http://localhost:3000/api/prices/
 *
 * @apiError (Error 5xx) 500 Internal Server Error
 *
 */

router.route('/prices/')
    .get(function(req, res) {

        MongoClient.connect(url, function(err, db) {

            if (err) {
                res.status(500);
                res.json({
                    'error': 'Internal Server Error'
                });
            } else {
                var collection = db.collection('prices');
                collection.find().toArray(function(err, result) {

                    if (err) {
                        res.status(500);
                        res.json({
                            'error': 'Internal Server Error'
                        });
                    } else {
                        res.status(200);
                        res.json(result);
                    }

                    db.close();
                });
            }
        });
    })
/**
 * @api {post} /api/prices/ Create Price
 * @apiName createPrice
 * @apiGroup Prices
 * @apiVersion 0.0.1
 *
 * @apiParamExample {json} Post-Example:
 *     {
 *          "base_price" : 200,
 *          "sale_price" : 220.50,
 *     }
 *
 * @apiSuccess (Success 201) 201 Price Created
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 Created
 *     Location : /api/prices/<ObjectId>
 *     {
     *       "message": "price added"
     *     }
 *
 * @apiError 400 Bad Request <br>Wrongly formated <code>json</code> was sent.
 *
 * @apiError (Error 5xx) 500 Internal Server Error
 */
    .post(function(req, res) {

        MongoClient.connect(url, function(err, db) {

            if (err) {
                res.status(500);
                res.json({
                    'error': 'Internal Server Error'
                });
            } else {
                var collection = db.collection('prices');

                collection.insert(req.body, function(err, result) {

                    if (err) {
                        res.status(500).send({
                            "message": "Internal Server Error"
                        });
                    } else if (result === null) {
                        res.status(404).send({
                            "msg": "404"
                        });
                    } else {
                        res.status(201);
                        res.location('/api/prices/' + result.insertedIds.toString());
                        res.json({
                            "message": "price added"
                        });
                    }
                    db.close();
                });

            }


        });
    });


/**
 * @api {get} /api/prices/:id Get Price
 * @apiName GetPrice
 * @apiGroup Prices
 * @apiVersion 0.0.1
 *
 * @apiParam {ObjectId} id Prices unique ID.
 *
 * @apiSuccess {Number} base_price Base price of the Book.
 * @apiSuccess {Number} sale_price  Selling price of the Book.
 *
 * @apiSuccess (Success 304) 304 Not Modified
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id" : "ObjectId(12345)",
 *       "base_price" : 225,
 *       "sale_price":250,
 *     }
 *
 * @apiSuccessExample {json} Success-Response (304):
 *     HTTP/1.1 304 Not Modified
 *
 * @apiSampleRequest http://localhost:3000/api/prices/:id
 *
 * @apiError 404 Price Not Found
 * @apiError 400 Bad Request <br>A wrong formated <code>id</code> was sent
 *
 * @apiError (Error 5xx) 500 Internal Server Error
 *
 */

router.route('/prices/:id')
    .get(function(req, res) {

        MongoClient.connect(url, function(err, db) {
            if (err) {
                res.status(500).send({
                    "message": "Internal Server Error"
                });
            };

            var collection = db.collection('prices');
            try {
                collection.findOne({
                    '_id': ObjectID(req.params.id)
                }, function(err, result) {

                    if (err) {
                        res.status(500).send({
                            "message": "Internal Server Error"
                        });
                    } else if (result === null) {
                        res.status(404).send({
                            "msg": "404"
                        });
                    } else {
                        res.status(200); //ok
                        /*
                         var links = [{
                         "rel": "self",
                         "href": "http://localhost:3000/prices/" + req.params.id
                         }];

                         result.links = links;*/
                        console.log(result);
                        res.json(result);

                    }

                    db.close();

                });
            } catch (e) {
                res.status(400);
                res.json({
                    'error': 'Bad Request'
                });
                db.close();
            }

        });
    })

/**
 * @api {put} /api/prices/:id Update Price
 * @apiName UpdatePrice
 * @apiGroup Prices
 *
 * @apiParam {ObjectId} id Prices unique ID.
 *
 * @apiSuccess (Success 201) 201 Price Created
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 Created
 *     Location : /api/prices/<ObjectId>
 *     {
 *       "message": "price updated"
 *     }
 *
 * @apiError 404 Price Not Found
 * @apiError 400 Bad Request <br>Wrongly formated <code>json</code> was sent.
 *
 * @apiError (Error 5xx) 500 Internal Server Error
 *
 */
    .put(function(req, res) {
        MongoClient.connect(url, function(err, db) {

            var collection = db.collection('prices');

            collection.update({
                '_id': ObjectID(req.params.id)
            }, {
                $set: req.body
            }, function(err, result) {
                // response to the browser
                res.status(201);
                res.location('/api/prices/ '+ ObjectID(req.params.id));
                res.json({
                    "message": "price edited"
                });
                db.close();
            });
        });
    })
/**
 * @api {delete} /prices/:id Delete Price
 * @apiName DeletePrice
 * @apiGroup Price
 * @apiVersion 0.0.1
 *
 * @apiParam {ObjectId} id Prices unique ID.
 *
 * @apiSuccess (Success 204) 204 No Content
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 204 No Content
 *
 * @apiError 404 Price Not Found
 * @apiError 400 Bad Request <br>A wrong formated <code>id</code> was sent
 *
 * @apiError (Error 5xx) 500 Internal Server Error
 *
 */
    .delete(function(req, res) {

        MongoClient.connect(url, function(err, db) {

            var collection = db.collection('prices');
            collection.remove({
                '_id': ObjectID(req.params.id)
            }, function(err, result) {
                res.status(202);
                res.json({
                    'message': 'price deleted'
                });
                db.close();
            });
        });
    });

module.exports = router;
