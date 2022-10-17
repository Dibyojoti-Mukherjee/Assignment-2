import styled from "styled-components";
const StyledTable=styled.table`

  border-collapse: collapse;
  align-items:center;
  /* border: 1px solid red; */
  width:40rem;
  height: 35rem;
  tr{
    text-align: center;
    font-size: large;
    
  }
  th{ 
    font-size: 20px;
  }
  @media only screen and (max-width: 600px) {
 width: 60%;
}
`
function Table(props) {
  return (
    <StyledTable>
      <tr>
        <th>{Object.keys(props.projectStatus[0])[0]}</th>
        <th>{Object.keys(props.projectStatus[0])[1]}</th>
        <th>{Object.keys(props.projectStatus[0])[2]}</th>
      </tr>
      {Object.entries(props.projectStatus).map(([index, value]) => {
        return (
          <tr>
            {Object.values(value).map((val) => (
              <td>{val}</td>
            ))}
          </tr>
        );
      })}
    </StyledTable>
  );
}

export default Table;
