import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import React, { useState } from 'react'
// import {v4 as uuid} from 'uuid';
import DashboardHeading from '../DashboardHeading/DashboardHeading'
import TemplateRow from '../TemplateRow/TemplateRow'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCurrentUserTemplate } from '../../redux/userTemplate/userTemplate.selector';
import {addUserTemplate} from '../../redux/userTemplate/userTemplate.actions';
import { selectCurrentUser } from '../../redux/user/user.selector';

const DashboardTemplateDefinition = (props) => {

  // const [template, setTemplate] = useState(props.template);
  // const headers = Object.keys(props.template);
  // const headers = ['name', 'year', 'dob', 'age', 'sleep']
  
  const { addUserTemplate, selectCurrentUserTemplate, currentUser } = props;

  // const { reset, setReset } = useState(false);

  // useEffect(() => {

  // }, [reset])
  const headers = props.headers;
  console.log(props);
  const url = `http://localhost:8001/users/template`;
  const bearer = `Bearer ${currentUser.token}`;
  const [template, setTemplate] = useState({
    delimiter: '',
    toScan: false
  });



  const logMe = () => {
    console.log(template);
    console.log(selectCurrentUserTemplate);

    fetch(`${url}/`, {
      method: "POST",
      body: JSON.stringify({
        template: template
      }),
      headers: {
        "content-type": "application/json; charset=UTF-8",
        "Authorization": bearer
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      props.showUploadButton(true);
      addUserTemplate(template);
    }).catch(err => {
      console.log(err);
    })
  }
  const changeTemplate = (obj) => {
    setTemplate({
      ...template,
      ...obj
    })
    console.log('TEMPLATE CHANGED');
    console.log(template);
    console.log(obj);
  }

  const changeDelimeterAndScan = (e) => {
    setTemplate({
      ...template,
      [e.target.name] : (e.target.name === 'toScan' ? e.target.checked: e.target.value)
    })
    console.log(e.target.name, e.target.value);
    if(e.target.name === 'toScan') {
      console.log(e.target.checked);
    }
  }
  //each entry in template structure:
  /*
    {
      header: {
        type: ['string', 'integer', 'float', 'date', 'email', 'url', 'time', 'pattern', 'datetime'],
        required: true/false,
        unique: true/false,
        maxLength: maxSize or maxLength,
        minLength: minSize or minLength,
        pattern: pattern or nothing
      }
    }
  */ 

  // an headerObj is a object with single header key like above

  // const updateRow = (headerObj) => {
  //   setTemplate({
  //     ...template,
  //     ...headerObj
  //   })
  // }

  // each template row should be able to update the state

  return (
    <div className={`flex flex-col justify-center items-center mx-4 md:mx-0 w-full`}>
      <DashboardHeading heading="Template Definition" />
      {
        headers ? (
          <MDBContainer className="border-2 border-gray-100 py-4 md:my-2 md:py-1 rounded-lg shadow-md">
            <MDBRow>
              <MDBCol md="3" className="text-2xl text-blue-500 font-bold uppercase overflow-x-wrap overflow-x-hidden">Delimeter</MDBCol>
              <MDBCol md="3" className="my-1 md:my-0">
                <input required placeholder="Delimiter" type="text" name="delimiter" className="border-2 border-gray-300 w-full px-1 md:w-4/5 lg:w-full" onChange={changeDelimeterAndScan}/>
              </MDBCol>
              <MDBCol md="3" className="text-2xl text-blue-500 font-bold uppercase overflow-x-wrap overflow-x-hidden">Scan</MDBCol>
              <MDBCol md="3" className="my-1 md:my-0">
                <input required type="checkbox" name="toScan" className="border-2 border-gray-300 w-full px-1 md:w-4/5 lg:w-full" onChange={changeDelimeterAndScan}/>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        ): null
      }
    { 
      headers ? (

        headers.map((header, i) => (
          <MDBContainer key={header} className="border-2 border-gray-100 py-4 md:my-2 md:py-1 rounded-lg shadow-md">
            <TemplateRow header={header} changeTemplate={changeTemplate}/> 
          </MDBContainer>
        ))
      
      ) : <div>Please Put in some thing</div>
      }
      <button className="my-8 mx-auto py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 w-40" onClick={logMe}>Save Template</button>
    </div>
  ) 
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  selectCurrentUserTemplate: selectCurrentUserTemplate
})

const mapDispatchToProps = dispatch => ({
  addUserTemplate: template => dispatch(addUserTemplate(template))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardTemplateDefinition)
