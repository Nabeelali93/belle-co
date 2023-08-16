import React from "react";
import "./Gallery.css";
import img2 from "../Images/20.jpg"
import img1 from "../Images/1.png"
import img3 from "../Images/3.png"
import img4 from "../Images/4.png"
import img5 from "../Images/5.png"
import img6 from "../Images/6.png"
import img7 from "../Images/7.jpg"
import img8 from "../Images/8..jpg"
import img9 from "../Images/9.png"
import img10 from "../Images/10.png"
import img11 from "../Images/11.png"
import img12 from "../Images/12.png"
import AOS from "aos";
import 'aos/dist/aos.css';

import gallery from "../Images/our galleru.png"



class Gallery extends React.Component {
  componentDidMount() {
    AOS.init();
  }


  render() {
    return (
      <>
        <div className="container" style={{ marginTop: "30px" }}>
<img src={gallery} alt="" style={{ marginLeft:"30%"}} />
          <div class="row">
            <div class="column">

              <div data-aos="flip-up"><img src={img1} />
              </div>
              <div data-aos="flip-up"><img src={img2} />
              </div>
              <div data-aos="flip-up"><img src={img3} />
              </div>
              <div data-aos="flip-up"><img src={img4} />
              </div>

            

            </div>
            <div class="column">
            <div data-aos="flip-up"><img src={img5} />
              </div>
              <div data-aos="flip-up"><img src={img6} />
              </div>
              <div data-aos="flip-up"><img src={img7} />
              </div>
              <div data-aos="flip-up"><img src={img8} />
              </div>

            </div>
            <div class="column">
            <div data-aos="flip-up"><img src={img9} />
              </div>
              <div data-aos="flip-up"><img src={img10} />
              </div>
              <div data-aos="flip-up"><img src={img11} />
              </div>
              <div data-aos="flip-up"><img src={img12} />
              </div>

            </div>
          </div>
        </div>
      </>

    )
  }
}




export default Gallery