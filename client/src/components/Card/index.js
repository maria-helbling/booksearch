import React from 'react'
import './style.css'
import DeleteBtn from '../DeleteBtn'
import Btn from '../Btn'
import API from '../../utils/API'

function Card (props) {
//saves book to database
const handleSaveBook = () => {
  let bookObj = {
    title:props.title,
    description:props.description,
    authors:props.authors.join(', '),
    image:props.img,
    link:props.link
  }
  console.log(bookObj)
  API.saveBook(bookObj)
}

//card component
    return (
    <>
    <div className="card text-white bg-dark w-100">
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={props.img} className="card-img" alt="..."/>
    </div>
    <div className="col-md-8">
      {/* for saved books, displays a delete btn */}
        {props.saved ? <DeleteBtn onClick={props.delete} data-id={props.id}/> : null}
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text"><small className="text-muted">{props.authors}</small></p>
        <p className="card-text">{props.description}</p>
        <a className="btn textBtn" role="button" href={props.link} target="blank">View on Google</a>
        {/* for search results, displays a save button */}
        {props.searched ? <Btn text={'Save me'} onClick={handleSaveBook}/> : null}
      </div>
    </div>
  </div>
</div>
    </>
    )
}

export default Card