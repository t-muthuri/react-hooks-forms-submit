import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState ([]) //method 2

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
    //props.sendFormDataSomewhere (formData); //send to server or another page //method 1
    const dataArray = [...submittedData, formData]; //method 2
    setSubmittedData(dataArray); //method 2
    setFirstName(''); //on javascript it would be e.target.reset()
    setLastName(''); //setting state to an empty string clears data once the form has been submitted
  }
  //method 2 start
  const listOfSubmissions = submittedData.map((data, index) =>{
    return (
      <div key= {index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });
  //method 2 close
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    <h3>Submissions</h3>
    {listOfSubmissions}
    </div>
  );
}

export default Form;
