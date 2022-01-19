import { ButtonLink } from "../../../ButtonLink";
import { Wrapper, Header, Paragraph } from "./styled";
import { githubUserName } from "../../githubUserName";
import { ReactComponent as WarningIcon } from "./icons/danger.svg";

export const ErrorBox = () => (
    <Wrapper>
        <WarningIcon />
        <Header>Ooops! Something went wrong...</Header>
        <Paragraph>
            Sorry, failed to load Github projects.<br />
            You can check directly on GitHub.
        </Paragraph>
        <ButtonLink href={`https://github.com/${githubUserName}`} target="_blank">Go to Github</ButtonLink>
    </Wrapper>
);

