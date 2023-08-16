// import React from 'react'
// import { BsFillArrowRightCircleFill} from 'react-icons/bs';
// import { BsYoutube} from 'react-icons/bs';
// import { ImFacebook2} from 'react-icons/im';
// import {GrInstagram} from 'react-icons/gr';
// import { Link } from 'react-router-dom';


// function Footer() {
//   return (
//     <>
//       <div className='container-fluid' style={{ backgroundColor: "black" }}>
// <div className="row">
//   <div className="col">
//   <br /> <br /> <br />
//   <h1 style={{color:"white" , display:"inline" , textAlign:"left"}}>SMART STYLING <br /> EXTRA COMFORT.</h1>
//   </div>
//   <div className="col">
//   <br /> <br /> <br />
//   <div>
//   <input type="text" style={{border:"bottom 5px solid black"}} placeholder='YOUR EMAIL' />
// <BsFillArrowRightCircleFill style={{position:"absolute"  ,marginLeft:"-50px" ,marginTop:"12px"  ,fontSize:"30px"  ,color:"black"}}/>
//   </div></div></div>
//         <div style={{display:"inline"}}>
//           <br /> <br /> <br />
//           <ul style={{listStyle:"none",gap:"70px"     , display:"inline-flex" , color:"white"}}>
//           <Link to={"/login"} style={{textDecoration:"none", color:'white'}} >  <li>Login</li></Link>
//             <li>Cart</li>
//             <li>Track Your Order</li>
//           </ul>

// <b style={{color:"white", fontSize:"20px" , marginLeft:"60%"}}>
//  <a target='blank' href="https://www.facebook.com/" style={{textDecoration:"none", color:'white'}} > <i><ImFacebook2/> </i> </a>  &ensp;  &ensp;
// <a target='blank' href="https://www.instagram.com/"  style={{textDecoration:"none", color:'white'}}> <i> <GrInstagram/></i></a>  &ensp;  &ensp;
//  <a target='blank' href="https://www.youtube.com/"  style={{textDecoration:"none", color:'white'}}><i> <BsYoutube/> </i></a>

// </b>
//         </div>
//         <div className="col" style={{borderTop:"gray 1px solid", borderBottom:"gray 1px solid"}} >
//   <ul style={{listStyle:"none",marginTop:"30px"  ,color:"white",gap:"70px" , display:"inline-flex"}}>
//     <li>About Us</li>
//     <li>Policies</li>
//     <li>Contact Us</li>
//     <li>FAQS</li>
//     <li>Store Locator</li>
//     <li>Careers</li>
//     <li>Load Book</li>
//     <li>Blog</li>
//   </ul>

// </div>

// <div className="col">
//   <br /> <br /> <br />
// <h5 style={{color:'white'}}>KBH@gmail.com
// <br /> <br />
// Inquiry Call +92-00-0000

// <br /> <br /> <br />
// </h5>
// <h6 style={{color:"gray"}}>2023 KBH | All Right Reserved
// </h6>

// </div>

//  <br />
//       </div>




//     </>
//   )
// }

// export default Footer



import React from 'react'
// import { MdLocationPin } from 'react-icons/md';
import {AiOutlineArrowRight} from'react-icons/ai'
import {AiOutlinePhone} from'react-icons/ai'
import {AiOutlineMail} from'react-icons/ai'
import {FaFacebook} from'react-icons/fa'
// import {FaTwitter} from'react-icons/fa'
import {FaInstagram} from'react-icons/fa'
// import {FaLinkedin} from'react-icons/fa'
// import {BsPinterest} from'react-icons/bs'



function Footer() {
  return (
   <>
   <footer class="bg-light text-dark mt-1">
  <div class="container mt-5">
    <div class="row ">
      <div class="col col-lg-3 col-md-4 col-sm-6 col-12 " >
        {/* <h5>Our Locations</h5> */}
        <ul class="list-unstyled py-2">
        <li className='py-2'> <AiOutlineArrowRight style={{color:"#198754"}} /> Home</li>
          <li className='py-2'> <AiOutlineArrowRight style={{color:"#198754"}} /> Login</li>
          <li className='py-2'> <AiOutlineArrowRight style={{color:"#198754"}} /> Cart</li>
          <li className='py-2'> <AiOutlineArrowRight style={{color:"#198754"}} /> Contact Us</li>
          <li className='py-2'> <AiOutlineArrowRight style={{color:"#198754"}} /> Shop Location</li>
        
        </ul>
      </div>


      
      <div class="col col-lg-3 col-md-4 col-sm-6 col-12">
        <ul class="list-unstyled py-2">
          <li className='py-2'> <AiOutlinePhone style={{color:"#198754"}}/> +123-456-7890</li>
          <li className='py-2'> <AiOutlinePhone style={{color:"#198754"}}/> 0332-2803663</li>
          <li className='py-2'> <AiOutlineMail style={{color:"#198754"}}/>  mirzadaniyal4@gmail.com</li>
        </ul>

      </div>




 

      <div class="col col-lg-3 col-md-4 col-sm-6 col-12">
  <h3>SMART STYLING EXTRA COMFORT.</h3>
  

      </div>




    </div>
    <div className="row mt-5 d-flex justify-content-center">
        <div className="col col-lg-3 col-md-4 col-sm-6 col-12 ">
        <div className="social-icons ">
            <ul class="list-unstyled d-flex justify-content-center" >
                <li className='mx-3'><a href="https://www.facebook.com/p/KBH-Shoes-And-Company-100068532440436/" target='blank'  ><FaFacebook style={{color:"#198754", fontSize:"35px"}} /></a></li>
                {/* <li className='mx-3'><FaTwitter style={{ color:"#198754",fontSize:"35px"}} /></li> */}
                {/* <li className='mx-3'><FaInstagram style={{ color:"#198754",fontSize:"35px"}} /></li> */}
                {/* <li className='mx-3'><FaLinkedin style={{ color:"#198754",fontSize:"35px"}} /></li> */}
                {/* <li className='mx-3'><BsPinterest style={{ color:"#198754",fontSize:"35px"}}/> </li> */}
            </ul>
            </div>
        </div>
    </div>
    <div className="row mt-3 mb-3">
      <div className="col col-sm-12">
        <div className='d-flex justify-content-center'>
          <p>Created by <span style={{color:"#198754"}}>2023 BELLE CO | All Right Reserved </span> </p>
        </div>
      </div>
    </div>
  </div>
</footer>

   
   </>
  )
}

export default Footer


