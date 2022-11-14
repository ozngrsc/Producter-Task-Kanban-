import React from "react";
import "./CardItem.css";
import IconTSK from "../../../../../utils/images/icon3.png";
import IconEPC from "../../../../../utils/images/icon4.png";
import ProfilePic1 from "../../../../../utils/images/neil.png";
import ProfilePic2 from "../../../../../utils/images/stephanie.png";
import ProfilePic3 from "../../../../../utils/images/maria.png";
import Chart1 from "../../../../../utils/images/chart1.png";
import Chart2 from "../../../../../utils/images/chart2.png";
import Chart3 from "../../../../../utils/images/chart3.png";

function CardItem({ id, title, issue, priority, assignee, point }) {
  return (
    <div className="cardItem">
      <p>{title}</p>
      <div className="cardItem_bottom">
        <div className="cardItem_bottom_left">
          <img src={issue === "TSK" ? IconTSK : IconEPC} alt="" />
          <h4>
            {issue}-{id + 1}
          </h4>
        </div>
        <div className="cardItem_bottom_right">
          <img
            src={
              priority === "high"
                ? Chart1
                : priority === "medium"
                ? Chart2
                : Chart3
            }
            alt=""
          />
          <button>{point}</button>
          <img
            src={
              assignee === "maria"
                ? ProfilePic3
                : assignee === "stephanie"
                ? ProfilePic2
                : ProfilePic1
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default CardItem;
