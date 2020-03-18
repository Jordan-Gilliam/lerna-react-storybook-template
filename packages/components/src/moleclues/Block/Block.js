import React from 'react';
import PropTypes from 'prop-types';
import Card from '../atoms/card';
import Button from '../atoms/button';
import Title from '../atoms/title';

const Block = props => (
  <Card className={props.className}>
    <Title>{props.title}</Title>
    {props.children}
    {props.button !== '' && <Button>{props.button}</Button>}
  </Card>
);

Block.propTypes = {
  children: PropTypes.React.Node,
  className: PropTypes.string,
  title: PropTypes.string,
  button: PropTypes.string
};

Block.defaultProps = {
  className: '',
  children: '',
  title: '',
  button: ''
};

export default Block;
