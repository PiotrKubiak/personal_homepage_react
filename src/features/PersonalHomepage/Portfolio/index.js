import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { Header, MyRecentProjects, Section, StyledGithubIcon } from "./styled";
import { SubHeader } from "../SubHeader";
import { Content } from "./Content";
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "../../personalHomepageSlice";
import { githubUserName } from "./githubUserName";

export const Portfolio = () => {
  const dispatch = useDispatch;

  const repositoriesStatus = useSelector(selectRepositoriesStatus);
  const repositories = useSelector(selectRepositories);

  useEffect(() => {
    dispatch(fetchRepositories(githubUserName));
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