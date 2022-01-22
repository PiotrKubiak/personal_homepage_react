import styled from "styled-components";
import { SubHeader } from "../SubHeader";
import { ReactComponent as BulletIcon } from "./icons/bullet.svg";

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.boxBackground};
  padding: 32px;
  margin-top: 72px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  border: 6px solid ${({ theme }) => theme.colors.tile.border};

  &:hover {
    border-color: ${({ theme }) => theme.colors.tile.borderHover}
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin-top: 48px;
    padding: 16px;
  }
`;

export const List = styled.ul`
  margin-top: 32px;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px 32px;
  list-style: none;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletHMax}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletVMax}) {
    font-size: 16px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 14px;
    grid-template-columns: 1fr;
    margin-top: 12px;
  }
`;

export const Item = styled.li`
  display: flex;
  line-height: 1.4;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    line-height: 1.2;
  }
`;

export const Bullet = styled(BulletIcon)`
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 16px;
  height: auto;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 6px;
    margin-right: 8px;
  }
`;

export const StyledHeader = styled(SubHeader)`
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    padding-bottom: 12px;
  }
`;
