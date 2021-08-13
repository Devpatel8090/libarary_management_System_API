const mongoose = require("mongoose");

const BookShcema = mongoose.Schema(
    
        {
            ISBN : String,
            title : String,
            pubDate : String,
            language: String,
            numPage: String,
            author:[Number],
            publication : [Number],
            category:[String]
        }
    
)

const bookModel = mongoose.model("books",BookShcema);

module.exports = bookModel;