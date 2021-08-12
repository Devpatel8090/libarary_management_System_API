const mongoose = require("mongoose");

const AuthorShcema = mongoose.Schema(
    
        {
            id: Number,
            name : String,
            books : [String]
            
        }
    
)

const AuthorModel = mongoose.model("Author",AuthorShcema);

module.exports = AuthorModel;