import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import API from "../utils/API";
import {Input, FormBtn} from '../components/Form'
import { Col, Row, Container } from "../components/Grid";


function Search() {
    const [search, setSearch] = useState('Tinker tailor soldier spy')
    const [result, setResult] = useState({})

    useEffect(()=>{
        searchBook(search)
    }, [])
    //calls the google API
    const searchBook = (searchTerm) =>{
        searchTerm = encodeURIComponent(searchTerm.trim())
        API.searchBooks(searchTerm)
        .then(res=> setResult(res.data.items))
        .catch(err=> console.log(err))
    }
    //search input field controller
    const handleInputChange = e => {
        const value = e.target.value
        setSearch(value)
    }
    //search button click handler
    const handleFormSubmit = (e) => {
        e.preventDefault()
        searchBook(search);
        setSearch("")
    }

    return (
        <>
        <Container fluid>
            <Row>
            <Col size={'sm-12'}>
                <Jumbotron>
                    <div id="heading">
                    <h1>Search for a book, any book!</h1>
                    <form className='form-inline w-100'>
                    <Input 
                    value={search}
                    onChange={handleInputChange}
                    name={'searchbar'}
                    placeholder={"Type search term here"}
                    />
                    <FormBtn onClick={handleFormSubmit}>Search</FormBtn>
                        </form> 
                    </div>
                </Jumbotron>
            </Col>
            <Container>
            <Row>
                <Col size={'sm-12'}>
                    {(result.length>0) ? result.map(book => <Card key={book.id} id={book.id} searched={true} img={(book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.smallThumbnail :"https://via.placeholder.com/140x100" } title={book.volumeInfo.title} authors={book.volumeInfo.authors} description={book.volumeInfo.description} link={book.volumeInfo.infoLink}/>) : <h2>Can't find what you're looking for</h2>}
                </Col>
            </Row>
            </Container>
            </Row>
        </Container>
        </>
    )
}

export default Search