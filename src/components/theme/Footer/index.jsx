import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Details } from './styles';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <span>Creative Hike | {new Date().getFullYear()}</span>
      </Details>
    </Flex>
  </Wrapper>
);
