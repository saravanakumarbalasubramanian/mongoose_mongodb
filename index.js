{// how to use express
// 1st require express

// const express = require("express");

// // 2nd we have to  start the express 
// const vercues = express(); // starting the express 

// // 3rd we have to tell the express to understand the json format data because we are always using json format data 

// vercues.use(express.json());


// //  http requests 
// // GET
// // POST 
// // PUT
// // DELETE

// // 1st GET method
// vercues.get('/', (request, response) =>  {
//     return response.json("Hello Traders");
// });

// vercues.get('/home', (req, res) => {
//     return res.json("welcome to home page");
// });


// const stuDb = [
//     {
//          id: 1,
//          name:"saravana kumar b",
//          course: "b.tech",
//     },
//     {
//          id: 2,
//          name:"sasi kumar r",
//          course: "b.tech",
//     },
//     {
//          id: 3,
//          name:"sharan m",
//          course: "b.tech",
//     },
//     {
//          id: 4,
//          name:"sharath chandran p",
//          course: "b.tech",
//     },
//     {
//          id: 5,
//          name:"suresh",
//          course: "b.tech",
//     },
// ];
// vercues.get('/students/:id' , (req, res) => {
 
//     const stdId = req.params.id;
//     const stData = stuDb.filter((iddata) => iddata.id === parseInt(stdId));

//     if(stData.length === 0 ) {
//         return res.json("{No such Student found !}");
//     };

//     return res.json({"data" : stData});
// })




// // 4th  we have to initilaze the server 

// vercues.listen(5000, () => console.log("Server is Started 🚀 "));

}
// dotenv registration 
require("dotenv").config();

// what is used to create a server 
// express is used to create a server 
// to use express 1st require express form node
const express = require("express");

//2nd after required the express use the express
const threads = express();

// 3rd after using the express we have to tell the express to learn the json becouse we are sending and receiving the data in json format 
threads.use(express.json());

// getting the database data 
const database = require("./database/index");

// mongoose 
const mongoose = require("mongoose");

// establish the connection to mongodb
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Database Connection established"));

// import modals (schema models) 
const BookModel = require("./database/book");
const AuthorModel = require("./database/author");
const PublicationModel = require("./database/publication");

// API files
const Books = require("./API/bookapis");
const Authors = require("./API/authorapis");
const Publications = require("./API/publicationapis");


// Intialize the prefix each file contains set of API's

threads.use('/book', Books);
threads.use('/author', Authors);
threads.use('/publications', Publications);



