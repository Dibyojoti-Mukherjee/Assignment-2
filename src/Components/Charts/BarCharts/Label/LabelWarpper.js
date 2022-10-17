import Labels from "./Labels";

import styled from "styled-components";
const StyledLabelWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: auto;
  width: auto;
  width: 400px;
  font-weight: bold;
  color: black;
  margin: 10px;
  @media only screen and (max-width: 600px) {
 width: 60%;
 
}
`;
function LabelWarpper(props) {
  return (
    //     <div className="label-wrapper">
    //         // <Labels label={Object.keys(props.Label)[0]} />
    //         // <Labels label={Object.keys(props.Label)[1]} />
    //         // <Labels label={Object.keys(props.Label)[2]} />
    //         // <Labels label={Object.keys(props.Label)[3]} />
    //         // <Labels label={Object.keys(props.Label)[4]} />
    //     </div>
    <StyledLabelWrapper className="label-wrapper">
      {Object.entries(props.Label).map(([value, index]) => {
        return <Labels label={value} />;
      })}
    </StyledLabelWrapper>
  );
}
export default LabelWarpper;
