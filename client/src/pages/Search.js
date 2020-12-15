import React, {useState, useEffect} from "react"
import Jumbotron from "../components/Jumbotron/index"
import { Container, Row, Col } from "../components/Grid/index"
import API from "../utils/API"

function Search() {

    const [books, setBooks] = useState([])
    const [bookObject, setBookObject] = useState({})

    // useEffect(() => {
    //     loadBooks()
    //   }, [])

    // const searchBooks = () => {
    //     searchAPI.getBooks()
    //         .then(res =>
    //             console.log(res))
    //         .catch(err => console.log(err))
    // }

    // const deleteBook = (id) => {
    //     API.deleteBook(id)
    //     .then(res => loadBooks())
    //     .catch(err => console.log(err))
    // }

    return <Container>
        <Jumbotron />
        <Container>
        </Container>
        </Container>
}

export default Search