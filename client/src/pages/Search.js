import React, {useState, useEffect} from "react"
import Jumbotron from "../components/Jumbotron/index"
import { Container, Row, Col } from "../components/Grid/index"
import API from "../utils/API"
import searchAPI from "../utils/searchAPI"

function Search() {

    const [books, setBooks] = useState([])
    const [bookObject, setBookObject] = useState({})

    useEffect(() => {
        searchBooks()
    })

    const searchBooks = () => {
        searchAPI.searchBooks()
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

    // const deleteBook = (id) => {
    //     API.deleteBook(id)
    //     .then(res => loadBooks())
    //     .catch(err => console.log(err))
    // }

    return <Container>
        <Jumbotron state={books}/>
        <Container>
        </Container>
        </Container>
}

export default Search