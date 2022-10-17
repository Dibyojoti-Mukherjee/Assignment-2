import BarItem from "./BarItem";

import styled from "styled-components";
const StyledBarWraper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 400px;
  height: 300px;
  align-items: flex-end;

`;

function BarWrapper(props) {
  return (
    // <div className="bar-wrapper">
    //    <BarItem value={props.value.Jan} />
    //    <BarItem value={props.value.Feb} />
    //    <BarItem value={props.value.Mar} />
    //    <BarItem value={props.value.Apr} />
    //    <BarItem value={props.value.Jun} />
    // </div>
    <StyledBarWraper>
      {Object.entries(props.value).map(([value, index]) => {
        return <BarItem value={index} />;
      })}
    </StyledBarWraper>
  );
}
export default BarWrapper;
