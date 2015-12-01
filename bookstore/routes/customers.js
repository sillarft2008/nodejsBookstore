var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
//var url = 'mongodb://localhost/bookstore';
var url = 'mongodb://admin:admin@ds035280.mongolab.com:35280/book_store';

/**
 * @api {get} /api/customers/ Get all Customers
 * @apiName GetAllCustomers
 * @apiGroup Customers
 * @apiVersion 0.0.1
 *
 * @apiSuccess {String} name Name of the Customer.
 * @apiSuccess {String} address Address of the Customer.
 * @apiSuccess {String} phone   Phone of the Customer.
 * @apiSuccess {String} email   email of the Customer.
 * * @apiSuccess {String} discount_code   discount code of the Customer.
 *
 * @apiSuccess (Success 304) 304 Not Modified
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id" : "ObjectId(12345)",
 *       "name" : "xxx",
 *       "address":"xxx",
 *       "phone":"xxxxxxxxx",
 *       "email":"xxx"
 *       "discount_code":"0201"
 *     }
 *
 * @apiSuccessExample {json} Success-Response (304):
 *     HTTP/1.1 304 Not Modified
 *
 * @apiSampleRequest http://localhost:3000/api/customers/
 *
 * @apiError (Error 5xx) 500 Internal Server Error
 *
 */

router.route('/customers/')
    .get(function(req, res) {
        console.log('get');
        MongoClient.connect(url, function(err, db) {

            if (err) {
                res.status(500);
                res.json({
                    'error': 'Internal Server Error'
                });
            } else {
                var collection = db.collection('customers');
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
 * @api {post} /api/customers/ Create Customer
 * @apiName createCustomer
 * @apiGroup Customers
 * @apiVersion 0.0.1
 *
 * @apiParamExample {json} Post-Example:
 *     {
     *          "name" : "xxx",
     *          "address" : "xxx",
     *          "phone" : "4512",
     *          "email" : "xxx"
     *          "discount_code" : "0201"
     *     }
 *
 * @apiSuccess (Success 201) 201 Customer Created
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 Created
 *     Location : /api/customers/<ObjectId>
 *     {
     *       "message": "customer added"
     *     }
 *
 * @apiError 400 Bad Request <br>Wrongly formated <code>json</code> was sent.
 *
 * @apiError (Error 5xx) 500 Internal Server Error
 */
    .post(function(req, res) {
        console.log('post')
        MongoClient.connect(url, function(err, db) {

            if (err) {
                res.status(500);
                res.json({
                    'error': 'Internal Server Error'
                });
            } else {
                var collection = db.collection('customer');

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
                        res.location('/api/customers/' + result.insertedIds.toString());
                        res.json({
                            "message": "customer added"
                        });
                    }
                    db.close();
                });

            }


        });
    });


/**
 * @api {get} /api/customer/:id Get Customer
 * @apiName GetCustomer
 * @apiGroup Customers
 * @apiVersion 0.0.1
 *
 * @apiParam {ObjectId} id Customers unique ID.
 *
 * @apiSuccess {String} name Name of the Customer.
 * @apiSuccess {String} address Address of the Customer.
 * @apiSuccess {String} phone   Phone of the Customer.
 * @apiSuccess {String} email   email of the Customer.
 * @apiSuccess {String} discount_code   email of the Customer.
 *
 * @apiSuccess (Success 304) 304 Not Modified
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id" : "ObjectId(12345)",
 *       "name" : "xxx",
 *       "address":"xxx",
 *       "phone":"xxxxxxxxx",
 *       "email":"xxx"
 *       "discount_code":"xxx"
 *     }
 *
 * @apiSuccessExample {json} Success-Response (304):
 *     HTTP/1.1 304 Not Modified
 *
 * @apiSampleRequest http://localhost:3000/api/customers/:id
 *
 * @apiError 404 Customers Not Found
 * @apiError 400 Bad Request <br>A wrong formated <code>id</code> was sent
 *
 * @apiError (Error 5xx) 500 Internal Server Error
 *
 */

router.route('/customers/:id')
    .get(function(req, res) {
        console.log('get_id')
        MongoClient.connect(url, function(err, db) {
            if (err) {
                res.status(500).send({
                    "message": "Internal Server Error"
                });
            };

            var collection = db.collection('customers');
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
                         "href": "http://localhost:3000/customers/" + req.params.id
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
 * @api {put} /api/customers/:id Update Customer
 * @apiName UpdateCustomer
 * @apiGroup Customer
 *
 * @apiParam {ObjectId} id Customers unique ID.
 *
 * @apiSuccess (Success 201) 201 Customer Created
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 Created
 *     Location : /api/customers/<ObjectId>
 *     {
 *       "message": "customer updated"
 *     }
 *
 * @apiError 404 Customer Not Found
 * @apiError 400 Bad Request <br>Wrongly formated <code>json</code> was sent.
 *
 * @apiError (Error 5xx) 500 Internal Server Error
 *
 */
    .put(function(req, res) {
        console.log('put')
        MongoClient.connect(url, function(err, db) {

            var collection = db.collection('customers');

            collection.update({
                '_id': ObjectID(req.params.id)
            }, {
                $set: req.body
            }, function(err, result) {
                // response to the browser
                res.status(201);
                res.location('/api/customers/' + ObjectID(req.params.id));
                res.json({
                    "message": "customer edited"
                });
                db.close();
            });
        });
    })
/**
 * @api {delete} /customers/:id Delete Customers
 * @apiName DeleteCustomers
 * @apiGroup Customers
 * @apiVersion 0.0.1
 *
 * @apiParam {ObjectId} id Customers unique ID.
 *
 * @apiSuccess (Success 204) 204 No Content
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 204 No Content
 *
 * @apiError 404 Customer Not Found
 * @apiError 400 Bad Request <br>A wrong formated <code>id</code> was sent
 *
 * @apiError (Error 5xx) 500 Internal Server Error
 *
 */
    .delete(function(req, res) {
        console.log('delete')
        MongoClient.connect(url, function(err, db) {

            var collection = db.collection('customers');
            collection.remove({
                '_id': ObjectID(req.params.id)
            }, function(err, result) {
                res.status(202);
                res.json({
                    'message': 'customer customer'
                });
                db.close();
            });
        });
    });

module.exports = router;
