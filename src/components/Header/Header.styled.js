import styled from 'styled-components';

import { NavLink } from "react-router-dom";

export const Container = styled.div`  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
width: 100%;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
padding-left:64px;
padding-right:64px;
background: #ffffff;
`;
export const Logo = styled.div`
margin-right: auto;
font-size: 20px;
font-weight: 600;
line-height: 24px;
text-align: left;
color: #101828;
`;

export const Navlink = styled(NavLink)`
display: block;
padding: 20px;
font-size: 20px;
font-weight: 600;
line-height: 24px;
text-align: left;
color: #101828;
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
 &:hover {
color: #E44848 ;
  } 
`