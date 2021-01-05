import React from 'react';
import { Card, Elevation } from "@blueprintjs/core";

interface Props {
  title: string,
  content: string,
};

const BaseCard = ({title, content}:Props) => {

  return (
    <Card elevation={Elevation.TWO} interactive>
      <h4>{title}</h4>
    </Card>
  );
}

export default BaseCard;