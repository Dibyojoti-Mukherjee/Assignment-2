import Symbols from "./Symbols";
import styled from "styled-components";

const StyledSymbolWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
`;

function SymbolWrapper(props) {
  return (
    <StyledSymbolWrapper >
      <Symbols
        name={Object.keys(props.symbol.Jan)[0]}
        background="rgb(223 163 219)"
      />
      <Symbols
        name={Object.keys(props.symbol.Jan)[1]}
        background="rgb(154 154 211)"
      />
      <Symbols
        name={Object.keys(props.symbol.Jan)[2]}
        background="rgb(225 111 111)"
      />
    </StyledSymbolWrapper>
  );
}
export default SymbolWrapper;
