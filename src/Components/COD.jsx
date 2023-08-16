import React, { useState } from "react";
import { db } from "../Config/firebase";
import { useEffect } from "react";
import { ref, get } from "firebase/database";
import { useParams } from "react-router-dom";
import './Cod.css'
import { Formik,Form, Field } from "formik";
import { push,set } from "firebase/database";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageSlider from '../Components/ImageSlider'



function COD() {
  const { cat, key } = useParams();

const [size,setsize] = useState()

const [dc,setdc] = useState(200)

  const [data, setdata] = useState([]);










  // Get Data From Firebase
  useEffect(() => {
const getsize = localStorage.getItem("size")

    let data1 = ref(db, `${cat}/${key}`);

setsize(getsize)


    get(data1)
      .then((snap) => {
        setdata(snap.val());

        console.log(snap.val());
      })
      .catch((e) => console.log(e.code));
  }, []);

  return (
    <div>

{

data.length == 0 ? 

<h1>Loading....</h1>
:
<>

<div class="container mt-5 px-4">
  <div class="row gx-5">
    <div class="col">


{/* slider */}

<ImageSlider/>



    </div>
    <div className="col">
<fieldset className="rounded border border-dark p-3">
<h3>Item Name : {data.title}</h3>
<h3>Category : {data.cat}</h3>
<h3>Size : {size}</h3>
<h3>Price : {data.price}</h3>

<h3>Delivery Charges : {dc}</h3>
<h3>Total Amount : {data.price+dc}</h3>

<h5>Description : {data.desc}</h5> 

</fieldset>
    </div>
  </div>
 <br /> <br /> <br /> <br />
<div className="row gx-5">
  <div className="col">

<Formik
initialValues={{
  fname:"",
  lname:"",
  address:"",
email:"",
number:"",
city:""

}}

onSubmit={async (v)=>{
console.log(v)


  let dbref = ref(db, `Order_Collection/`) //ref,path
let newPostRef = push(dbref)

  let obj = {
img:data.Image,
    fname:v.fname,
    lname:v.lname,
    address:v.address,
  email:v.email,
  number:v.number,
  city:v.city,
  title:data.title,
  cat:data.cat,
  price:data.price,
  confirmsize:size




  };
await set(newPostRef,obj)

toast.success("Your Order Submited",{
  autoClose:1000
})






}}


>




    <fieldset>
      <Form>
     

<label htmlFor="">First Name</label>
<Field type="text" name="fname" id=""  required  />

<label htmlFor="">Last Name</label>
<Field type="text" name="lname" id=""  />


<label htmlFor="">Address</label>
<Field type="text" name="address" id=""  required/>

<label htmlFor="">Email</label>
        <Field type="text" name="email" id="" required/>


<label htmlFor="">Contact</label>
        <Field type="text" name="number" id="" required/>



<label htmlFor="">City</label>
<Field type="text" name="city" id="" required />

<label class="cyberpunk-checkbox-label">
<Field type="checkbox" class="cyberpunk-checkbox"/>
Cash on Delivery</label> 
<br />


<button type="submit" className="text-light bg-primary" >Confirm Order</button>





      </Form>
    </fieldset>
    </Formik>
  </div>
</div>


</div>





</>

}

<ToastContainer/>
    </div>
  );
}

export default COD;
