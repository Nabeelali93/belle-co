import React, { useEffect, useState } from "react";
import img1 from "../Images/Slider image 1.jpg"
import img2 from "../Images/slider image 2.jpg"
import Carousel from 'react-bootstrap/Carousel';
// import img17 from "../Images/17.jpg"
// import img20 from "../Images/20.jpg"
// import img19 from "../Images/19.jpg"
// import img18 from "../Images/18.jpg"
import img01 from "../Images/1.png"
import img02 from "../Images/2.jpg"
import img3 from "../Images/3.png"
import img4 from "../Images/4.png"
import aboutimg from '../Images/About.jpg'
import lastpic from '../Images/LastPic.jpg'
// import "./Slider.css"
// import { BsFillArrowRightCircleFill} from 'react-icons/bs';
// import { BsYoutube} from 'react-icons/bs';
// import { ImFacebook2} from 'react-icons/im';
// import {GrInstagram} from 'react-icons/gr';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  ref,get } from "firebase/database";
import { db } from "../Config/firebase";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'



function Slider(){

  const nav = useNavigate()

  const [data,setdata] = useState([])

  useEffect(()=>{



  
    let data1 = ref(db,"user")

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







    return(
        <>

{/* Slider */}
   <Carousel>
      <Carousel.Item  >
        <img style={{maxHeight:"600px"}}
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        
      </Carousel.Item >
      <Carousel.Item >
        <img style={{maxHeight:"600px"}}
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>



{/* Cards second part */}

<div className="container-fluid text-center" style={{backgroundColor:"black",marginTop:"30px"}}>
  <br />
    <h1 style={{textAlign:"center" , fontFamily:"serif" , marginTop:"10px" , color:"gold"}}>SHOP BY CATEGORY
     </h1>

    <center>
     <button className="bg-primary p-2 text-light rounded-3" onClick={()=>nav("/product")}> View More </button>
</center>  

<br /> 

  <div className="row m-auto">


{
  data.map((v,i)=>{
    return(
      <>
      <div className="col" col-lg-3 md-4 sm-6 col-12 >

<figure class="snip1418" style={{width:"300px"}}>
  <img src={v.Image} style={{width:"300px",height:"250px",objectFit:"contain"}} className="shadow " alt="sample85"/>
<Link to={"/service"} state={"bilal"} >  <div class="add-to-cart cursor"  ><i class="ion-android-add"></i>  <span>Add to Cart</span> </div>
</Link>
  <figcaption>
    <h3 className="text-primary">{v.title}</h3>

    <h4>Sizes</h4> 

<div className="d-flex p-2">
<Button   variant="outline-info ">{v.size38}</Button>
<Button  variant="outline-info">{v.size39}</Button>
<Button  variant="outline-info">{v.size40}</Button>
<Button  variant="outline-info">{v.size41}</Button>
<Button  variant="outline-info">{v.size42}</Button>
</div>


    <div class="price">
     <span>Price</span> {v.price}

    </div>


  </figcaption>
</figure>



</div>

      
      </>
    )






  })
}





 


  {/* <br /> <br />  */}
</div>

{/*  Third Part */}

    <div className="container-fluid text-center" style={{backgroundColor:"whitesmoke"}}>
      <br />
    <h1 style={{textAlign:"center" , fontFamily:"serif" , marginTop:"10px" , color:"black"}}>BEST SELLERS</h1>


<br />

<div className="row">


    <div className="col" col-lg-3 md-4 sm-6 col-12>
    
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={img01} alt="Avatar" style={{width:"300px",height:"300px"}} />
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>

{/* <button className="cart_btn"> <Link to={"/service"} style={{textDecoration:"none",color:"black"}}>Add to Cart</Link>
 </button>  */}
   </div>
  </div>
</div>
    
 
  </div>


 <div className="col" col-lg-3 md-4 sm-6 col-12>


 <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={img02} alt="Avatar" style={{width:"300px",height:"300px"}} />
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
      {/* <button className="cart_btn"> <Link to={"/service"} style={{textDecoration:"none",color:"black"}}>Add to Cart</Link>
 </button>  */}
    </div>
  </div>
</div>
    
 
 
 
 </div>

 <div className="col" col-lg-3 md-4 sm-6 col-12>

 <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={img3} alt="Avatar" style={{width:"300px",height:"300px"}} />
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
      {/* <button className="cart_btn"> <Link to={"/service"} style={{textDecoration:"none",color:"black"}}>Add to Cart</Link>
 </button>  */}
    </div>
  </div>
</div>
    

 
 
 </div>

 <div className="col" col-lg-3 md-4 sm-6 col-12>

 <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={img4} alt="Avatar" style={{width:"300px",height:"300px"}} />
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
      {/* <button className="cart_btn"> <Link to={"/service"} style={{textDecoration:"none",color:"black"}}>Add to Cart</Link>
 </button>  */}
    </div>
  </div>
</div>
    
 
 
 
  </div>
</div></div>

{/* About Section */}

<div className="container-fluid text-center" style={{backgroundColor:"black",marginTop:"30px"}}>
  <div className="row">
<div className="col" style={{marginTop:"30px"}}>
<h1 style={{color:"gold", fontFamily:"fantasy"}} >ABOUT US</h1>
<p style={{color:"white " , textAlign:"center" }}>
BELLE CO established itself as a trusted source of unique footwear as we proudly announce our products as “Made in Pakistan ''. 
  BELLE CO dedicates itself to quality, unique design, and utmost comfort. Come join the spirit of ultimate
  fashion footwear to indulge yourself with uniqueness & sophistication which is constructed with high-quality craftsmanship.</p>
  <img src={aboutimg} alt="" style={{width:"100%" , borderRadius:"20px"}} />
</div>

  </div>
  <br /> <br />
</div>

{/* forth Part */}
<div className="container-fluid " >
  <div className="row">
    <div className="col" style={{marginTop:"20px" , fontWeight:"bolder"}}>
<img src={lastpic}  style={{width:"100%"}} alt="" />
 </div></div></div>

{/* Footer */}

<Footer/>






</div>


        </>
    )
}


export default Slider