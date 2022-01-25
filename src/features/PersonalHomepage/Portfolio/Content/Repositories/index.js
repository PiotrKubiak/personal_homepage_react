import { Description, Link, Links, LinksRow, LinksValue, List, Name, Tile } from "./styled";

export const Repositories = ({ repositories }) => (
  <List>
    {repositories.map(({ id, name, description, homepage, html_url }) => (
      <Tile key={id}>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <Links>
          {!!homepage && (
            <LinksRow>
              <dt>Demo:</dt>
              <LinksValue>
                <Link target="_blank" rel="noreferrer" href={homepage}>Link to this website</Link>
              </LinksValue>
            </LinksRow>
          )}
          <LinksRow>
            <dt>Code:</dt>
            <LinksValue>
              <Link target="_blank" rel="noreferrer" href={html_url}>Link to this repository</Link>
            </LinksValue>
          </LinksRow>
        </Links>
      </Tile>
    ))}
  </List>
);