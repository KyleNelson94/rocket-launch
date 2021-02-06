import React from 'react';

import Header from './header';
import styled from 'styled-components';
import Container from './layout/index';
import Router from './navigation/Router';

function App() {

  const AppContainer = styled.div`
    #menu_check {
      display: none;

      &:checked {
        ~ header div label span {
          background: ${props => props.theme.color.primary};

          &::before {
            transform: rotate(145deg);
            top: auto;
          }
          &::after {
            transform: rotate(-145deg);
            bottom: auto;
          }
        }

        ~ .nav-sm {
          transform: translateY(0);
          z-index: 1;
        }
      }
    }
  `;

  return (
    <AppContainer className="App">
      <input type="checkbox" name="menu_check" id="menu_check" />
      <Header />
      <Container>
        <Router />
      </Container>
    </AppContainer>
  );
}

export default App;
