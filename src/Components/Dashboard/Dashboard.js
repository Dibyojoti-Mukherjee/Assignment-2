import React from "react";
import Reports from "../Cards/Reports";
import ChartWrapper from "../Charts/ChartWrapper";

import styled from "styled-components";

const StyledDashboard=styled.div`

  /* height:auto;
  width: auto; */
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-around;
  /* right: 10px;
  left:10px;
  top:50px; */
  flex-wrap: wrap;
  flex-direction: column;
  flex: 1;
  /* width: '100%'; */
  h2{
  text-align: center;
}
  @media only screen and (max-width: 600px) {
   h2{
    text-align: left;
   }
  }

  
`;

const Report={
    employees: {name:'Test', designation: 'Test'},
    salesReport:{
      weeklySales:15000,
      increasedPercent:60
    },
    orderReport:{
      weeklySales:45000,
      increasedPercent:10
    },
    visitorReport:{
      weeklySales:95000,
      decreasedPercent:60
    },
    visitSalesReport:{
      Jan:{China:10, USA:20, Ind:30},
      Feb:{China:10, USA:20, Ind:30},
      Mar:{China:10, USA:20, Ind:30},
      Apr:{China:10, USA:20, Ind:30},
      Jun:{China:10, USA:20, Ind:30}
    },
    trafficSource:{
      socialMedia:'20%',
      searchEngines:'60%',
      directContact:'20%',
    }
  }
function Dashboard() {
    return (<StyledDashboard><div><h2>Dashboard</h2></div>
    <Reports report={Report} />
    {/* <Charts values={Report.visitSalesReport}/>
    <PieChart values={Report.trafficSource}/> */}
    <ChartWrapper value={Report}></ChartWrapper>
   </StyledDashboard>)
}
export default Dashboard;