var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
//var url = 'mongodb://localhost/bookstore';
var url = 'mongodb://admin:admin@ds035280.mongolab.com:35280/book_store';

/**
 * @api {get} /api/categories/ Get all Categories
 * @apiName GetAllCategory
 * @apiGroup Categories
 * @apiVersion 0.0.1
 *
 * @apiSuccess {String} name name of the Category.
 * @apiSuccess {String} location Section where the Category is placed.
 *
 * @apiSuccess (Success 304) 304 Not Modified
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id" : "ObjectId(12345)",
 *       "name" : "xxx",
 *     }
 *
 * @apiSuccessExample {json} Success-Response (304):
 *     HTTP/1.1 304 Not Modified
 *
 * @apiSampleRequest http://localhost:3000/api/categories/
 *
 * @apiError (Error 5xx) 500 Internal Server Error
 *
 */

router.route('/categories/')
    .get(function(req, res) {
        console.log('categories_get');
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
                    var collection = db.collection('categories');
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
 * @api {post} /api/categories/ Create Category
 * @apiName createCategory
 * @apiGroup Categories
 * @apiVersion 0.0.1
 *
 * @apiParamExample {json} Post-Example:
 *     {
     *          "name" : "xxx",
     *     }
 *
 * @apiSuccess (Success 201) 201 CategoryCreated
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 Created
 *     Location : /api/categories/<ObjectId>
 *     {
     *       "message": "category added"
     *     }
 *
 * @apiError 400 Bad Request <br>Wrongly formated <code>json</code> was sent.
 *
 * @apiError (Error 5xx) 500 Internal Server Error
 */
    .post(function(req, res) {
        console.log('categories_post');
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
                    var collection = db.collection('categories');

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
                            res.location('/api/categories/' + result.insertedIds.toString());
                            res.json({
                                "message": "category added"
                            });
                        }
                        db.close();
                    });

                }


            });
        }
    });


/**
 * @api {get} /api/categories/:id Get Category
 * @apiName GetCategory
 * @apiGroup Categories
 * @apiVersion 0.0.1
 *
 * @apiParam {ObjectId} id Categories unique ID.
 *
 * @apiSuccess {String} name name of the Category.
 *
 * @apiSuccess (Success 304) 304 Not Modified
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id" : "ObjectId(12345)",
 *       "name" : "xxx",
 *     }
 *
 * @apiSuccessExample {json} Success-Response (304):
 *     HTTP/1.1 304 Not Modified
 *
 * @apiSampleRequest http://localhost:3000/api/categories/:id
 *
 * @apiError 404 Category Not Found
 * @apiError 400 Bad Request <br>A wrong formated <code>id</code> was sent
 *
 * @apiError (Error 5xx) 500 Internal Server Error
 *
 */

router.route('/categories/:id')
    .get(function(req, res) {
        console.log('categories_get_id');
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

                var collection = db.collection('categories');
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
                             "href": "http://localhost:3000/categories/" + req.params.id
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
 * @api {put} /api/categories/:id Update Category
 * @apiName UpdateCategory
 * @apiGroup Categories
 *
 * @apiParam {ObjectId} id Categories unique ID.
 *
 * @apiSuccess (Success 201) 201 Category Created
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 Created
 *     Location : /api/categories/<ObjectId>
 *     {
 *       "message": "category updated"
 *     }
 *
 * @apiError 404 Category Not Found
 * @apiError 400 Bad Request <br>Wrongly formated <code>json</code> was sent.
 *
 * @apiError (Error 5xx) 500 Internal Server Error
 *
 */
    .put(function(req, res) {
        console.log('categories_put');
        if (req.decoded.administrator === false) {
            res.status(500);
            res.json({
                'error': 'user not allowed to do this'
            });
        }
        else {
            MongoClient.connect(url, function (err, db) {

                var collection = db.collection('categories');

                collection.update({
                    '_id': ObjectID(req.params.id)
                }, {
                    $set: req.body
                }, function (err, result) {
                    // response to the browser
                    res.status(201);
                    res.location('/api/categories/ ' + ObjectID(req.params.id));
                    res.json({
                        "message": "categories edited"
                    });
                    db.close();
                });
            });
        }
    })
/**
 * @api {delete} /categories/:id Delete Category
 * @apiName DeleteCategory
 * @apiGroup Categories
 * @apiVersion 0.0.1
 *
 * @apiParam {ObjectId} id ategories unique ID.
 *
 * @apiSuccess (Success 204) 204 No Content
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 204 No Content
 *
 * @apiError 404 Category Not Found
 * @apiError 400 Bad Request <br>A wrong formated <code>id</code> was sent
 *
 * @apiError (Error 5xx) 500 Internal Server Error
 *
 */
    .delete(function(req, res) {
        console.log('categories_delete');
        if (req.decoded.administrator === false) {
            res.status(500);
            res.json({
                'error': 'user not allowed to do this'
            });
        }
        else {
            MongoClient.connect(url, function (err, db) {

                var collection = db.collection('categories');
                collection.remove({
                    '_id': ObjectID(req.params.id)
                }, function (err, result) {
                    res.status(202);
                    res.json({
                        'message': 'category deleted'
                    });
                    db.close();
                });
            });
        }
    });

module.exports = router;
