import styled from 'styled-components'

export const Coffe = styled.div`
  width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  img {
    position: relative;
    width: 7.5rem;
    height: 7.5rem;
  }
`
export const CoffeContent = styled.div`
  top: -40px;
  position: relative;
  width: 13.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const TagContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`

export const Tag = styled.div`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  padding: 4px 8px;
  margin: auto;
  border-radius: 100px;

  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 0.625rem;
  width: 5rem;
  line-height: 130%;

  text-align: center;
`

export const CoffeTitle = styled.div`
  margin-top: 0.5rem;
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.625rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const CoffeSubtitle = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.14rem;
  text-align: center;
  color: ${(props) => props.theme['base-label']};
`
export const CoffeBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.4375rem;
  height: 1.75rem;
  margin-top: 2.06rem;

  & div:first-child {
    & span:first-child {
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
    }
    & > span {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
      font-weight: 800;
    }
  }
  & .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    div {
      max-width: 4.5rem;
      background: ${(props) => props.theme['base-button']};
      border-radius: 6px;
      display: flex;
      align-items: center;
    }
  }
`

export const AddButton = styled.button`
  height: 2.375rem;
  width: 2.375rem;
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};
  border: 0;
  padding: 0.5rem;
  border-radius: 6px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.5s;

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`

export const IncrementButton = styled.button`
  height: 2.375rem;
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
