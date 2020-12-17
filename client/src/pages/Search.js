import React, {useState, useEffect} from "react";
import Jumbotron from "../components/Jumbotron/index";
import { Container, Row, Col } from "../components/Grid/index";
import MediaCard from "../components/Card";
import FormInput from "../components/FormInput";
import SearchBtn from "../components/SearchBtn";
import API from "../utils/API";
import searchAPI from "../utils/searchAPI";

function Search() {

    const [books, setBooks] = useState([])
    const [search, setSearch] = useState("")

    const searchBooks = (query) => {
        searchAPI.searchBooks(query)
            .then(res =>
                setBooks(res.data.items.map(e =>
                    createBookObject(
                        e.volumeInfo.title,
                        e.volumeInfo.authors,
                        e.volumeInfo.description,
                        e.volumeInfo.imageLinks.thumbnail,
                        e.volumeInfo.infoLink
                    )
                ))
            )
            .catch(err => console.log(err))
    }

    const createBookObject = (title, authors, description, image, link) => {
        return {title, authors, description, image, link}
    }

    const handleInputChange = (event) => {
        setSearch(event.target.value)
      };

    const handleFormSubmit = () => {
        searchBooks(search)
    }

    const saveBook = (bookObj) => {
        API.saveBook({
            title: bookObj.title,
            authors: bookObj.authors,
            description: bookObj.description,
            image: bookObj.image,
            link: bookObj.link
        })
        .catch(err => console.log(err))
    }

    return <Container>
        <Jumbotron 
        title={"Welcome to GoogleBooks"}
        description={"Search around GoogleBooks and save the ones that interest you so you can look at them later!"}
        saved={"See your saved books"}
        link={"/saved"}
        />
        <Container>
        <Row>
        <FormInput onChange={handleInputChange} />
        <SearchBtn onClick={handleFormSubmit}/>
        </Row>
        </Container>
        <Container>
            {books.length > 0 && books.map(book =>
                <MediaCard
                    book={book}
                    saveBook={saveBook}
                />
            )}
        </Container>
    </Container>
}

export default Search