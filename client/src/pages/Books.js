import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";


function Books() {
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({
    title: "",
    authors: "",
    description: ""
  })

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

  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveBook({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis
      })
        .then(res => {
          setFormObject({
            title: "",
            author: "",
            synopsis: ""
          })
          loadBooks()
        })
        .catch(err => console.log(err));
    }
  };

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
                <Card key={book._id} title={book.title} authors={book.authors} description={book.description} img={book.image}>
                  <Link to={"/books/" + book._id}>
                    <strong>
                      View
                    </strong>
                  </Link>
                  <DeleteBtn onClick={() => deleteBook(book._id)} />
                </Card>
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
