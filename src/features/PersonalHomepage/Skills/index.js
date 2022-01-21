import { Section, StyledHeader, List, Item, Bullet } from "./styled";
import { skills } from "../skillsData";

export const Skills = ({ title }) => (
  <Section>
    <StyledHeader>{title}</StyledHeader>
    <List>
      {skills.map(skill => (
        <Item key={skill}>
          <Bullet />
          {skill}
        </Item>
      ))}
    </List>
  </Section>
);