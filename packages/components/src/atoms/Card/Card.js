import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCard = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 2em;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  p {
    margin-bottom: 2em;
  }
`;

const Card = props => <StyledCard>{props.children}</StyledCard>;

Card.propTypes = {
  children: PropTypes.string
};

Card.defaultProps = {
  children: ''
};

export default Card;
