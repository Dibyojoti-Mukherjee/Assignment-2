import React from "react";
import Card from "../UI/Card";
import "./ReportItems.css";
function ReportItems(props) {
  const classes = props.className + " report-items";
  return (
    <Card className={classes}>
      <h2>{props.itemName}</h2>
      <h1> $ {Object.values(props.reports)[0]}</h1>
      <h2>
        {Object.keys(props.reports)[1]}: {Object.values(props.reports)[1]} %
      </h2>
    </Card>
  );
}
export default ReportItems;
