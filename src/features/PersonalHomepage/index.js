import { Skills } from "./Skills"
import { Container, Icon } from "./styled"
import { MainInformation } from "./MainInformation";
import { Portfolio } from "./Portfolio";
import { Footer } from "./Footer";
import { ThemeSwitch } from "../../../src/common/ThemeSwitch";
import tools from "./icons/tools.png";
import rocket from "./icons/rocket.png";

export const PersonalHomepage = ({ skills, nextSkills }) => {
  <Container>
    <ThemeSwitch />
    <MainInformation />

    <main>
      <Skills
        title={(
          <>
            My skillset includes <Icon src={tools} alt="" />
          </>
        )}
        skills={skills}
      />
      <Skills
        title={(
          <>
            What I want to learn next <Icon src={rocket} alt="" />
          </>
        )}
        skills={nextSkills}
      />
      <Portfolio />
    </main>

    <Footer />
  </Container>
}