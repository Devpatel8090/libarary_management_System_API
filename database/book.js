const mongoose = require("mongoose");

const bookShcema = mongoose.Schema(
    
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

const bookModel = mongoose.model("books",bookShcema);

module.exports = bookModel;