import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="Creative Hike Full-stack Development" />
      </Thumbnail>
      <Details>
        <h1>About Me</h1>
        <p>
          I am a full-stack developer living in Amsterdam. I have experience working with Python, PHP, MySQL,
          JavaScript, HTML, and CSS. I love learning about new technology and keeping up with the rapidly evolving
          software development industry.
        </p>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
