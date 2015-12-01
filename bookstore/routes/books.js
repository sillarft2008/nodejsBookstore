var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var books = require('node-isbn');
//var url = 'mongodb://localhost/bookstore';
var url = 'mongodb://admin:admin@ds035280.mongolab.com:35280/book_store';

/**
 * @api {get} /api/books/ Get all Books
 * @apiName GetAllBooks
 * @apiGroup Books
 * @apiVersion 0.0.3
 *
 * @apiSuccess {String} make Make of the Product.
 *
 * @apiSuccess (Success 304) 304 Not Modified
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "title" : "Nodejs",
 *       "isbn" : 10,
 *       "subtitle" : "xxxxx"
 *       "publisher" : "xxxxx"
 *       "publish_date" : "xxxxxxsx"
 *
 *     }
 *
 * @apiSuccessExample {json} Success-Response (304):
 *     HTTP/1.1 304 Not Modified
 *
 * @apiSampleRequest http://localhost:3000/api/products/
 *
 * @apiError (Error 5xx) 500 Internal Server Error
 *
 */

router.route('/books/')
    .get(function(req, res) {
        if (req.headers['isbn'] === undefined) {
            MongoClient.connect(url, function (err, db) {

                if (err) {
                    res.status(500);
                    res.json({
                        'error': 'Internal Server Error'
                    });
                } else {
                    var collection = db.collection('books');
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
        }else if (req.headers['isbn'].length === 10){
            console.log("isbn 10")
            MongoClient.connect(url, function (err, db) {
                console.log(req.headers['isbn']);
                if (err) {
                    res.status(500);
                    res.json({
                        'error': 'Internal Server Error'
                    });
                } else {
                    var collection = db.collection('books');
                    collection.find({"isbn_10":req.headers['isbn']}).toArray(function (err, result) {
                        console.log(result)
                        if (err) {
                            res.status(500);
                            res.json({
                                'error': 'Internal Server Error'
                            });
                        }else if (result.length === 0){
                        console.log("isbn-10 not found")
                            books.resolve(req.headers['isbn'], function(err, result) {
                                if (err) {
                                    res.status(500);
                                    res.json({
                                        'error': 'Internal Server Error'
                                    });
                                }else {
                                    res.status(200);
                                    res.json(result);
                                }
                            })
                        } else {
                            res.status(200);
                            res.json(result);
                        }

                        db.close();
                    });
                }
            });
        }else if (req.headers['isbn'].length === 13){
            MongoClient.connect(url, function (err, db) {
                console.log(req.headers['isbn']);
                if (err) {
                    res.status(500);
                    res.json({
                        'error': 'Internal Server Error'
                    });
                } else {
                    var collection = db.collection('books');
                    collection.find({"isbn_13":req.headers['isbn']}).toArray(function (err, result) {
                        if (err) {
                            res.status(500);
                            res.json({
                                'error': 'Internal Server Error'
                            });
                        }else if (result.length === 0){
                            console.log("isbn-10 not found")
                            books.resolve(req.headers['isbn'], function(err, result) {
                                if (err) {
                                    res.status(500);
                                    res.json({
                                        'error': 'Internal Server Error'
                                    });
                                }else {
                                    res.status(200);
                                    res.json(result);
                                }
                            })
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
 * @api {post} /api/books Create Book
 * @apiName createBook
 * @apiGroup Books
 * @apiVersion 0.0.3
 *
 * @apiParamExample {json} Post-Example:
 *    {
     *       "user" : <ObjectId>,
     *       "products" : [<ObjectId>, <ObjectId>, <ObjectId>]
     *     }
 *
 * @apiSuccess (Success 201) 201 Book Created
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 Created
 *     Location : /api/books/<ObjectId>
 *     {
     *       "message": "product added"
     *     }
 *
 * @apiError 400 Bad Request <br>Wrongly formated <code>json</code> was sent.
 *
 * @apiError (Error 5xx) 500 Internal Server Error
 */
    .post(function(req, res) {
    console.log("books_post");
        MongoClient.connect(url, function(err, db) {
            if (err) {
                res.status(500);
                res.json({
                    'error': 'Internal Server Error'
                });
            } else {
                var bookCollection = db.collection('books');
                var authorCollection = db.collection('authors');
                var categoriesCollection = db.collection('categories');
                var booksTotal = {};
                booksTotal.title = req.body.title;
                booksTotal.isbn_10 = req.body.isbn_10;
                booksTotal.isbn_13 = req.body.isbn_13;
                booksTotal.subtitle = req.body.subtitle;
                booksTotal.publisher = req.body.publisher;
                booksTotal.publishedDate = req.body.publishedDate;
                booksTotal.description = req.body.description;
                booksTotal.pagecount = req.body.pagecount;
                booksTotal.averageRating = req.body.averageRating;
                booksTotal.finishedDate = req.body.finishedDate;
                booksTotal.personalRate = req.body.personalRate;
                booksTotal.notes = req.body.notes;
                booksTotal.authors = [];
                req.body.authors.forEach(function(element, index, array) {
                    authorCollection.findOne({
                        '_id': ObjectID(element)
                    }, function(err, result) {
                        if (err) {
                            console.log(err);
                            res.status(500).send({
                                "message": "Internal Server Error"
                            });
                        } else if (result === null) {
                            res.status(404).send({
                                "msg": "author does not exist"
                            });
                        } else {
                            booksTotal.authors.push(result);
                            if (index === array.length - 1) {
                                booksTotal.categories = [];
                                req.body.categories.forEach(function (element2, index2, array) {
                                    categoriesCollection.findOne({
                                        '_id': ObjectID(element2)
                                    }, function (err, result2) {
                                        if (err) {
                                            console.log(err);
                                            res.status(500).send({
                                                "message": "Internal Server Error"
                                            });
                                        } else if (result === null) {
                                            res.status(404).send({
                                                "msg": "category does not exist"
                                            });
                                        } else {
                                            booksTotal.categories.push(result2);
                                            if (index2 === array.length - 1) {
                                                bookCollection.insert(booksTotal, function (err, result) {
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
                                                        res.location('/api/books/' + result.insertedIds.toString());
                                                        res.json({
                                                            "message": "book added"
                                                        });
                                                    }
                                                    db.close();
                                                });
                                            }
                                        }
                                    });
                                });
                            }
                        }
                    });
                });
            }
        });
    });

/**
 * @api {get} /api/books/:id Get Book
 * @apiName GetBook
 * @apiGroup Books
 * @apiVersion 0.0.3
 *
 * @apiParam {ObjectId} id Books unique ID.
 *
 * @apiSuccess {String} title Title of the Book.
 * @apiSuccess {String} isbn ISBN of the Book.
 * @apiSuccess {String} subtitle Subtitle of the Book.
 * @apiSuccess {String} publisher Publisher of the Book.
 * @apiSuccess {String} publish_date Publish date of the book
 *
 * @apiSuccess (Success 304) 304 Not Modified
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "title" : "Nodejs",
 *       "isbn" : 10,
 *       "subtitle" : "xxxxx"
 *       "publisher" : "xxxxx"
 *       "publish_date" : "xxxxxxsx"
 *
 *     }
 *
 * @apiSuccessExample {json} Success-Response (304):
 *     HTTP/1.1 304 Not Modified
 *
 * @apiSampleRequest /api/books/:id
 *
 * @apiError 404 Product Not Found
 * @apiError 400 Bad Request <br>Wrongly formated <code>id</code> was sent.
 *
 * @apiError (Error 5xx) 500 Internal Server Error
 */

router.route('/books/:id')
    .get(function(req, res) {

        MongoClient.connect(url, function(err, db) {
            if (err) {
                res.status(500).send({
                    "message": "Internal Server Error"
                });
            };

            var collection = db.collection('books');
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
 * @api {put} /api/books/:id Update Book
 * @apiName UpdateBook
 * @apiGroup Books
 * @apiVersion 0.0.3
 *
 * @apiParam {ObjectId} id Book unique ID.
 *
 * @apiSuccess (Success 201) 201 book Created
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 Created
 *     Location : /api/books/<ObjectId>
 *     {
 *       "message": "Book updated"
 *     }
 *
 * @apiError 404 Book Not Found
 * @apiError 400 Bad Request <br>Wrongly formated <code>json</code> or <code>id</code> was sent.
 *
 * @apiError (Error 5xx) 500 Internal Server Error
 *
 */
    .put(function(req, res) {
        MongoClient.connect(url, function(err, db) {

            var collection = db.collection('books');

            collection.update({
                '_id': ObjectID(req.params.id)
            }, {
                $set: req.body
            }, function(err, result) {
                // response to the browser
                res.status(201);
                res.location('/api/books/' + ObjectID(req.params.id));
                res.json({
                    "message": "book edited"
                });
                db.close();
            });
        });
    })
/**
 * @api {delete} /api/books/:id Delete Book
 * @apiName DeleteBook
 * @apiGroup books
 * @apiVersion 0.0.3
 *
 * @apiParam {ObjectId} id Book unique ID.
 *
 * @apiSuccess (Success 204) 204 No Content
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 204 No Content
 *
 * @apiError 404 Product Not Found
 * @apiError 400 Bad Request <br>A wrong formated <code>id</code> was sent
 *
 * @apiError (Error 5xx) 500 Internal Server Error
 *
 */
    .delete(function(req, res) {

        MongoClient.connect(url, function(err, db) {

            var collection = db.collection('books');
            collection.remove({
                '_id': ObjectID(req.params.id)
            }, function(err, result) {
                res.status(202);
                res.json({
                    'message': 'book deleted'
                });
                db.close();
            });
        });
    });

module.exports = router;
