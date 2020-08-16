import axios from "axios";
const prefix = "http://localhost:3001"

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
    return axios.post("/api/books", bookData, {withCredentials:true});
  }
};
