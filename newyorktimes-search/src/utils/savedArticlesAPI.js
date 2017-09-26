import axios from "axios";

export default {
  // Gets all saved articles
  getArticles: function() {
    console.log(axios.get("/api/saved"));
    return axios.get("/api/saved");
  },
  // Gets a saved article with the given id
  getArticle: function(id) {
    return axios.get("/api/saved/" + id);
  },
  // Deletes an article with the given id
  deleteArticle: function(id) {
    console.log(`delete article with id: ${id}`);
    return axios.delete("/api/saved/" + id);
  },
  // Saves an article to the database
  saveArticle: function(articleData) {
    console.log(`Article saved: ${articleData.title}`)
    return axios.post("/api/saved", articleData);
  }
};