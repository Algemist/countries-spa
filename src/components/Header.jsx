import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from "react";
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { Container } from './Container';
import { Link } from 'react-router-dom';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: (--colors-ui-base);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;
const Title = styled(Link).attrs({
    to: '/countries-spa/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;
const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-style: var(--fs-sm);
  cursor: pointer;
  font-weight: var(--fw-bold);
  text-transform: capitalize;
`;

const Header = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    }, [theme])

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Where is world?</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        { theme === "light" ? (
                            <IoMoonOutline size="14px"/>
                        ) : (
                            <IoMoon size="14px"/>
                        ) }
                       {' '}<span style={{marginLeft: '0.75 rem'}}>{theme} Theme</span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
};

export default Header;