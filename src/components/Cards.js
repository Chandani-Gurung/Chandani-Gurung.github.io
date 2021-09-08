import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1></h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
              <CardItem 
              src="images\projects.png"
              text="Here are some of the projects I have worked on"
              label="Projects"
              path="/projects"
              />
              <CardItem 
              src="images\projectsbyme.png"
              text="Here are some of the projects I have worked on"
              label="Projects"
              path="/projects"
              />
          </ul>
          <ul className="cards__items">
              <CardItem 
              src="images\projectsbyme.png"
              text="Here are some of the projects I have worked on"
              label="Projects"
              path="/projects"
              />
              <CardItem 
              src="images\projectsbyme.png"
              text="Here are some of the projects I have worked on"
              label="Projects"
              path="/projects"
              />
              <CardItem 
              src="images\projectsbyme.png"
              text="Here are some of the projects I have worked on"
              label="Projects"
              path="/projects"
              />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
