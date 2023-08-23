import React from "react";
import "./OurProjects.css";
import img from '../assets/Image.svg'
import img1 from '../assets/Image (1).svg';
import img2 from '../assets/Image (2).svg';
function OurProjects() {
  return (
    <div className="ourprojects">
      <h1 className="header" >
        <span style={{ color: "#BDBDBD" }}>Our</span> <br />
        <span style={{ fontWeight: "700" }}>Projects</span>{" "}
      </h1>
      <div className="main">
        <div className="section">
          <div className="content">
            <h1 style={{fontSize:'22px',fontWeight:'600',paddingBottom:'1rem'}}>01/PROJECT NAME</h1>
            <p style={{paddingBottom:'1rem'}}>
              Goblin concept digital sculpture with human-like skin learned alot
              of quick tipes and look development.
            </p>
            <p>Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnoid.</p>
            <link rel="stylesheet" href="" />More shots from this project
           
          </div>
          <div className="image">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="section">
          <div className="content">
            <h1 style={{fontSize:'22px',fontWeight:'600',paddingBottom:'1rem'}}>02/PROJECT NAME</h1>
            <p style={{paddingBottom:'1rem'}}>
              Subsurface weight, specular roughness, diffuse maps generated with the procedure and manual techniques.
            </p>
            <p>Crafted in Figma and published using Makers. The easiest way to build simple sites</p>
            <link rel="stylesheet" href="" />See case study
          </div>
          <div className="image">
            <img src={img1} alt="" />
          </div>
        </div>
       
        <div className="section">
          <div className="content">
            <h1 style={{fontSize:'22px',fontWeight:'600',paddingBottom:'1rem'}}>03/PROJECT NAME</h1>
            <p style={{paddingBottom:'1rem'}}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <p>Vellt officia consequat duis enim vellt molllt. Exercitation veniam consequat sunt nostrud amet.</p>
            <link rel="stylesheet" href="" />See case study
          </div>
          <div className="image">
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurProjects;
