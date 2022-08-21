import styled from 'styled-components'

export const IncrementButtonContainer = styled.div`
  max-width: 4.5rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  display: flex;
  align-items: center;
`

export const Button = styled.button`
  height: 2rem;
  width: 2.375rem;
  background: ${(props) => props.theme['base-button']};
  border: 0;
  padding: 0.5rem;
  border-radius: 6px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: color 1s;
  & svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    & svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
