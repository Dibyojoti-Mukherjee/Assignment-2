import Card from "../UI/Card";

import PieChartLabelWrapper from "./PieChartLabel/PieChartLabelWrapper";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 40%;
  height: 200px;
  border-radius: 50%;
  background-image: conic-gradient(pink 70deg, #1114b0 0 235deg, orange 0);
  display: flex;
  align-items: center;
  justify-content: center;
  .middle-circle {
    display: block;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: white;
    @media only screen and (max-width: 600px) {
      width: 80px;
      height: 80px;
  }
  }
`;

export default function PieChart(props) {
  const socialMedia = +props.values.socialMedia.slice(0, -1) * 3.6;
  const searchEngines = +props.values.searchEngines.slice(0, -1) * 3.6;
  const directContact = +props.values.directContact.slice(0, -1) * 3.6;
  const firstGradient = socialMedia;
  const secondGradient = firstGradient + searchEngines;
  const thirdGradient = secondGradient + directContact;

  return (
    <Card
      style={{
        height: "350px",
        // minWidth: "500px",
        
        backgroundColor: "whitesmoke",
        
      }}
    >
      <h2>Traffic Source</h2>
      <Wrapper
        style={{
          backgroundImage: `conic-gradient(#80dfff 0deg, #1114b0 ${firstGradient}deg, #33ffad ${firstGradient}deg, #00995c ${secondGradient}deg, #ff9966 ${secondGradient}deg, #ff4d88 ${thirdGradient}deg)`,
        }}
      >
        <div className="middle-circle"></div>
      </Wrapper>
      <PieChartLabelWrapper label={props.values} />
    </Card>
  );
}
