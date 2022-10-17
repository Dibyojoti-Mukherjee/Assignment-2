import Table from "./Table";
import styled from "styled-components";
import Card from "../UI/Card";

const StyledTable = styled.div`
  /* border: 1px solid red; */
  height: auto;
  min-width: 300px;
  min-height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  @media only screen and (max-width: 600px) {
   h2{
   flex-direction:column;
   
   }
  }
  
`;
function TableWrapper(props) {
  return (<StyledTable><h2>Project Report</h2>
    <Card style={{ backgroundColor:"#ff4d88", color:"white"}}>
      <Table projectStatus={props.projectStatus} />
    </Card></StyledTable>
  );
}
export default TableWrapper;
