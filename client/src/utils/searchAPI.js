import axios from "axios";

let searchTerm = "monster"
const apiKey = "AIzaSyAioEUPbdpPWlE5exVbwgmXkux4SgTYMrw"

export default{
  searchBooks: function() {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=` + searchTerm + `&key=` + apiKey)
  }
};