import React from "react";

export default function Info() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Información y Fórmulas</h1>
          <p className="lead">Subtítulo</p>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="text-container">
          <h2 id="vasos">Gradientes de presión en vasos sanguíneos</h2>
          <hr className="my-1" />
          <p>Texto</p>
          <iframe width="1280" height="720" src="https://www.youtube.com/embed/9YKnMa4Bu2U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <br /><br /><br /><br />
          
          <h2 id="pulmones">Gradientes de presión en pulmones</h2>
          <hr className="my-1" />
          <p>Texto</p>
          <iframe width="1280" height="720" src="https://www.youtube.com/embed/9YKnMa4Bu2U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <br /><br /><br /><br />

          <h2 id="intraocular">Gradientes de presión en fluido intraocular</h2>
          <hr className="my-1" />
          <p>Texto</p>
          <iframe width="1280" height="720" src="https://www.youtube.com/embed/9YKnMa4Bu2U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <br /><br /><br /><br />

        </div>
      </div>
    </div>
    )
  }