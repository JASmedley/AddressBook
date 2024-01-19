import React, {useState} from 'react'


function User(props) {

  const [detailsShown,setDetailsShown] = useState(false);

  const showAddressDetails = () => {
    if (detailsShown === true) {    
      return "Address: "+props.streetNumber+" "+ props.streetName +", "+props.city +", "+ props.state +" "+ props.postcode
    }
  }
  const showEmailDetails = () => {
    if (detailsShown === true) {    
      return "Email: "+props.email
    }
  }

  const showPhoneDetails = () => {
    if (detailsShown === true) {    
      return "Phone: "+props.phone
    }
  }

  const showAgeDetails = () => {
    if (detailsShown === true) {    
      return "Age: "+props.age
    }
  }

  return (
  <li  className="beer"> 
        <h2 >{props.firstname} {props.lastname}</h2>
        <img src={props.photo}></img>
        <br></br>
       <button onClick={()=> setDetailsShown(!detailsShown)}>{
        detailsShown === true ? "Hide Details": "Show Details"
       }</button>
       <p>{showEmailDetails()}</p>
       <p>{showPhoneDetails()}</p>
       <p>{showAgeDetails()}</p>
       <p>{showAddressDetails()}</p>


  </li>
  );
}

export default User;