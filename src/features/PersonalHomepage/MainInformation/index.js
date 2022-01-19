import { email } from "../email";
import profileImage from "./images/profile.jpg";
import { Avatar, StyledButtonLink, ButtonIcon, Name, Summary, ThisIs, Wrapper } from "./styled";

export const MainInformation = () => (
  <Wrapper>
    <Avatar src={profileImage} alt="Piotr Kubiak" />
    <>
      <ThisIs>This is</ThisIs>
      <Name>Piotr Kubisk</Name>
      <Summary>
        🧑💻I'm passionate about Frontend mainly JavaScript React, and currenty looking for new job.
      </Summary>
      <StyledButtonLink href={`mailto:${email}`} title={email}>
        <ButtonIcon />
        Hire me
      </StyledButtonLink>
    </>
  </Wrapper>
);