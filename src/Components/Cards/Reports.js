import ReportItems from "./ReportItems";

import styled from "styled-components";
const StyledReport = styled.div`
  height: auto;
  display: flex;
  justify-content: space-between;
  width: auto;
  .weekly-sales {
    background-color: rgb(233, 118, 189);
  }
  .weekly-order {
    background-color: rgb(231, 200, 97);
  }
  .visitors-online {
    background-color: rgb(89, 230, 107);
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    flex-wrap: nowrap;

  }

`;
function Reports(props) {
  return (
    <StyledReport>
      <ReportItems
        className="weekly-sales"
        itemName="Weekly Sales"
        reports={props.report.salesReport}
      />
      <ReportItems
        className="weekly-order"
        itemName="Weekly Orders"
        reports={props.report.orderReport}
      />
      <ReportItems
        className="visitors-online"
        itemName="Visistors Online"
        reports={props.report.visitorReport}
      />
    </StyledReport>
  );
}
export default Reports;
