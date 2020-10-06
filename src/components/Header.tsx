import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Bounds } from './Common';
import logo from '../logo.svg';

const SiteHeader = styled.header`
    background: rgb(39,43,51);
    padding: 20px 0rem;
    box-shadow: 5px 5px 10px rgba(0, 0 , 0, .1);
    a {
        color: #d4d5de;
        font-weight: 600;
    }
    a.current {
        color: var(--tsa-brand-blue);
    }
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const NavLinks = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    li {
        display: inline-block;
        margin-right: 20px;
    }
    li:last-of-type {
        margin-right: 0px;
    }
`;

class Header extends React.Component {
    public render() {
        return (
            <SiteHeader>
                <Bounds>
                    <Nav>
                        <Link to="/">
                            <img src={logo} height={80}/>
                        </Link>
                        <NavLinks>
                            <li>
                                <NavLink to="/" activeClassName="current" exact>HS</NavLink>
                            </li>
                            <li>
                                <NavLink to="/middle-school" activeClassName="current" exact>MS</NavLink>
                            </li>
                        </NavLinks>
                    </Nav>
                </Bounds>
            </SiteHeader>
        );
    }
}

export default Header; 