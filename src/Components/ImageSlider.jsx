import React from 'react'
import { useEffect,useState } from "react";
import { useParams } from 'react-router-dom';
import { db } from "../Config/firebase";

import { ref, get } from "firebase/database";

function ImageSlider() {


  const { cat, key } = useParams();
  const [data, setdata] = useState([]);



  useEffect(() => {
    
        let data1 = ref(db, `${cat}/${key}`);
    
    
    
        get(data1)
          .then(async (snap) => {
            await setdata(snap.val());
    
            // console.log(snap.val());
          })
          .catch((e) => console.log(e.code));
      }, []);

console.log(data)








  return (




    <div>

<div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-mdb-ride="carousel">
  <div className="carousel-inner mb-5">
    <div className="carousel-item active">
      <img src={data.Image} className="d-block w-100" style={{objectFit:"contain",height:"300px" }} alt="..." />
    </div>
    <div className="carousel-item">
      <img src={data.img2} className="d-block w-100" style={{objectFit:"contain",height:"300px"}} alt="..." />
    </div>
    <div className="carousel-item">
      <img  src={data.img3} className="d-block w-100 " style={{objectFit:"contain",height:"300px"}} alt="..." />
    </div>
  </div>



  <div className="carousel-indicators" style={{marginBottom:"-25%"}}>
    <button type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to="0" className="active"
      aria-current="true" aria-label="Slide 1" style={{width: "100px;",margin:"5px"}}>
      <img className="d-block w-100"
         src={data.Image}  />
    </button>
    <button type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to="1"
      aria-label="Slide 2" style={{width: "100px;" ,margin:"5px"}}>
      <img className="d-block w-100"
         src={data.img2} />
    </button>
    <button type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to="2"
      aria-label="Slide 3" style={{width: "100px;" ,margin:"5px"}}>
      <img className="d-block w-100 "
         src={data.img3}/>
    </button>
  </div>
</div>
    </div>
  )
}

export default ImageSlider
