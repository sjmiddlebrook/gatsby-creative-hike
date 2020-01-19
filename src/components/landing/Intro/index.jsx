import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Jack Middlebrook</h1>
        <h4>Full-stack Developer</h4>
        <Button as={AnchorLink} href="#contact">
          Contact Me
        </Button>
      </Details>
      <Thumbnail>
        <img src={dev} alt="Creative Hike Full-stack Development" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
