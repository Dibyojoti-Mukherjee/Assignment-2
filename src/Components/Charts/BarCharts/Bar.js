import React from "react";

import styled from "styled-components";
// console.log(props);
const Bar = styled.div`
  width: 10px;
  display: inline-block;
  height: ${(props) => props.heig};
  background-color: ${(props) => props.backgr};
`;
function Bars(props) {
  return <Bar heig={`${props.hei * 5}px`} backgr={props.background}></Bar>;
}
export default Bars;
