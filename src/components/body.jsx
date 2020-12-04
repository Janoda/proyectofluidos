import React from "react"
import cuerpo from '../assets/Cuerpo_final.png'
import bubble from '../assets/bubble.png'
import arrow from '../assets/right.png'
function Home() {
    return (
      <div style = {{alignItems:"center"}}>
        {/* <div className="d-flex justify-content-center">
        <div className="text-container">
        <p style={{justifyContent:"center", margin:"100px"}}> Haga click en una parte para observar que esta ocurriendo!</p>
      </div>
      </div> */}
      
      {/* <div style = {{float:"center", position:"relative"}}> */}
      {/* <img src={cuerpo} alt="Cuerpo" style= {{height:"80%", display:"block", marginLeft:"auto", marginRight:"auto", border: "1px solid gray", padding: "50px"}}/>
        <li><a href='/info'><img src={bubble} alt="abubble" style= {{height:'100px', position:"absolute", top:0, left:"63%"}}/></a></li>
        <img src={arrow} alt="abubble" style= {{height:'100px', width:'150px', position:"absolute", top:0, left:"51%"}}/> */}
        <img src={cuerpo} usemap="#housemap" alt ="prueba" style= {{height:"80%", display:"block", marginLeft:"auto", marginRight:"auto", padding: "50px"}}/>
          <map name="housemap">
            <area shape="circle" coords="200,320,50" href="/info#pulmones" alt="1"/>
            <area shape="circle" coords="530,48,50" href="/info#intraocular" alt="2"/>
            <area shape="circle" coords="520,250,50" href="/info#vasos" alt="3"/>
          </map>
      {/* </div> */}

      </div>
      );

  }
export default Home