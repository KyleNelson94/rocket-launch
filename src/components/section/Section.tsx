import * as  React from 'react'
import styled from 'styled-components';

interface Props {
  width: number;
  backgroundColor?: string;
  children: React.ReactNode;
  imageUri?: string;
  clearPadding?: boolean;
}

function Section({
  width,
  backgroundColor,
  children,
  imageUri,
  clearPadding }: Props) {
  
  const SectionContain = styled.div`
    position: relative;
    background-color: ${
      backgroundColor ? backgroundColor
      : props => props.theme.color.secondary};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    background-image: url(${imageUri});
    color: ${props => props.theme.color.secondary};
    padding: ${clearPadding ? 0 : '2rem 4rem'};
    width: 100%;
    overflow: hidden;

    @media(min-width: 768px) {
      width: ${width}%;
      min-height: calc(100vh - 135px);
    }
  `;
  return (
    <SectionContain>
      {children}
    </SectionContain>
  )
}

export default Section;