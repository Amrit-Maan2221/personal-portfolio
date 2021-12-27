import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello There, <br />
        I am Amrit
      </SectionTitle>
      <SectionText>
        Second Year Software Engineering Technology Student at Conestoga College who gets a genuine kick out of leveraging technology.
      </SectionText>
      <Button onClick={() => window.location = "https://www.linkedin.com/in/amritpal-singh-11212001/"}> Reach Out</Button>
    </LeftSection>
  </Section>
);

export default Hero;