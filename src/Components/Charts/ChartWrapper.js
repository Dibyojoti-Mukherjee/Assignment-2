import Charts from "./Charts";
import PieChart from "./PieChart";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }

`;

function ChartWrapper(props) {
  return (
    <StyledWrapper>
      <Charts values={props.value.visitSalesReport} />
      <PieChart values={props.value.trafficSource} />
    </StyledWrapper>
  );
}
export default ChartWrapper;


