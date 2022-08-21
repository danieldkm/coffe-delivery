import { useState, useContext } from 'react'

import { ShoppingCart, Minus, Plus } from 'phosphor-react'

import { CartsContext } from '../../../../contexts/CartsContext'

import { IncrementButton } from '../../../../components/IncrementButton'

import {
  Coffe,
  TagContainer,
  Tag,
  CoffeContent,
  CoffeTitle,
  CoffeSubtitle,
  CoffeBottom,
  AddButton,
} from './styles'

interface CardCoffeeProps {
  imageUrl: string
  price: number
  title: string
  subtitle: string
  tags: string[]
}
export function CardCoffee({
  imageUrl,
  price,
  title,
  subtitle,
  tags,
}: CardCoffeeProps) {
  const [quantity, setQuantity] = useState(1)
  const { addCoffeeCart } = useContext(CartsContext)
  function handleAddCoffee() {
    addCoffeeCart({
      title,
      subtitle,
      tags,
      imageUrl,
      price,
      quantity,
    })
  }
  return (
    <Coffe>
      <CoffeContent>
        <img src={imageUrl} alt="Café Expresso" />
        <TagContainer>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagContainer>
        <CoffeTitle>{title}</CoffeTitle>
        <CoffeSubtitle>{subtitle}</CoffeSubtitle>
        <CoffeBottom>
          <div>
            <span>R$ </span>
            <span>
              {new Intl.NumberFormat('pt-BR', {
                style: 'decimal',
                currency: 'BRL',
                minimumFractionDigits: 2,
              }).format(price)}
            </span>
          </div>
          <div className="buttons">
            <IncrementButton quantity={quantity} setQuantity={setQuantity} />
            <div>
              <AddButton onClick={handleAddCoffee}>
                <ShoppingCart size={22} weight="fill" />
              </AddButton>
            </div>
          </div>
        </CoffeBottom>
      </CoffeContent>
    </Coffe>
  )
}
