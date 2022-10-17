import styled from "styled-components";
const StyledSymbols = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  .symbols {
    height: 14px;
    width: 14px;
    border-radius: 50%;
    display: inline-block;
  }
`;

function Symbols(props) {
  return (
    <StyledSymbols>
      {" "}
      <span
        className="symbols"
        style={{ backgroundColor: props.background }}
      ></span>
      <span> {props.name}</span>
    </StyledSymbols>
  );
}
export default Symbols;
