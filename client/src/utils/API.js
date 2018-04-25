import axios from "axios";

export default {
  
    getArticlesLink: function(topic, startYear, endYear) {
      var key = "2d50c6fe99d9455da6c1df76a91ad775";
      // Got queries from NYT api Doc
      var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + key + "&q=" +
      topic + "&begin_date=" + startYear + "0101" + "&end_date=" + endYear + "1231";
      return axios.get(queryURL);
    },
  
  // Gets all articles
  getarticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getarticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deletearticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a article to the database
  savearticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
