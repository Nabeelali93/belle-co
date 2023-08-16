import React from "react";
import "./Signup.css";
import { Formik, Form, Field } from "formik";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Footer from "./Footer";




class Login extends React.Component{
constructor(){
    super()
}

render(){
    return(
        <>
<Container>
    <Row>
        <Col>
        <Formik
initialValues={{
    email:"",
    psw:"",

}}
onSubmit={(value)=>{
    console.log(value)

}}>
    <Form style={{marginTop:"80px"}}>


    <h1 style={{fontSize:"70px"}}>Login</h1>            
       <label for="email"><b>Email</b></label> 
               <Field type="text" placeholder="Enter Your E-mail" name="email" />

        <label for="text"><b>Password</b></label>
        <Field type="password" name="psw" placeholder="Enter Your Password" />

        <Link style={{color:"black"}}> Forget your Password </Link>

		<button type="submit" class="registerbutton">Login</button>
        <Link to={"/signup"}  style={{color:"black"}}> <center>Create Account</center> </Link>


        </Form>
        </Formik> 
        
        </Col>
      
    </Row>
    <br /> <br />
</Container>
       
       <Footer/>




        </>
    )
}


}












export default Login



