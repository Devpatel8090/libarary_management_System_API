const mongoose = require("mongoose");

const PublicationShcema = mongoose.Schema(
    
        {
            id: Number,
            name : String,
            books : [String]
            
        }
    
)

const PublicationModel = mongoose.model("Publication",PublicationShcema);

module.exports = PublicationModel;