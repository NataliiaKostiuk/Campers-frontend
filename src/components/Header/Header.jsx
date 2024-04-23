import { NavLink } from "react-router-dom";

import {Container, Logo, Navlink} from './Header.styled'
export const Header = () => {
    return (
        <Container>
            <Logo>
                <NavLink to={'/' }> Coose your Camper</NavLink> 
            </Logo>
            <Navlink to={'/campers'}>Campers</Navlink>
            <Navlink to={'/favourite'}>My Favourite</Navlink>

        </Container>
    )
}