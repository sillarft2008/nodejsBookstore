define({ "api": [
  {
    "type": "delete",
    "url": "/authors/:id",
    "title": "Delete Author",
    "name": "DeleteAuthor",
    "group": "Authors",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Authors unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>AuthorNot Found</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request <br>A wrong formated <code>id</code> was sent</p> "
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "filename": "routes/authors.js",
    "groupTitle": "Authors"
  },
  {
    "type": "get",
    "url": "/api/authors/",
    "title": "Get all Authors",
    "name": "GetAllAuthor",
    "group": "Authors",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Nname of the Author.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the Author.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone of the Author.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>email of the Author.</p> "
          }
        ],
        "Success 304": [
          {
            "group": "Success 304",
            "optional": false,
            "field": "304",
            "description": "<p>Not Modified</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\" : \"ObjectId(12345)\",\n  \"name\" : \"xxx\",\n  \"address\":\"xxx\",\n  \"phone\":\"xxxxxxxxx\",\n  \"email\":\"xxx\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response (304):",
          "content": "HTTP/1.1 304 Not Modified",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/authors/"
      }
    ],
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "filename": "routes/authors.js",
    "groupTitle": "Authors"
  },
  {
    "type": "get",
    "url": "/api/authors/:id",
    "title": "Get Author",
    "name": "GetAuthor",
    "group": "Authors",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Authors unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Author.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the Author.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone of the Author.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>email of the Author.</p> "
          }
        ],
        "Success 304": [
          {
            "group": "Success 304",
            "optional": false,
            "field": "304",
            "description": "<p>Not Modified</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\" : \"ObjectId(12345)\",\n  \"name\" : \"xxx\",\n  \"address\":\"xxx\",\n  \"phone\":\"xxxxxxxxx\",\n  \"email\":\"xxx\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response (304):",
          "content": "HTTP/1.1 304 Not Modified",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/authors/:id"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Author Not Found</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request <br>A wrong formated <code>id</code> was sent</p> "
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "filename": "routes/authors.js",
    "groupTitle": "Authors"
  },
  {
    "type": "put",
    "url": "/api/authors/:id",
    "title": "Update Author",
    "name": "UpdateAuthor",
    "group": "Authors",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Authors unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "optional": false,
            "field": "201",
            "description": "<p>Author Created</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\nLocation : /api/authors/<ObjectId>\n{\n  \"message\": \"author updated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Author Not Found</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request <br>Wrongly formated <code>json</code> was sent.</p> "
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/authors.js",
    "groupTitle": "Authors"
  },
  {
    "type": "post",
    "url": "/api/authors/",
    "title": "Create Author",
    "name": "createAuthor",
    "group": "Authors",
    "version": "0.0.1",
    "parameter": {
      "examples": [
        {
          "title": "Post-Example:",
          "content": "{\n     \"name\" : \"xxx\",\n     \"address\" : \"xxx\",\n     \"phone\" : \"4512\",\n     \"email\" : \"xxx\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "optional": false,
            "field": "201",
            "description": "<p>Author Created</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\nLocation : /api/authors/<ObjectId>\n{\n  \"message\": \"author added\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request <br>Wrongly formated <code>json</code> was sent.</p> "
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "filename": "routes/authors.js",
    "groupTitle": "Authors"
  },
  {
    "type": "get",
    "url": "/api/books/",
    "title": "Get all Books",
    "name": "GetAllBooks",
    "group": "Books",
    "version": "0.0.3",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "make",
            "description": "<p>Make of the Product.</p> "
          }
        ],
        "Success 304": [
          {
            "group": "Success 304",
            "optional": false,
            "field": "304",
            "description": "<p>Not Modified</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"title\" : \"Nodejs\",\n   \"isbn\" : 10,\n   \"subtitle\" : \"xxxxx\"\n   \"publisher\" : \"xxxxx\"\n   \"publish_date\" : \"xxxxxxsx\"\n\n }",
          "type": "json"
        },
        {
          "title": "Success-Response (304):",
          "content": "HTTP/1.1 304 Not Modified",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/products/"
      }
    ],
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "filename": "routes/books.js",
    "groupTitle": "Books"
  },
  {
    "type": "get",
    "url": "/api/books/:id",
    "title": "Get Book",
    "name": "GetBook",
    "group": "Books",
    "version": "0.0.3",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Books unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Book.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "isbn",
            "description": "<p>ISBN of the Book.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "subtitle",
            "description": "<p>Subtitle of the Book.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "publisher",
            "description": "<p>Publisher of the Book.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "publish_date",
            "description": "<p>Publish date of the book</p> "
          }
        ],
        "Success 304": [
          {
            "group": "Success 304",
            "optional": false,
            "field": "304",
            "description": "<p>Not Modified</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"title\" : \"Nodejs\",\n   \"isbn\" : 10,\n   \"subtitle\" : \"xxxxx\"\n   \"publisher\" : \"xxxxx\"\n   \"publish_date\" : \"xxxxxxsx\"\n\n }",
          "type": "json"
        },
        {
          "title": "Success-Response (304):",
          "content": "HTTP/1.1 304 Not Modified",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/books/:id"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Product Not Found</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request <br>Wrongly formated <code>id</code> was sent.</p> "
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "filename": "routes/books.js",
    "groupTitle": "Books"
  },
  {
    "type": "put",
    "url": "/api/books/:id",
    "title": "Update Book",
    "name": "UpdateBook",
    "group": "Books",
    "version": "0.0.3",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Book unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "optional": false,
            "field": "201",
            "description": "<p>book Created</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\nLocation : /api/books/<ObjectId>\n{\n  \"message\": \"Book updated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Book Not Found</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request <br>Wrongly formated <code>json</code> or <code>id</code> was sent.</p> "
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "filename": "routes/books.js",
    "groupTitle": "Books"
  },
  {
    "type": "post",
    "url": "/api/books",
    "title": "Create Book",
    "name": "createBook",
    "group": "Books",
    "version": "0.0.3",
    "parameter": {
      "examples": [
        {
          "title": "Post-Example:",
          "content": "{\n   \"user\" : <ObjectId>,\n   \"products\" : [<ObjectId>, <ObjectId>, <ObjectId>]\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "optional": false,
            "field": "201",
            "description": "<p>Book Created</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\nLocation : /api/books/<ObjectId>\n{\n  \"message\": \"product added\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request <br>Wrongly formated <code>json</code> was sent.</p> "
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "filename": "routes/books.js",
    "groupTitle": "Books"
  },
  {
    "type": "delete",
    "url": "/categories/:id",
    "title": "Delete Category",
    "name": "DeleteCategory",
    "group": "Categories",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ategories unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Category Not Found</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request <br>A wrong formated <code>id</code> was sent</p> "
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "filename": "routes/categories.js",
    "groupTitle": "Categories"
  },
  {
    "type": "get",
    "url": "/api/categories/",
    "title": "Get all Categories",
    "name": "GetAllCategory",
    "group": "Categories",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the Category.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "location",
            "description": "<p>Section where the Category is placed.</p> "
          }
        ],
        "Success 304": [
          {
            "group": "Success 304",
            "optional": false,
            "field": "304",
            "description": "<p>Not Modified</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\" : \"ObjectId(12345)\",\n  \"name\" : \"xxx\",\n}",
          "type": "json"
        },
        {
          "title": "Success-Response (304):",
          "content": "HTTP/1.1 304 Not Modified",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/categories/"
      }
    ],
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "filename": "routes/categories.js",
    "groupTitle": "Categories"
  },
  {
    "type": "get",
    "url": "/api/categories/:id",
    "title": "Get Category",
    "name": "GetCategory",
    "group": "Categories",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Categories unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the Category.</p> "
          }
        ],
        "Success 304": [
          {
            "group": "Success 304",
            "optional": false,
            "field": "304",
            "description": "<p>Not Modified</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\" : \"ObjectId(12345)\",\n  \"name\" : \"xxx\",\n}",
          "type": "json"
        },
        {
          "title": "Success-Response (304):",
          "content": "HTTP/1.1 304 Not Modified",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/categories/:id"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Category Not Found</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request <br>A wrong formated <code>id</code> was sent</p> "
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "filename": "routes/categories.js",
    "groupTitle": "Categories"
  },
  {
    "type": "put",
    "url": "/api/categories/:id",
    "title": "Update Category",
    "name": "UpdateCategory",
    "group": "Categories",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Categories unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "optional": false,
            "field": "201",
            "description": "<p>Category Created</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\nLocation : /api/categories/<ObjectId>\n{\n  \"message\": \"category updated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Category Not Found</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request <br>Wrongly formated <code>json</code> was sent.</p> "
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/categories.js",
    "groupTitle": "Categories"
  },
  {
    "type": "post",
    "url": "/api/categories/",
    "title": "Create Category",
    "name": "createCategory",
    "group": "Categories",
    "version": "0.0.1",
    "parameter": {
      "examples": [
        {
          "title": "Post-Example:",
          "content": "{\n     \"name\" : \"xxx\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "optional": false,
            "field": "201",
            "description": "<p>CategoryCreated</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\nLocation : /api/categories/<ObjectId>\n{\n  \"message\": \"category added\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request <br>Wrongly formated <code>json</code> was sent.</p> "
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "filename": "routes/categories.js",
    "groupTitle": "Categories"
  },
  {
    "type": "put",
    "url": "/api/customers/:id",
    "title": "Update Customer",
    "name": "UpdateCustomer",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Customers unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "optional": false,
            "field": "201",
            "description": "<p>Customer Created</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\nLocation : /api/customers/<ObjectId>\n{\n  \"message\": \"customer updated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Customer Not Found</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request <br>Wrongly formated <code>json</code> was sent.</p> "
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/customers.js",
    "groupTitle": "Customer"
  },
  {
    "type": "delete",
    "url": "/customers/:id",
    "title": "Delete Customers",
    "name": "DeleteCustomers",
    "group": "Customers",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Customers unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Customer Not Found</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request <br>A wrong formated <code>id</code> was sent</p> "
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "filename": "routes/customers.js",
    "groupTitle": "Customers"
  },
  {
    "type": "get",
    "url": "/api/customers/",
    "title": "Get all Customers",
    "name": "GetAllCustomers",
    "group": "Customers",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Customer.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the Customer.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone of the Customer.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>email of the Customer.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "discount_code",
            "description": "<p>discount code of the Customer.</p> "
          }
        ],
        "Success 304": [
          {
            "group": "Success 304",
            "optional": false,
            "field": "304",
            "description": "<p>Not Modified</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\" : \"ObjectId(12345)\",\n  \"name\" : \"xxx\",\n  \"address\":\"xxx\",\n  \"phone\":\"xxxxxxxxx\",\n  \"email\":\"xxx\"\n  \"discount_code\":\"0201\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response (304):",
          "content": "HTTP/1.1 304 Not Modified",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/customers/"
      }
    ],
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "filename": "routes/customers.js",
    "groupTitle": "Customers"
  },
  {
    "type": "get",
    "url": "/api/customer/:id",
    "title": "Get Customer",
    "name": "GetCustomer",
    "group": "Customers",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Customers unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Customer.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the Customer.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone of the Customer.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>email of the Customer.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "discount_code",
            "description": "<p>email of the Customer.</p> "
          }
        ],
        "Success 304": [
          {
            "group": "Success 304",
            "optional": false,
            "field": "304",
            "description": "<p>Not Modified</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\" : \"ObjectId(12345)\",\n  \"name\" : \"xxx\",\n  \"address\":\"xxx\",\n  \"phone\":\"xxxxxxxxx\",\n  \"email\":\"xxx\"\n  \"discount_code\":\"xxx\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response (304):",
          "content": "HTTP/1.1 304 Not Modified",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/customers/:id"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Customers Not Found</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request <br>A wrong formated <code>id</code> was sent</p> "
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "filename": "routes/customers.js",
    "groupTitle": "Customers"
  },
  {
    "type": "post",
    "url": "/api/customers/",
    "title": "Create Customer",
    "name": "createCustomer",
    "group": "Customers",
    "version": "0.0.1",
    "parameter": {
      "examples": [
        {
          "title": "Post-Example:",
          "content": "{\n     \"name\" : \"xxx\",\n     \"address\" : \"xxx\",\n     \"phone\" : \"4512\",\n     \"email\" : \"xxx\"\n     \"discount_code\" : \"0201\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "optional": false,
            "field": "201",
            "description": "<p>Customer Created</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\nLocation : /api/customers/<ObjectId>\n{\n  \"message\": \"customer added\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request <br>Wrongly formated <code>json</code> was sent.</p> "
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "filename": "routes/customers.js",
    "groupTitle": "Customers"
  },
  {
    "type": "delete",
    "url": "/prices/:id",
    "title": "Delete Price",
    "name": "DeletePrice",
    "group": "Price",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Prices unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Price Not Found</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request <br>A wrong formated <code>id</code> was sent</p> "
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "filename": "routes/prices.js",
    "groupTitle": "Price"
  },
  {
    "type": "get",
    "url": "/api/prices/",
    "title": "Get all Prices",
    "name": "GetAllPrices",
    "group": "Prices",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "base_price",
            "description": "<p>Base price of the Book.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "sale_price",
            "description": "<p>Selling price of the Book.</p> "
          }
        ],
        "Success 304": [
          {
            "group": "Success 304",
            "optional": false,
            "field": "304",
            "description": "<p>Not Modified</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\" : \"ObjectId(12345)\",\n  \"base_price\" : 255.50,\n  \"sale_price\": 300,\n}",
          "type": "json"
        },
        {
          "title": "Success-Response (304):",
          "content": "HTTP/1.1 304 Not Modified",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/prices/"
      }
    ],
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "filename": "routes/prices.js",
    "groupTitle": "Prices"
  },
  {
    "type": "get",
    "url": "/api/prices/:id",
    "title": "Get Price",
    "name": "GetPrice",
    "group": "Prices",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Prices unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "base_price",
            "description": "<p>Base price of the Book.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "sale_price",
            "description": "<p>Selling price of the Book.</p> "
          }
        ],
        "Success 304": [
          {
            "group": "Success 304",
            "optional": false,
            "field": "304",
            "description": "<p>Not Modified</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\" : \"ObjectId(12345)\",\n  \"base_price\" : 225,\n  \"sale_price\":250,\n}",
          "type": "json"
        },
        {
          "title": "Success-Response (304):",
          "content": "HTTP/1.1 304 Not Modified",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/prices/:id"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Price Not Found</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request <br>A wrong formated <code>id</code> was sent</p> "
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "filename": "routes/prices.js",
    "groupTitle": "Prices"
  },
  {
    "type": "put",
    "url": "/api/prices/:id",
    "title": "Update Price",
    "name": "UpdatePrice",
    "group": "Prices",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Prices unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "optional": false,
            "field": "201",
            "description": "<p>Price Created</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\nLocation : /api/prices/<ObjectId>\n{\n  \"message\": \"price updated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Price Not Found</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request <br>Wrongly formated <code>json</code> was sent.</p> "
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/prices.js",
    "groupTitle": "Prices"
  },
  {
    "type": "post",
    "url": "/api/prices/",
    "title": "Create Price",
    "name": "createPrice",
    "group": "Prices",
    "version": "0.0.1",
    "parameter": {
      "examples": [
        {
          "title": "Post-Example:",
          "content": "{\n     \"base_price\" : 200,\n     \"sale_price\" : 220.50,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "optional": false,
            "field": "201",
            "description": "<p>Price Created</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\nLocation : /api/prices/<ObjectId>\n{\n  \"message\": \"price added\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request <br>Wrongly formated <code>json</code> was sent.</p> "
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "filename": "routes/prices.js",
    "groupTitle": "Prices"
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Delete User",
    "name": "DeleteUser",
    "group": "Users",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User Not Found</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request <br>A wrong formated <code>id</code> was sent</p> "
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/api/users/",
    "title": "Get all Users",
    "name": "GetAllUser",
    "group": "Users",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Firstname of the User.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the User.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone of the User.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>email of the User.</p> "
          }
        ],
        "Success 304": [
          {
            "group": "Success 304",
            "optional": false,
            "field": "304",
            "description": "<p>Not Modified</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\" : \"ObjectId(12345)\",\n  \"name\" : \"xxx\",\n  \"lastname\":\"xxx\",\n  \"address\":\"xxx\",\n  \"phone\":\"xxxxxxxxx\",\n  \"email\":\"xxx\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response (304):",
          "content": "HTTP/1.1 304 Not Modified",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/users/"
      }
    ],
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/api/users/:id",
    "title": "Get User",
    "name": "GetUser",
    "group": "Users",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Firstname of the User.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the User.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone of the User.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>email of the User.</p> "
          }
        ],
        "Success 304": [
          {
            "group": "Success 304",
            "optional": false,
            "field": "304",
            "description": "<p>Not Modified</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\" : \"ObjectId(12345)\",\n  \"name\" : \"xxx\",\n  \"lastname\":\"xxx\",\n  \"address\":\"xxx\",\n  \"phone\":\"xxxxxxxxx\",\n  \"email\":\"xxx\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response (304):",
          "content": "HTTP/1.1 304 Not Modified",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/users/:id"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User Not Found</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request <br>A wrong formated <code>id</code> was sent</p> "
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/api/users/:id",
    "title": "Update User",
    "name": "UpdateUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "optional": false,
            "field": "201",
            "description": "<p>User Created</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\nLocation : /api/users/<ObjectId>\n{\n  \"message\": \"user updated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>User Not Found</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request <br>Wrongly formated <code>json</code> was sent.</p> "
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/api/users/",
    "title": "Create User",
    "name": "createUser",
    "group": "Users",
    "version": "0.0.1",
    "parameter": {
      "examples": [
        {
          "title": "Post-Example:",
          "content": "{\n     \"name\" : \"xxx\",\n     \"lastName\" : \"xxx\",\n     \"address\" : \"xxx\",\n     \"phone\" : \"4512\",\n     \"email\" : \"xxx\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "optional": false,
            "field": "201",
            "description": "<p>User Created</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\nLocation : /api/users/<ObjectId>\n{\n  \"message\": \"user added\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request <br>Wrongly formated <code>json</code> was sent.</p> "
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "delete",
    "url": "/api/books/:id",
    "title": "Delete Book",
    "name": "DeleteBook",
    "group": "books",
    "version": "0.0.3",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Book unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Product Not Found</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400",
            "description": "<p>Bad Request <br>A wrong formated <code>id</code> was sent</p> "
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "filename": "routes/books.js",
    "groupTitle": "books"
  }
] });