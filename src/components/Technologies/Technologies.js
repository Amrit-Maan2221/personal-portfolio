import React from 'react';
import { DiFirebase, DiReact, DiJava, DiNodejs, DiBootstrap } from 'react-icons/di';
import { SiAzuredevops, SiFramer } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the development world.
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <DiJava size="3rem" />
          <ListTitle>Programming Languages </ListTitle>
          <ListParagraph>
            JavaScript, C#, C, C++, Java, HTML5, CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <DiNodejs size="3rem" />
          <ListTitle>Backend </ListTitle>
          <ListParagraph>
            NodeJs, PHP
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <DiReact size="3rem" />
          <ListTitle>Libraries </ListTitle>
          <ListParagraph>
            ReactJs, jQuery
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <SiFramer size="3rem" />
          <ListTitle>Frameworks </ListTitle>
          <ListParagraph>
            .NET, Bootstrap, NextJs, ExpressJs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <SiAzuredevops size="3rem" />
          <ListTitle>Cloud Computing </ListTitle>
          <ListParagraph>
            Microsoft Azure
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <DiFirebase size="3rem" />
          <ListTitle>Databases </ListTitle>
          <ListParagraph>
            MySQL, MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
  </Section>
);

export default Technologies;
