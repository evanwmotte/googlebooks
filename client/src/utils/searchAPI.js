import axios from "axios";

const apiKey = "AIzaSyDevYNhD7v3aikDwuKFJdf4OKw2rKZmnUo"

export default{
  searchBooks: function(query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=` + query + `&key=` + apiKey)
  }
};