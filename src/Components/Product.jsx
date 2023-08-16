// import React, { useEffect, useState } from "react";
// import { db } from "../Config/firebase";
// import { ref } from "firebase/database";
import "./Product.css"
import {  ref,get } from "firebase/database";
import { db } from "../Config/firebase";
import React,{useState,useEffect} from "react";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";




const Product = () => {

  const nav = useNavigate()

  const [val,setval] = useState()

  



const getvalue=(e)=>{

setval(e.target.value)


localStorage.setItem("size",e.target.value)

console.log(val)

}






  
  const [data,setdata] = useState([])


  const COD =(v,i)=>{
    nav(`/cod/${v.cat}/${v.key}`)
  }
  




  useEffect(()=>{



  
    let data1 = ref(db,"Men_Collection")

    get(data1).then((snap) => {
        console.log(snap.val())
        if(snap.val()!=null){
       console.log(Object.values(snap.val()));
       setdata(Object.values(snap.val()))
        }

    })
        .catch((e) => console.log(e.code))
  

},[])

console.log(data)





  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
        {
  data.map((v,i)=>{
    return(
      <>
       <div className="col mt-5" col-lg-3 md-4 sm-6 col-12>

       <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={v.Image} style={{height: '15rem' ,  }}  />
      <Card.Body>
        <Card.Title className="text-primary">{v.title}</Card.Title>
        <Card.Title>Price: Rs {v.price}</Card.Title>


        <div class="mydict">
	<div>
  <label>
			<input type="radio" name="radio" value="38" onChange={(e)=>getvalue(e)} />
			<span>{v.size38}</span>
		</label>


		<label>
			<input type="radio" name="radio" value="39" onChange={(e)=>getvalue(e)}/>
			<span>{v.size39}</span>
		</label>
		<label>
			<input type="radio" name="radio" value="40" onChange={(e)=>getvalue(e)}/>
			<span>{v.size40}</span>
		</label>

    <label>
			<input type="radio" name="radio" value="41" onChange={(e)=>getvalue(e)}/>
			<span>{v.size41}</span>
		</label>
		
    <label>
			<input type="radio" name="radio" value="42" onChange={(e)=>getvalue(e)}/>
			<span>{v.size42}</span>
		</label>
	</div>
</div>



        {/* <Button onClick={()=>size()}  className="rounded-circle"  variant="outline-dark">{v.size38}</Button>
        <Button onClick={()=>size()}    className="rounded-circle"  variant="outline-dark">{v.size39}</Button>
        <Button onClick={()=>size()}   className="rounded-circle"  variant="outline-dark">{v.size40}</Button>
        <Button onClick={()=>size()}    className="rounded-circle"  variant="outline-dark">{v.size41}</Button>
        <Button onClick={()=>size()}   className="rounded-circle" variant="outline-dark">{v.size42}</Button> */}

     
 
<br />
        <button  className="bg-warning p-2 text-dark rounded-3"  onClick={()=>COD(v,i)}>Order Now</button>


      </Card.Body>
    </Card>



       </div>
      
      </>
    )
  })
}


        </div>
      </div>





    </div>
  );
};

export default Product;

