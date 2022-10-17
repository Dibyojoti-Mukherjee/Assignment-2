import BarWrapper from "./BarCharts/BarWrapper";
import "./Charts.css";
import LabelWarpper from "./BarCharts/Label/LabelWarpper";
import Card from "../UI/Card";
import SymbolWrapper from "./Symbols/SymbolWrapper";
import styled from "styled-components";

const Header = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    width:auto;
    height: auto;
  }
`;

function Charts(props) {
  return (
    <Card className="charts">
      <Header>
        <h2> Visit & Sales Report</h2>
        <SymbolWrapper symbol={props.values} />
      </Header>
      <BarWrapper value={props.values} />
      <LabelWarpper Label={props.values} />
    </Card>
  );
}
export default Charts;
