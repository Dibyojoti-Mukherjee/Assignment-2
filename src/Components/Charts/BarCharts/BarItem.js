import Bar from "./Bar";

import styled from "styled-components";
const StyledbarItem = styled.div`
  height: auto;
  width: auto;
`;

function BarItem(props) {
  return (
    <StyledbarItem>
      <Bar hei={props.value.China} background="rgb(223 163 219)" />
      <Bar hei={props.value.USA} background="rgb(154 154 211)" />
      <Bar hei={props.value.Ind} background="rgb(225 111 111)" />
    </StyledbarItem>
  );
}
export default BarItem;
