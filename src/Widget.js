import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import "./Widget.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function Widget() {
  const newsArticle = (heading, subtitle) => (
    <div className="widget__article">
      <div className="widget__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widget__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widget">
      <div className="widgets__header">
        <h2>
          LinkedIn News <InfoIcon />
        </h2>
      </div>
      {newsArticle("Web Developer", "TOP 99999")}
      {newsArticle("Coronavirus in Australia", "New Record")}
    </div>
  );
}

export default Widget;
