import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const FixedContainer = styled.header`
  position: fixed;
  background: ${(props) => props.theme.background};
  width: 70rem;
  z-index: 999;
`

export const HeaderContainer = styled.div`
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

  @media (max-width: 1100px) {
    justify-content: flex-start;
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

  transition: color 1s, background 0.2s;
`

export const NavLinkLocation = styled(BaseNavLink)`
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme.purple};

  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;

  &:hover {
    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['purple-light']};
    svg {
      color: ${(props) => props.theme['purple-light']};
    }
  }
`

export const NavLinkCart = styled(BaseNavLink)`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme['yellow-light']};
    svg {
      color: ${(props) => props.theme['yellow-light']};
    }
  }

  & div {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 25px;
    right: -10px;

    @media (max-width: 1100px) {
      left: 280px;
    }

    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};

    border-radius: 50%;
  }
`
