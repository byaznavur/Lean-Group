import React from "react";
import { team } from "../../data";
import Button from "./../UI/button/button";
import "./style.scss";
const TeamOur = () => {
  return (
    <div className="team container">
      <h2>Наша команда</h2>

      <div className="teamPerson">
        {team.map((el, i) => (
          <div className="teamCard" key={i}>
            <img src={el.img} alt={el.name} />
            <h3>{el.name}</h3>
            <p>{el.desc}</p>
            <span>{el.phone}</span>
            <a>{el.email}</a>
          </div>
        ))}
      </div>

      <Button content="Наша команда" contentName="btnTeam" />
    </div>
  );
};

export default TeamOur;
