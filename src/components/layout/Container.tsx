import * as React from 'react';

const Container = (props: any) => {
  return (
    <div>
      <h1>Hello Container</h1>
      {props.children}
    </div>
  );
}

export default Container;
