import React from "react";
import "./Header.css";
import { useNavigate } from "react-router";
const Header = (props) => {
  const { isProfile = false, title } = props;
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        {isProfile && (
          <div className="back-arrow" onClick={() => navigate("/search")}>
            {"<-"}
          </div>
        )}
        <div className="header-title">{title}</div>
      </div>
    </>
  );
};

export default Header;
