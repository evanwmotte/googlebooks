import React, {useState, useEffect} from "react";
import Jumbotron from "../components/Jumbotron/index";
import { Container, Row, Col } from "../components/Grid/index";
import SavedCard from "../components/SavedCard";
import API from "../utils/API";

function Saved() {

    const [savedBooks, setSavedBooks] = useState([])

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        API.getBooks()
          .then(res => 
            setSavedBooks(res.data)
          )
          .catch(err => console.log(err));
      };

      function deleteBook(id) {
        API.deleteBook(id)
          .then(res => loadBooks())
          .catch(err => console.log(err));
      }

    return <Container>
        <Container>
    <Jumbotron 
    title={"Welcome to GoogleBooks"}
    description={"Explore your saved books here"}
    saved={"Back to Book Search"}
    link={"/"}
    />
    </Container>
    <Container>
    {savedBooks.length > 0 && savedBooks.map(book =>
                <SavedCard
                    book={book}
                    deleteBook={deleteBook}
                />
            )}
    </Container>
    </Container>
}

export default Saved