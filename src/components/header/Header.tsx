import * as React from 'react';
import {
  HeaderContainer, 
  HeaderWrapper,
  NavigationWrapper,
  NavigationList,
  NavigationItem
} from './styles';
import Logo from '@assets/images/Logo';

export default function Header() {
  const [NavList, SetNavList] = React.useState(["Book", "Prepare & Travel", "Starship"]);
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
              { NavList.map((item, key) => (
                <NavigationItem key={key}>
                  <a href="/">{item}</a>
                </NavigationItem>
              ))}
            </NavigationList>
          </NavigationWrapper>
        </HeaderContainer>
      </HeaderWrapper>
      <NavigationList className="nav-sm">
        { NavList.map((item, key) => (
          <NavigationItem key={key}>
            <a href="/">{item}</a>
          </NavigationItem>
        ))}
      </NavigationList>
    </>
  )
}
