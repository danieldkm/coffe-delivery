/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from 'react'

import { Trash } from 'phosphor-react'

import { ItemCartContainer, RemoveButton } from './styles'

import { Cart } from '../../../../reducers/reducer'
import { CartsContext } from '../../../../contexts/CartsContext'

import { IncrementButton } from '../../../../components/IncrementButton'

import expressoImg from '../../../../assets/images/expresso.png'

interface ItemCartProps {
  cart: Cart
}
export function ItemCart({ cart }: ItemCartProps) {
  const [quantity, setQuantity] = useState(cart.quantity)
  const { addCoffeeCart, removeCoffeeCart } = useContext(CartsContext)

  useEffect(() => {
    if (quantity !== cart.quantity) {
      addCoffeeCart({
        ...cart,
        quantity: quantity - cart.quantity,
      })
    }
  }, [quantity])

  function handleRemoveItem() {
    removeCoffeeCart(cart)
  }

  const total = cart.price * quantity
  return (
    <ItemCartContainer>
      <img src={cart.imageUrl} alt="café selecionado" />
      <div>
        <h4>{cart.title}</h4>
        <div>
          <IncrementButton quantity={quantity} setQuantity={setQuantity} />
          <RemoveButton onClick={handleRemoveItem}>
            <Trash size={16} /> REMOVER
          </RemoveButton>
        </div>
      </div>
      <h4 className="price">
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
        }).format(total)}
      </h4>
    </ItemCartContainer>
  )
}
