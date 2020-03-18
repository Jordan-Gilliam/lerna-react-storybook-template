import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTitle = styled.h1`
  font-size: 4em;
  font-weight: lighter;
  letter-spacing: 3px;
  line-height: 1;
  margin-top: 0;
  color: var(--grey-3);

  :after {
    content: ${props => props.content};
    display: block;
    width: 1em;
    border-bottom: 2px solid var(--brand);
    margin-top: -0.5em;
    margin-left: -1.1em;
  }
`;

const Title = props => <StyledTitle>{props.children}</StyledTitle>;

Title.propTypes = {
  content: PropTypes.string,
  children: PropTypes.string
};

Title.defaultProps = {
  content: '',
  children: ''
};

export default Title;
