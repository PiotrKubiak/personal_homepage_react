import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header, MyRecentProjects, Section, StyledGithubIcon } from "./styled";
import { SubHeader } from "../SubHeader";
import { Content } from "./Content";
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "../../personalHomepageSlice";
import { githubUsername } from "./githubUsername";

export const Portfolio = () => {
    const dispatch = useDispatch();

    const repositoriesStatus = useSelector(selectRepositoriesStatus);
    const repositories = useSelector(selectRepositories);

    useEffect(() => {
        dispatch(fetchRepositories(githubUsername));
    }, [dispatch]);

  return (
    <Section>
      <Header>
        <StyledGithubIcon />
        <SubHeader>Portfolio</SubHeader>
        <MyRecentProjects>My Recent Projects</MyRecentProjects>
      </Header>

      <Content
        status={repositoriesStatus}
        repositories={repositories}
      />
    </Section>
  );
};