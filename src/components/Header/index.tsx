import { useContext } from 'react'

import { MapPin, ShoppingCart } from 'phosphor-react'

import { CartsContext } from '../../contexts/CartsContext'

import logoCoffeDelivery from '../../assets/coffe-delivery-logo.svg'

import {
  FixedContainer,
  HeaderContainer,
  NavLinkLocation,
  NavLinkCart,
} from './styles'

export function Header() {
  const { carts } = useContext(CartsContext)
  return (
    <FixedContainer>
      <HeaderContainer>
        <span>
          <img src={logoCoffeDelivery} alt="" />
        </span>
        <nav>
          <NavLinkLocation to="/" title="Timer">
            <MapPin size={22} weight="fill" /> Porto Alegre, RS
          </NavLinkLocation>
          <NavLinkCart to="/cart" title="Histórico">
            <ShoppingCart size={22} weight="fill" />
            {!!carts?.length && (
              <div>
                <span>{carts.length}</span>
              </div>
            )}
          </NavLinkCart>
        </nav>
      </HeaderContainer>
    </FixedContainer>
  )
}
