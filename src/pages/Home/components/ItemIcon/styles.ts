import styled from 'styled-components'

export const ItemIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`

interface CircleContainerProps {
  color: string
}
export const CircleContainer = styled.div<CircleContainerProps>`
  background: ${(props) => props.color};
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.white};
  border-radius: 50%;
`
