import React, { useState as useStateReact, useEffect } from 'react';
import styled from 'styled-components';
import useState from 'global-hook-store';
import { Link } from 'react-router-dom';
import { RiUser3Line, RiHomeLine, RiShieldLine } from 'react-icons/ri';

import GlobalState from '../GlobalState';

const Menu = styled.nav`
  background: rgba(255, 255, 255, 0);
  bottom: 0;
  display: flex;
  flex-flow: row;
  font-size: 140%;
  left: 0;
  position: fixed;
  width: 100%;

  ul {
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    list-style: none;
    justify-content: space-around;
    margin: 0;
    padding: 2% 10% 0;
    width: 80%;

    li {
      align-items: center;
      display: flex;
      flex-flow: column nowrap;

      a {
        align-items: center;
        color: ${(props) => (props.background ? props.background : '#b3e7ca')};
        display: flex;
        flex-flow: column nowrap;
        margin: 0;
        padding: 0;
        text-decoration: none;

        svg {
          color: ${(props) =>
            props.background ? props.background : '#b3e7ca'};
        }
      }
    }
  }
`;

const Box = styled.div`
  background: ${(props) => (props.background ? props.background : '#b3e7ca')};
  height: 12px;
  margin-top: 10px;
  width: 12px;
`;

function MenuApp({ background, color }) {
  const { state } = useState(GlobalState);

  const [optionOne, SetOptionOne] = useStateReact(false);
  const [optionTwo, SetOptionTwo] = useStateReact(false);
  const [optionThree, SetOptionThree] = useStateReact(false);

  function backgroundMenu(option) {
    return option ? (color ? color : '#b3e7ca') : 'transparent';
  }

  useEffect(() => {
    SetOptionOne(
      state.section === 'home' || state.section === undefined ? true : false,
    );
    SetOptionTwo(state.section === 'shield' ? true : false);
    SetOptionThree(state.section === 'user' ? true : false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Menu background={color}>
        <ul>
          <li>
            <Link to="/">
              <RiHomeLine
                onClick={() => {
                  SetOptionOne(true);
                  SetOptionTwo(false);
                  SetOptionThree(false);
                }}
              />
              <Box background={backgroundMenu(optionOne)} />
            </Link>
          </li>
          <li>
            <Link to="/shield">
              <RiShieldLine
                onClick={() => {
                  SetOptionOne(false);
                  SetOptionTwo(true);
                  SetOptionThree(false);
                }}
              />
              <Box background={backgroundMenu(optionTwo)} />
            </Link>
          </li>
          <li>
            <Link to="/user">
              <RiUser3Line
                onClick={() => {
                  SetOptionOne(false);
                  SetOptionTwo(false);
                  SetOptionThree(true);
                }}
              />
              <Box background={backgroundMenu(optionThree)} />
            </Link>
          </li>
        </ul>
      </Menu>
    </>
  );
}

export default MenuApp;
