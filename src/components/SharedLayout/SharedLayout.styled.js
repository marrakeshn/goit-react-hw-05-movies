import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: #212121;
  height: 72px;
  border-bottom: 1px solid gray;
  padding: 40px 60px;
  > nav {
    display: flex;
    gap: 16px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  font-weight: 500;
  font-size: 32px;
  border-radius: 4px;
  text-decoration: none;
  color: white;

  &.active {
    color: black;
    background-color: #F5C518;
  }
`;