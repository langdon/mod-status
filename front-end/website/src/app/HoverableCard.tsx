import * as React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '@patternfly/react-core';

const HoverableCard = props => (
  <Card isHoverable>
    <CardHeader>Header</CardHeader>
    <CardBody>
      body with props.number = {props.number}
    </CardBody>
    <CardFooter>Footer</CardFooter>
  </Card>
);

export default HoverableCard;