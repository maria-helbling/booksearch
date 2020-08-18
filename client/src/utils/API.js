import axios from "axios";
const prefix = "http://localhost:3001"
const BaseUrl = "https://www.googleapis.com/books/v1/volumes?q="
const APIkey = "&key=AIzaSyDjzJKwkkKEo6e431kLdnO9iD4460JDelg"
export default {
  // Gets all books
  getBooks: function() {
    return axios.get(prefix + "/api/books", {withCredentials:true});
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id, {withCredentials:true});
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id, {withCredentials:true});
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post(prefix + "/api/books/", bookData, {withCredentials:true});
  },

  //external google
  searchBooks:  function(searchTerm){
    return axios.get(BaseUrl + searchTerm + APIkey)
  }

};
