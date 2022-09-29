import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(e){
    e.preventDefault(); //stops the browser from refreshing
    const formData = {
      firstName: firstName,
      lastName: lastName
    }; //putting togethert the current form data into an object using the values stored in state
    props.sendFormDataSomewhere (formData); //send to server or another page
    setFirstName(''); //on javascript it would be e.target.reset()
    setLastName(''); //setting state to an empty string clears data once the form has been submitted
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
