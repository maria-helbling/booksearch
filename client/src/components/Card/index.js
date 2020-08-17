import React from 'react'
import './style.css'
import DeleteBtn from '../DeleteBtn'
import Btn from '../Btn'

function Card (props) {
const styles = {
    card: {
        maxWidth: "540px"
    }
}

    return (
    <>
    <div className="card mb-3" style={styles.card}>
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={props.img} className="card-img" alt="..."/>
    </div>
    <div className="col-md-8">
        {props.saved ? <DeleteBtn onClick={props.delete} data-id={props.id}/> : null}
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text"><small className="text-muted">{props.authors}</small></p>
        <p className="card-text">{props.description}</p>
        <Btn onClick={console.log('clicked')} text={'View details'}></Btn>
      </div>
    </div>
  </div>
</div>
    </>
    )
}

export default Card