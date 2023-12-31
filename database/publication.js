const mongoose = require("mongoose");

// create a  schema
const PublicationSchema = mongoose.Schema({
    id: Number,
    name: String,
    books: [String],
});

// convert to model 
const PublicationModel = mongoose.model("publications",PublicationSchema);

// export 
module.exports = PublicationModel;