//                                                  API's
{
//-------------------------------------------------------books--------------------------------------------------------------------------------------------
{
//     /*Route - /
// Description - to get all book
// Access - PUBLIC
// Parameter - NONE
// Methods - GET
// */
// // this api is for the database that we created in index.js file
// // Router.get('/books', (req, res) =>{
// //     return res.json({data : database.books})
// // });

// // this api is for get all books form out mongodb
// Router.get('/books', async (req, res) =>{
//     const getAllBooks = await BookModel.find();
//     return res.json(getAllBooks);
// });

// /* 
// Route - /
// Description - to get specfic book based on isbn
// Access - PUBLIC
// Parameter - isbn
// Methods - GET
// */
// Router.get('/:isbn', async (req, res) => {
//     const id = req.params.isbn;
// //     const books = database.books;
// //    const getSpecificBook = books.filter((book) => book.ISBN === id);
//  const getSpecificBook = await BookModel.findOne({ISBN : req.params.isbn});
//    if(!getSpecificBook){
//     return res.json(`error : No book found for this isbn ${id}`);
//    };

//    return res.json(getSpecificBook);
// });

// /* 
// Route - /books
// Description - to get specfic book based on category
// Access - PUBLIC
// Parameter - category
// Methods - GET
// */
// Router.get('/c/:category', async (req, res) => {
//     const category = req.params.category;
//     // const getBooks = database.books;
//     // const getCategory = getBooks.filter((booksdata) => booksdata.category.includes(category));
//     const getCategory = await BookModel.findOne({category: req.params.category});
//     if(!getCategory){
//         return res.json(` error : error for this  category ${category} `)
//     }
//     return res.json({details : getCategory})
// })


// /* 
// Route - /lang
// Description - to get specfic book based on languages
// Access - PUBLIC
// Parameter - lang
// Methods - GET
// */
// Router.get('/lang/:lang', (req, res) => {
//     const getBooks = database.books.filter((books) => books.languages === req.params.lang);
//     if(getBooks.length === 0) {
//         return res.json("No Book found based on this language")
//     };

//     return res.json({books : getBooks})
// })


// /* 
// Route - /books/addnew
// Description - add new book
// Access - PUBLIC
// Parameter - none
// Methods - POST
// */
// Router.post('/books/addnew', async (req, res) => {
//    // const newBook = req.body.newBook;
//    const {newBook} = req.body; // both are same it is called destructre method 
//   // database.books.push(newBook);
//    const addNewBook = await BookModel.create(newBook); 
//   return res.json({books: addNewBook});
// });


// /* 
// Route - /book/update/title/:isbn
// Description - update book title 
// Access - PUBLIC
// Parameter - isbn
// Methods - PUT
// */
// Router.put('/book/update/title/:isbn', async (req, res) => {
//     // database.books.forEach((data) => {
//     //     if(data.ISBN === req.params.isbn){
//     //         data.title = req.body.newtitle;
//     //         return;
//     //     }
//     // });

//     // in mongodb form 
//     const updatedBookTitle = await BookModel.findOneAndUpdate(
//         { // to find the book with isbn
//             ISBN : req.params.isbn,
//         },
//         { // after finding the book update the book title
//             title: req.body.newTitle,
//         },
//         { // after updated the title => get the whole book with updated book title to achive that use new:true,
//             new: true,
//         },
//         );
//     return res.json({books : updatedBookTitle})
// });


// /* 
// Route - /book/author/:isbn/:authorid
// Description - update book author and the author book with the same book 
// Access - PUBLIC
// Parameter - isbn
// Methods - PUT
// */
// Router.put('/book/author/:isbn/:authorid', async (req, res) => {
//     const bookIsbn = req.params.isbn;
//     const authorId = req.params.authorid;
    
//     // database.books.forEach((data) => {
//     //     if(data.ISBN === bookIsbn){
//     //         data.author.push(parseInt(authorId))
//     //         return ;
//     //     };

//     // })
//      const updateBookAuthor = await BookModel.findOneAndUpdate(
//         {
//               ISBN: bookIsbn,
//         },
//         {
//             $push: {
//                 author : authorId,
//             },
//         },
//         {
//             new : true
//         },
//      );
//     // database.authors.forEach((data) => {
//     //    if(data.id === parseInt(authorId)){
//     //     data.books.push(bookIsbn);
//     //     return;
//     //    }
//     // });
//     const updateAuthorBookIsbn = await AuthorModel.findOneAndUpdate(
//         {
//             id : authorId,
//         },
//         {
//             $push : {
//                 books: bookIsbn,
//             }
//         },
//         {
//             new: true
//         },
//     )
//     return res.json({bookdetails: updateBookAuthor, authordetails: updateAuthorBookIsbn, message: "added successfully"});
    
// });


// /* 
// Route - /delete/book/:isbn
// Description - delete a book 
// Access - PUBLIC
// Parameter - isbn
// Methods - DELETE
// */
// Router.delete('/delete/book/:isbn', async (req, res) => {
// //   const updatedBooks =   database.books.filter(
// //     (data) => data.ISBN !== req.params.isbn
// //     );
// //     database.books= updatedBooks;
//      const updatedBooks = await BookModel.findOneAndDelete({
//         ISBN : req.params.isbn,
//      });
//    return res.json({data: updatedBooks})
// });


// /* 
// Route - /delete/book/:authorid/:isbn
// Description - delete a book from author database and delete a author form book database
// Access - PUBLIC
// Parameter - isbn/authorid
// Methods - DELETE
// */
// Router.delete('/delete/book/d/b/:authorid/:isbn', async (req, res) => {
//     // to delete a author from the book database
//     // database.books.forEach((data) => {
//     //     if(data.ISBN === req.params.isbn){
//     //         const newAuthorList = data.author.filter((data) => data  !== parseInt(req.params.authorid));
//     //        data.author = newAuthorList;
//     //         return ;
//     //     }
//     // });

//     const updateBookAuthor = await BookModel.findOneAndUpdate(
//         {
//       ISBN: req.params.isbn,
//     },
//     {
//       $pull: {
//         author: parseInt(req.params.authorid),
//       },
//     },
//     {new: true},
//     );
//    // to delete a book form the author database
// //    database.authors.forEach((data) => {
// //      if(data.id === parseInt(req.params.authorid)){
// //         const newbookRemoved = data.books.filter((data) =>data !== req.params.isbn);
// //         data.books = newbookRemoved;
// //         return ;
// //      }
// //    });

//    const updateAuthorBooks = await AuthorModel.findOneAndUpdate(
//     {
//      id: parseInt(req.params.authorid), 
//    },
//    {
//     $pull: {
//         books: req.params.isbn,
//     }
//    },
//    {new:true}
//    );
//    return res.json({ message: "The author was deleted from the book", books: updateBookAuthor, authors : updateAuthorBooks});
// });
}

//---------------------------------------------------Authors----------------------------------------------------------------------------------------------

{
//     //                 api's
// /* 
// Route - /
// Description - to get all author
// Access - PUBLIC
// Parameter - NONE
// Methods - GET
// */
// Router.get('/authors/all', async (req, res) => {
//     // return res.json({data: database.authors})
//     const allAuthors = await AuthorModel.find(); 
//     return res.json({allAuthors});
//  });
 
 
//  /* 
//  Route - /auth
//  Description - to get specfic author
//  Access - PUBLIC
//  Parameter - authorid
//  Methods - GET
//  */
//  Router.get('/auth/:authorid', (req, res) => {
//      const authorData = database.authors;
//      const specbook = req.params.authorid;
//      const bookDetatils = authorData.filter((data) => data.id === parseInt(specbook));
//      if(bookDetatils.length === 0 ){
//          return res.json(`no book found for this book id ${specbook}`)
//      }
//      return res.json(bookDetatils);
//  })
 
 
//  /* 
//  Route - /a
//  Description - to get specfic author
//  Access - PUBLIC
//  Parameter - authorbook
//  Methods - GET
//  */
//  Router.get('/a/:authorbook', (req, res) => {
//      const authordata = database.authors;
//      const booksid = req.params.authorbook;
//      const getAuthor = authordata.filter((bookdata) => bookdata.books.includes(booksid));
//      if(getAuthor.length === 0){
//          return res.json(`There is no author based on this book ${booksid}`)
//      }
//      return res.json({"Author Details" : getAuthor });
//  });
 
 
//  /* 
//  Route - /authors/addnew
//  Description - add new author
//  Access - PUBLIC
//  Parameter - none
//  Methods - POST
//  */
//  Router.post('/authors/addnew', async (req, res) => {
//      const {newAuthor} = req.body;
//      //database.authors.push(newAuthor);
//      const addNewAuthor = AuthorModel.create(newAuthor);
//      // AuthorModel.create(newAuthor); it is also possible if we give this we have to only get message in res.json
//      // return res.json(message: "book was added");
//      return res.json({newAuthors: addNewAuthor});
//  });
 
 
//  /* 
//  Route - /authors/updatename/:id
//  Description - update author name
//  Access - PUBLIC
//  Parameter - none
//  Methods - PUT
//  */
//  Router.put('/authors/updatename/:id/:newname', (req, res) => {
//      database.authors.forEach((data) => {
//          if(data.id === parseInt(req.params.id)){
//              data.name = req.params.newname;
//              return
//          }
//      });
//      return res.json({authorsdetails : database.authors});
//  });
 
 
//  /* 
//  Route - /delete/author/d/a/:id
//  Description - delete a author 
//  Access - PUBLIC
//  Parameter - id
//  Methods - DELETE
//  */
//  Router.delete('/delete/author/d/a/:id', (req, res) => {
//      const newAuthorsList =    database.authors.filter((data) => data.id !== parseInt(req.params.id));
//      database.authors = newAuthorsList;
//      return res.json({authorsList : database.authors})
//  });
}
// ------------------------------------------------publications-----------------------------------------------------------------------------------------

{
//     /* 
// Route - /
// Description - to get all publications
// Access - PUBLIC
// Parameter - NONE
// Methods - GET
// */
// threads.get("/publications", (req, res) => {
//     return res.json({data: database.publications})
// });


// /* 
// Route - /pub/:id
// Description - to get specfic publications
// Access - PUBLIC
// Parameter - id
// Methods - GET
// */
// threads.get('/pub/:id', (req, res) => {
//     const pubDetails = database.publications;
//     const getId = req.params.id;
//     const getPubDetails = pubDetails.filter((data) => data.id === parseInt(getId))
//     if(pubDetails.id !== getId){
//         return res.json(`No Author match for this id ${getId}`)
//     }
//     return res.json({"publication details" : getPubDetails})
// });


// /* 
// Route - /pub/books/:id
// Description - to get list of publication based on books
// Access - PUBLIC
// Parameter - /id
// Methods - GET
// */
// threads.get('/pub/books/:id', (req, res) => {
//     const getPubdet = database.publications.filter((data) => data.books.includes(req.params.id));
//     if(database.publications.books !== req.params.id){
//         return res.json(`No Publication are found based on this Books ${req.params.id}`);
//     } 
//     return res.json({"publication Details" : getPubdet});
// });


// /* 
// Route - /publications/addnew
// Description - add new publication 
// Access - PUBLIC
// Parameter - none
// Methods - POST
// */
// threads.post('/publications/addnew', (req, res) => {
//     const {newPub} = req.body;
//     database.publications.push(newPub);
//     return res.json({newpublication: database.publications});
// });


// /* 
// Route - /authors/publicationname/:id
// Description - update publication name
// Access - PUBLIC
// Parameter - none
// Methods - PUT
// */
// threads.put('/authors/publicationname', (req, res) => {
//     const {id} = req.body;
//     const {newname} = req.body;
//     database.publications.forEach((data) => {
//         if(data.id === id){
//             data.name = newname;
//                  return ;
//         } 
//     });
//            return res.json({publicationdetails : database.publications});
// });


// /* 
// Route - /pub/books/add/new/:bookid/:pubid
// Description - update/add a books to publications
// Access - PUBLIC
// Parameter - /:bookid/:pubid
// Methods - PUT
// */
// threads.put('/pub/books/add/new/:bookisbn/:pubid', (req, res) => {
 
//     const bookIsbn = req.params.bookisbn;
//     const pubId = req.params.pubid;

//     database.publications.forEach((data) => {
//         if(data.id === parseInt(pubId)){
//             data.books.push(bookIsbn);
//             return ;
//         }

//     })

//     database.books.forEach((data) => {
//         if(data.ISBN === bookIsbn){
//             data.publication.push(pubId);
//             return ;
//         }
//     });
//     return res.json({details: database.books, data : database.publications});
// });


// /* 
// Route - /delete/publication/d/p/:id
// Description - delete a publication
// Access - PUBLIC
// Parameter - id
// Methods - DELETE
// */
// threads.delete('/delete/publication/d/p/:id', (req, res) => {
//     const newPubList = database.publications.filter((data) => data.id !== parseInt(req.params.id));
//     database.publications = newPubList;
//     return res.json({publications : database.publications});
// });


// /* 
// Route - /delete/book/publications/:pubid/:isbn
// Description - delete a book 
// Access - PUBLIC
// Parameter - isbn/authorid
// Methods - DELETE
// */
// threads.delete('/delete/book/publications/:pubid/:isbn', (req, res) => {
// // delete a book from publication books
//     database.publications.forEach((data) => {
//         if(data.id === parseInt(req.params.pubid)){
//             const newPubBookDet = data.books.filter((book) => book !== req.params.isbn)
//             data.books = newPubBookDet;
//             return ;
//         }
//     });
// // delete a publication form the book
//     database.books.forEach((data) => {
//         if(data.ISBN === req.params.isbn){
//             data.publication = 0;
//             return ;
//         }
//     });
//          return res.json({publications: database.publications, books: database.books});
// });
}


}

// 4th step and the last step is to create the server 

threads.listen(9999, () => console.log("The Server is Started 🚀"));