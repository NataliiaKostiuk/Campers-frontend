import styled from "styled-components";

import Camper from '../../campervan.jpg';


export const Container = styled.section`
   margin-top: 70px;
  background-image:  url(${Camper});
  width: 100%;
  height: 600px;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 20px;
`;
