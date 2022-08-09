import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffeDelivery from '../../assets/coffe-delivery-logo.svg'

import { HeaderContainer, NavLinkLocation, NavLinkCart } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoCoffeDelivery} alt="" />
      </span>
      <nav>
        <NavLinkLocation to="/" title="Timer">
          <MapPin size={22} weight="fill" /> Porto Alegre, RS
        </NavLinkLocation>
        <NavLinkCart to="/history" title="Histórico">
          <ShoppingCart size={22} weight="fill" />
        </NavLinkCart>
      </nav>
    </HeaderContainer>
  )
}
