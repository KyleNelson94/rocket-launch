import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: relative;
  width: 100%;
  padding: 3rem 0;
  background: ${props => props.theme.color.primary};
  z-index: 9999;
`;

const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: ${props => props.theme.dimension.maxWidth}px;
  padding: 0 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media(min-width: 768px) {
    justify-content: flex-start;
  }
`;

export {
  HeaderWrapper,
  HeaderContainer,
};