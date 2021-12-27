import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';


const Timeline = () => {

  return (
    <Section id='about'>
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText style={{ fontSize: "1.7rem", lineHeight: "1.5" }}>
        Since I was a child, I have always had a great interest in Mathematics-
        the more challenging problems, the better. Eventually, my love for overcoming
        complex problems led me to pursue a career in Programming.

        Currently, I am a full student student at Conestoga Collage studying
        Software Engineering Technology. Along with this I do not miss out
        the chance to study anything related to programming that is available online.
        I also learned Full Stack Web Development on LinkedIn learning. Having skills of various programming languages
        I have individually developed many small projects. I look forward to advance my programming skills daily
        and serve the world with this.

        I also do part time work at Circle K Gas Station in Kitchener. I was also a IELTS trainer and I have helped
        many students to get the desired band score in IELTS. Also working at Gas Station and IELTS helped me at lot
        to polish my Communication skills.

        I also have a side interest of Gyming and Fitness.
      </SectionText>
    </Section>
  );
};

export default Timeline;
