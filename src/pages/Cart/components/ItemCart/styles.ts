import styled from 'styled-components'

export const ItemCartContainer = styled.div`
  width: 23rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 8px 4px;

  & img {
    width: 64px;
    height: 64px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    & > h4 {
      font-family: 'Roboto', sans-serif;
      color: ${(props) => props.theme['base-subtitle']};
      font-weight: 400;
      font-size: 1rem;
    }
  }

  & > div > div {
    display: flex;
    gap: 8px;
  }

  & h4 {
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-text']}
    font-weight: 700;
    font-size: 1rem;
  }
`
export const RemoveButton = styled.button`
  background: ${(props) => props.theme['base-button']};
  border: 0;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;

  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme['base-text']}
  font-weight: 400;
  font-size: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  transition: background 0.2s;

  & svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`
