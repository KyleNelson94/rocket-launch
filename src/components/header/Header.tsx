import * as React from 'react';
import {
  HeaderContainer, HeaderWrapper
} from './styles';
import styled from 'styled-components';
import Logo from '@assets/images/Logo';

const NavigationWrapper = styled.div`
  display: inline-block;

  label {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    display: block;
    width: 30px;
    height: 30px;
    cursor: pointer;
    padding: 2.5rem;

    span {
      background: ${props => props.theme.color.secondary};
      width: 30px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      height: 2.5px;
      border-radius: 10px;
      right: 25px;

      &::before, &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2.5px;
        background: ${props => props.theme.color.secondary};
        border-radius: inherit;
        transition: 600ms cubic-bezier(0.075, 0.82, 0.165, 1);
      }

      &::before {
        top: -6px;
      }

      &::after {
        bottom: -6px;
      }
    }
  }

  @media(min-width: 786px) {
    label {
      display: none;
      position: relative;
      top: auto;
      transform: none;
      right: auto;
      padding: 0;
    }
  }
`;

const NavigationList = styled.ul`
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0;
  display: none;

  @media(min-width: 786px) {
    display: block;
  }

  &.nav-sm {
    display: block;
    position: absolute;
    background: ${props => props.theme.color.primary};
    width: 100%;
    min-height: calc(100vh - 121px);
    transform: translateY(-100%);
    transition: 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
    z-index: -1;

    > li {
      display: block;
      padding: 1.5rem 0;

      a {
        padding: 0 30px;
      }
    }

    @media(min-width: 768px) {
      display: none;
    }
  }
`;

const NavigationItem = styled.li`
  display: inline;

  > a {
    color: ${props => props.theme.color.secondary};
    text-decoration: none;
    font-weight: bold;
    padding: 0 1.5rem;
  }
`;

export default function Header() {
  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <Logo />
          <NavigationWrapper>
            <label htmlFor="menu_check">
              <span></span>
            </label>
            <NavigationList>
              <NavigationItem>
                <a href="/">Book</a>
              </NavigationItem>
              <NavigationItem>
                <a href="/">Prepare &amp; Travel</a>
              </NavigationItem>
              <NavigationItem>
                <a href="/">About</a>
              </NavigationItem>
            </NavigationList>
          </NavigationWrapper>
        </HeaderContainer>
      </HeaderWrapper>
      <NavigationList className="nav-sm">
        <NavigationItem>
          <a href="/">Book</a>
        </NavigationItem>
        <NavigationItem>
          <a href="/">Prepare &amp; Travel</a>
        </NavigationItem>
        <NavigationItem>
          <a href="/">About</a>
        </NavigationItem>
      </NavigationList>
    </>
  )
}
