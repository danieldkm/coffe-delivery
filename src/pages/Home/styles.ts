import styled from 'styled-components'

import backgroundImage from '../../assets/images/background.png'

export const HomeContainer = styled.main``

export const BackgroundContainer = styled.div`
  position: absolute;
  top: 6.75rem;
  left: 0;
  background-image: url(${backgroundImage});
  width: 100%;
  height: 36rem;

  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`
export const HeaderContainer = styled.section`
  margin: 9.75rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  gap: 4.125rem;

  text-align: left;
`
export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 1rem;
  span:first-child {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-title']};
    line-height: 3.9rem;
  }
  span:last-child {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.625rem;
  }
`
export const ItemsContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;

  .itemsColumn {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 1.25rem;
  }
  @media (max-width: 540px) {
    justify-content: center;
  }
`

export const CupCoffeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 29.75rem;
  }

  @media (max-width: 768px) {
    img {
      width: 22rem;
    }
  }
`
export const CoffesContainer = styled.section`
  margin: 2rem auto;
  padding: 2rem 0px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1.25rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 2.6rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 2.125rem;
  }

  & .coffees-content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    flex-wrap: wrap;
  }
  @media (max-width: 540px) {
    & .coffees-content {
      justify-content: center;
    }
  }
`
