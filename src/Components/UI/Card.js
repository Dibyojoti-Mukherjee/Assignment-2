

import styled from "styled-components";

const Card=styled.div`
border-radius: 12px;
box-shadow: 0 1px 8px rgba(0,0,0,0.25);   
border: 1px solid black;
margin: 1rem 1rem;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
@media only screen and (max-width: 600px) {
 width: 60%;
}
`
// function Card(props)
// {
//     // const classes=props.className+" card" ;// adding new classes with exesting classes (props.className returns the exiting classes )
  
//      return (<StyledCard className={props.className} >{props.children}</StyledCard>);
//     //return (<div></div>);

// }

export default Card;