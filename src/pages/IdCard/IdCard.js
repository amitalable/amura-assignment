import React from "react";
import Header from "../../components/Header/Header";
import "./IdCard.css";
import { useParams } from "react-router";

const IdCard = () => {
  const { person } = useParams();
  console.log(JSON.parse(person));
  return (
    <div className="id-card">
      <Header
        title={`${JSON.parse(person).name.split(" ")[0]} Profile`}
        isProfile
      />
      <div className="profile">
        <div className="profile-img">{`${
          JSON.parse(person).name.split(" ")[0][0]
        }${JSON.parse(person).name.split(" ")[1][0]}`}</div>
        <div className="profile-description">
          <div className="profile-name">
            <span>Name: {JSON.parse(person).name}</span>
          </div>
          <div className="profile-name">{`Profession : ${
            JSON.parse(person).profession
          }`}</div>
          <div className="profile-name">{`Joined : ${
            JSON.parse(person).joinedOn
          }`}</div>
        </div>
      </div>
    </div>
  );
};

export default IdCard;
