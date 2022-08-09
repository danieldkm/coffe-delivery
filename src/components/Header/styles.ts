import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;

  img {
    height: 2.5rem;
  }

  nav {
    display: flex;
    gap: 0.75rem;
  }
`

const BaseNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  padding: 8px;
  border-radius: 6px;

  &:link {
    text-decoration: none;
  }

  transition: color 0.2s, background 0.2s;
`

export const NavLinkLocation = styled(BaseNavLink)`
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  &:hover {
    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['purple-light']};
  }
`

export const NavLinkCart = styled(BaseNavLink)`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme['yellow-light']};
  }
`
