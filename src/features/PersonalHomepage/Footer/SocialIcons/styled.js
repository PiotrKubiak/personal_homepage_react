import styled from "styled-components";

export const List = styled.ul`
  margin-top: 56;
  margin-bottom: 0;
  display: flex;
  list-style: none;
  padding: 0;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin-top: 40px;
  }
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
      margin-right: 16px;
    }
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: color 0.5s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const styledIcon = Icon => styled(Icon)`
  height: auto;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 32px;
  }
`;