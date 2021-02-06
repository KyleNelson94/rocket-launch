import * as React from 'react';
import {
  Wrapper
} from './styles';

const Container = (props: any) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}

export default Container;
