import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";


function Books() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    loadBooks()
  }, [])

  function loadBooks() {
    API.getBooks()
      .then(res => {
        setBooks(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err));
  };

  function deleteBook(e) {
    e.preventDefault();
    let id=e.target.getAttribute('data-id')
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  return (
    <Container fluid>
      <Row>
        <Col size="sm-12">
          <Jumbotron>
            <h1>My saved books</h1>
            <p>View and delete saved books</p>
          </Jumbotron>
          {books.length ? (
            <div className="container">
              <div className="row">

              {books.map(book => (
                <Col size={'sm-12'} key={book._id}>
                <Card key={book._id} link={book.link} delete={deleteBook} id={book._id} saved={true} title={book.title} authors={book.authors} description={book.description} img={book.image}/>
                </Col>
              ))}
              </div>
            </div>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Col>
      </Row>
    </Container>
  );
}


export default Books;
