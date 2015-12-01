var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
//var url = 'mongodb://localhost/bookstore';
var url = 'mongodb://admin:admin@ds035280.mongolab.com:35280/book_store';

/**
 * @api {get} /api/authors/ Get all Authors
 * @apiName GetAllAuthor
 * @apiGroup Authors
 * @apiVersion 0.0.1
 *
 * @apiSuccess {String} name Nname of the Author.
 * @apiSuccess {String} address Address of the Author.
 * @apiSuccess {String} phone   Phone of the Author.
 * @apiSuccess {String} email   email of the Author.
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
 *     }
 *
 * @apiSuccessExample {json} Success-Response (304):
 *     HTTP/1.1 304 Not Modified
 *
 * @apiSampleRequest http://localhost:3000/api/authors/
 *
 * @apiError (Error 5xx) 500 Internal Server Error
 *
 */

router.route('/authors/')
    .get(function(req, res) {
        console.log('authors_get');
        if (req.decoded.administrator === false) {
            res.status(500);
            res.json({
                'error': 'user not allowed to do this'
            });
        }
        else {
            MongoClient.connect(url, function (err, db) {

                if (err) {
                    res.status(500);
                    res.json({
                        'error': 'Internal Server Error'
                    });
                } else {
                    var collection = db.collection('authors');
                    collection.find().toArray(function (err, result) {

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
        }
    })
/**
 * @api {post} /api/authors/ Create Author
 * @apiName createAuthor
 * @apiGroup Authors
 * @apiVersion 0.0.1
 *
 * @apiParamExample {json} Post-Example:
 *     {
     *          "name" : "xxx",
     *          "address" : "xxx",
     *          "phone" : "4512",
     *          "email" : "xxx"
     *     }
 *
 * @apiSuccess (Success 201) 201 Author Created
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 Created
 *     Location : /api/authors/<ObjectId>
 *     {
     *       "message": "author added"
     *     }
 *
 * @apiError 400 Bad Request <br>Wrongly formated <code>json</code> was sent.
 *
 * @apiError (Error 5xx) 500 Internal Server Error
 */
    .post(function(req, res) {
        console.log('authors_post');
        if (req.decoded.administrator === false) {
            res.status(500);
            res.json({
                'error': 'user not allowed to do this'
            });
        }
        else {
            MongoClient.connect(url, function (err, db) {

                if (err) {
                    res.status(500);
                    res.json({
                        'error': 'Internal Server Error'
                    });
                } else {
                    var collection = db.collection('authors');

                    collection.insert(req.body, function (err, result) {

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
                            res.location('/api/authors/' + result.insertedIds.toString());
                            res.json({
                                "message": "author added"
                            });
                        }
                        db.close();
                    });
                }
            });
        }
    });


/**
 * @api {get} /api/authors/:id Get Author
 * @apiName GetAuthor
 * @apiGroup Authors
 * @apiVersion 0.0.1
 *
 * @apiParam {ObjectId} id Authors unique ID.
 *
 * @apiSuccess {String} name Name of the Author.
 * @apiSuccess {String} address Address of the Author.
 * @apiSuccess {String} phone   Phone of the Author.
 * @apiSuccess {String} email   email of the Author.
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
 *     }
 *
 * @apiSuccessExample {json} Success-Response (304):
 *     HTTP/1.1 304 Not Modified
 *
 * @apiSampleRequest http://localhost:3000/api/authors/:id
 *
 * @apiError 404 Author Not Found
 * @apiError 400 Bad Request <br>A wrong formated <code>id</code> was sent
 *
 * @apiError (Error 5xx) 500 Internal Server Error
 *
 */

router.route('/authors/:id')
    .get(function(req, res) {
        console.log('authors_get_id');
        if (req.decoded.administrator === false) {
            res.status(500);
            res.json({
                'error': 'user not allowed to do this'
            });
        }
        else {
            MongoClient.connect(url, function (err, db) {
                if (err) {
                    res.status(500).send({
                        "message": "Internal Server Error"
                    });
                }
                ;

                var collection = db.collection('authors');
                try {
                    collection.findOne({
                        '_id': ObjectID(req.params.id)
                    }, function (err, result) {

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
                             "href": "http://localhost:3000/authors/" + req.params.id
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
        }
    })

/**
 * @api {put} /api/authors/:id Update Author
 * @apiName UpdateAuthor
 * @apiGroup Authors
 *
 * @apiParam {ObjectId} id Authors unique ID.
 *
 * @apiSuccess (Success 201) 201 Author Created
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 Created
 *     Location : /api/authors/<ObjectId>
 *     {
 *       "message": "author updated"
 *     }
 *
 * @apiError 404 Author Not Found
 * @apiError 400 Bad Request <br>Wrongly formated <code>json</code> was sent.
 *
 * @apiError (Error 5xx) 500 Internal Server Error
 *
 */
    .put(function(req, res) {
        console.log('authors_put');
        if (req.decoded.administrator === false) {
            res.status(500);
            res.json({
                'error': 'user not allowed to do this'
            });
        }
        else {
            MongoClient.connect(url, function (err, db) {

                var collection = db.collection('authors');

                collection.update({
                    '_id': ObjectID(req.params.id)
                }, {
                    $set: req.body
                }, function (err, result) {
                    // response to the browser
                    res.status(201);
                    res.location('/api/authors/ ' + ObjectID(req.params.id));
                    res.json({
                        "message": "author edited"
                    });
                    db.close();
                });
            });
        }
    })
/**
 * @api {delete} /authors/:id Delete Author
 * @apiName DeleteAuthor
 * @apiGroup Authors
 * @apiVersion 0.0.1
 *
 * @apiParam {ObjectId} id Authors unique ID.
 *
 * @apiSuccess (Success 204) 204 No Content
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 204 No Content
 *
 * @apiError 404 AuthorNot Found
 * @apiError 400 Bad Request <br>A wrong formated <code>id</code> was sent
 *
 * @apiError (Error 5xx) 500 Internal Server Error
 *
 */
    .delete(function(req, res) {
        console.log('authors_delete');
        if (req.decoded.administrator === false) {
            res.status(500);
            res.json({
                'error': 'user not allowed to do this'
            });
        }
        else {

            MongoClient.connect(url, function (err, db) {

                var collection = db.collection('authors');
                collection.remove({
                    '_id': ObjectID(req.params.id)
                }, function (err, result) {
                    res.status(202);
                    res.json({
                        'message': 'author deleted'
                    });
                    db.close();
                });
            });
        }
    });

module.exports = router;
