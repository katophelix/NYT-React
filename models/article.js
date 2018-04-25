const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  
  
  url: String,
  date: String
});

const article = mongoose.model("article", articleSchema);

module.exports = article;
