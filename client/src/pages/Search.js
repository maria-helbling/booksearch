import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import API from "../utils/API";
import { Link } from "react-router-dom";
import {Input} from '../components/Form'
import { Col, Row, Container } from "../components/Grid";


function Search() {
    const [search, setSearch] = useState('Tinker')
    const [result, setResult] = useState({})

    useEffect(()=>{
        searchBook(search)
    }, [search])

    const searchBook = (searchTerm) =>{
        API.searchBooks(searchTerm)
        .then(res=> setResult(res.data.items))
        .catch(err=> console.log(err))
    }

    const handleInputChange = e => {
        const value = e.target.value
        setSearch(value)
    }

    return (
        <>
        <Container fluid={true}>
            <Col size={'sm-12'}>
                <Jumbotron>
                    <h1>Search here</h1>
                    <Input
                    value={search}
                    onChange={handleInputChange}
                    name={'searchbar'}
                    placeholder={"Type search term here"}
                    />
                </Jumbotron>
            </Col>
            <Row>
                <Col size={'sm-12'}>
                    {(result.length>0) ? result.map(book => <Card key={book.id} id={book.id} searched={true} img={book.volumeInfo.imageLinks.smallThumbnail} title={book.volumeInfo.title} authors={book.volumeInfo.authors} description={book.volumeInfo.description} link={book.volumeInfo.infoLink}/>) : <h2>Can't find what you're looking for</h2>}
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Search