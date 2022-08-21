import { Minus, Plus } from 'phosphor-react'

import { IncrementButtonContainer, Button } from './styles'

interface IncrementButtonProps {
  quantity: number
  setQuantity: void
}

export function IncrementButton({
  quantity,
  setQuantity,
}: IncrementButtonProps) {
  const handleAdd = () => {
    setQuantity(quantity + 1)
  }
  const handleSub = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  return (
    <IncrementButtonContainer>
      <Button onClick={handleSub}>
        <Minus size={14} weight="bold" />
      </Button>
      {quantity}
      <Button onClick={handleAdd}>
        <Plus size={14} weight="bold" />
      </Button>
    </IncrementButtonContainer>
  )
}
