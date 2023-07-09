import React, { useEffect, useState } from 'react'
import { MDBRow, MDBCol } from "mdbreact";

function TemplateRow(props) {
  console.log(props);
  const {changeTemplate} = props;
  const [ headerState, setHeaderState] = useState({
    [props.header]: {}
  })

  useEffect(() => {
    changeTemplate(headerState);
    console.log('works');
  }, [headerState])

  const handleChange = (e) => {
    console.log(e);
    const prevState = {...headerState};
    if(e.target.name === 'required' || e.target.name === 'unique') {
      prevState[props.header][e.target.name] = (e.target.value === 'true');
    } else {
      prevState[props.header][e.target.name] = e.target.value;
    }
    console.log(prevState);
    setHeaderState(prevState);

  }
  return (
    <>
    <MDBRow className="my-1" key={`${props.header}-1` }>
      <MDBCol md="3" className="text-2xl text-blue-600 font-bold uppercase overflow-x-wrap overflow-x-hidden">{props.header}</MDBCol>
      <MDBCol md="3" className="my-1 md:my-0">
      <select defaultValue="choose requirement" name="required" className="border-2 border-gray-300 w-full" onChange={handleChange}>
        <option disabled >choose requirement</option>
        <option value="true">true</option>
        <option value="false">false</option>
      </select>
      </MDBCol>
      {console.log(`checking if rerendered from ${props.header}`)}
      <MDBCol md="3" className="my-1 md:my-0">
        <select defaultValue="choose value type" name="type" className="border-2 border-gray-300 w-full" onChange={handleChange}>
          <option disabled >choose value type</option>
          <option value="string">String</option>
          <option value="boolean">Boolean</option>
          <option value="integer">Integer</option>
          <option value="float">Float</option>
          <option value="date">Date</option>
          <option value="email">Email</option>
          <option value="url">URL</option>
          <option value="time">Time</option>
          <option value="pattern">Pattern</option>
        </select>
      </MDBCol>
      <MDBCol md="3" className="my-1 md:my-0">
        <select defaultValue="select" name="unique" className="border-2 border-gray-300 w-full" onChange={handleChange}>
          <option disabled >select</option>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      </MDBCol>
    </MDBRow>
    <MDBRow className="my-1" key={`${props.header}-2`}>
    <MDBCol className="my-1 md:my-0">
      
    </MDBCol>
    <MDBCol md="3" className="my-1 md:my-0">
      <input placeholder="maxLength" type="number" name="maxLength" className="border-2 border-gray-300 w-full px-1 md:w-4/5 lg:w-full" onChange={handleChange}/>
    </MDBCol>
    <MDBCol md="3" className="my-1 md:my-0">
      <input placeholder="minLength" type="number" name="minLength" className="border-2 border-gray-300 w-full px-1 md:w-4/5 lg:w-full" onChange={handleChange}/>
    </MDBCol>
    <MDBCol md="3" className="my-1 md:my-0">
      <input placeholder="pattern" type="text" name="minLength" className="border-2 border-gray-300 w-full px-1 md:w-4/5 lg:w-full" onChange={handleChange}/>
    </MDBCol>
  </MDBRow>
  <MDBRow className="my-1" key={`${props.header}-3`}>
    <MDBCol className="my-1 md:my-0">
      
    </MDBCol>
    <MDBCol md="3" className="my-1 md:my-0">
      <select defaultValue="date format" name="dateType" className="border-2 border-gray-300 w-full" onChange={handleChange}>
        <option disabled >date format</option>
        <option value="mm-dd-yyyy">mm-dd-yyyy</option>
        <option value="dd-mm-yyyy">dd-mm-yyyy</option>
      </select>
    </MDBCol>
    <MDBCol md="3" className="my-1 md:my-0">
    </MDBCol>
    <MDBCol md="3" className="my-1 md:my-0">
    </MDBCol>
  </MDBRow>
  </>
  )
}

export default React.memo(TemplateRow);
