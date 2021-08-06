const express = require("express");

//database
const database = require("./database");




//////// initialize express 
const booky = express(); //instance of express and it's important 


/*
route              /
description        get all the books 
Access             public 
parameter           none 
method              get
*/

booky.get("/",(req,res) =>{
return res.json({books:database.books});
})


/*
route              /is
description        get specific isbn the books 
Access             public 
parameter           isbn 
method              get
*/
booky.get("/is/:isbn",(req,res) =>{
    const getSpecificBook = database.books.filter(
        (book) => book.ISBN === req.params.isbn
    );
// check is array is empty or not 
    if(getSpecificBook.length === 0){
        return res.json({error: `No book found for the ISBN of ${req.params.isbn}`})
    }

    return res.json({book:getSpecificBook});
    })


    /*
route              /c
description        get specific the books on catagory
Access             public 
parameter           category 
method              get
*/

booky.get("/c/:category",(req,res) =>{

    const getSpecificBook = database.books.filter(
        (book)=>book.category.includes(req.params.category)
    )
   
    
    if(getSpecificBook.length === 0){
        return res.json({eroor:`no books found for the category of ${req.params.category}`})
    }

    return res.json({book:getSpecificBook});
    
});


  /*
route              /l
description        get specific the books on language
Access             public 
parameter           language
method              get
*/  

booky.get("/l/:language" , (req,res) => 
{
    const getSpecificBook = database.books.filter((book)=>book.language.includes(req.params.language) );

    if(getSpecificBook.length === 0){
        return res.json({book:`sorry badak we don't find any books on ${req.params.language} language`});

    }
    else{
        return res.json({book:getSpecificBook});
    }
} );

                    // 2.author

   /*
route              /author
description        get all the author 
Access             public 
parameter           none
method              get
*/

booky.get("/author", (req,res) => {
  return res.json({authors:database.author});
});



   /*
route              /author/book
description        get all the author based on books
Access             public 
parameter           isbn
method              get
*/

booky.get("/author/book/:isbn" , (req,res) => {

const getSpecificAuthor = database.author.filter(
    (author) => author.books.includes(req.params.isbn)
);

if(getSpecificAuthor === 0){
    return res.json({error:`No author found the books of ${req.author.isbn}`});
}
});



/*
route             /author/id/
description        get list of books on author id
Access             public 
parameter           authors's name
method              get
*/

booky.get("/author/id/:id", (req,res) => {

   const  getSpecificAuthor = database.author.filter(
        (author) => author.id == parseInt(req.params.id)
        );

        if(getSpecificAuthor.length === 0){
            return res.json({error:`sorry can't found entered id no ${req.params.id}  author`});
        }
        else{
            return res.json({book:getSpecificAuthor});
        }

});





 /*
route             /publication
description        get list of publication
Access             public 
parameter           none
method              get
*/
booky.get("/publication", (req,res) => {
    return res.json({publication:database.publication});
});
    



/*
route             /publication/i
description        get the publication on the id of that publication
Access             public 
parameter           publication id
method              get
*/

booky.get("/publication/i/:id"  , (req,res) => {

  const  getSpecificPublication = database.publication.filter(
      (publication) => publication.id === parseInt(req.params.id)
  );
  if(getSpecificPublication.length===0){
      return res.json({error:`the  publication id ${req.params.id} is not found`});
  }
  else{
      return res.json({publication:getSpecificPublication});
  }

});


/*
route             /publication/book
description        get the publication book on their isbn number
Access             public 
parameter           isbn
method              get
*/

booky.get("/publication/book/:isbn", (req,res) => {

const getSpecificPublication = database.publication.filter(
    (publication) => publication.books.includes(req.params.isbn)
);

if(getSpecificPublication.length===0){
    return res.json({error: `sorry !!! we can't find ${req.params.isbn} of the publication`});

}

else{
    return res.json({publication:getSpecificPublication});
}

});













booky.listen(3000, () => {
    console.log("server is runnig ");
});
