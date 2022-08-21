import { ShoppingCart, Package, Minus, Plus } from 'phosphor-react'

import { ItemIconContainer, CircleContainer } from './styles'

interface ItemIconProps {
  contet: string
  color: string
}
export function ItemIcon({ content, color, children }: ItemIconProps) {
  return (
    <ItemIconContainer>
      <CircleContainer color={color}>{children}</CircleContainer>
      {content}
    </ItemIconContainer>
  )
}
