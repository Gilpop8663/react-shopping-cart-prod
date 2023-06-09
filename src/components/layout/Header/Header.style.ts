import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Navbar = styled.div`
  position: fixed;
  width: 100vw;

  color: ${({ theme }) => theme.colors.lightColor};
  background-color: ${({ theme }) => theme.colors.primaryColor};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 8rem;
`;

export const HeaderLink = styled(Link)`
  font-size: 2.4rem;
`;
