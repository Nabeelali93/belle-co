import React from 'react'
import "./Signup.css";
import { Formik, Form, Field } from "formik";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Footer';


function Signup(){
  return (
    <div>
      <Container>
    <Row>
        <Col>
        <Formik
initialValues={{
    email:"",
    psw:"",
    fname:"",
    lname:""

}}
onSubmit={(value)=>{
    console.log(value)

}}>
    <Form style={{marginTop:"80px"}}>


       		<h1 style={{fontSize:"70px"}}>Create <br /> Account</h1>
               <label for="email"><b>First Name</b></label> 
               <Field type="text" placeholder="First Name" name="fname" required />

        <label for="text"><b>Last Name</b></label>
        <Field type="text" name="lname" placeholder="Last Name" />

        <label for="text"><b>Email</b></label>
        <Field type="text" name="email" placeholder="Email" required />

        <label for="text"><b>Password</b></label>
        <Field type="password" name="psw" placeholder="Password" required />



		<button type="submit" class="registerbutton">Create Account</button>


        </Form>
        </Formik> 
        
        </Col>
      
    </Row>
    <br /> <br />
</Container>

<Footer/>


    </div>
  )
}

export default Signup
