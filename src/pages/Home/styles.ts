import styled from 'styled-components'

import backgroundImage from '../../assets/images/background.png'

export const HomeContainer = styled.main`
  flex: 1;
  height: 34rem;

  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`
export const BackgroundContainer = styled.div`
  position: fixed;
  top: 4.75rem;
  left: 0;
  background-image: url(${backgroundImage});
  width: 100%;
  /* height: 100%; */
  /* width: 100vw; */
  height: 34rem;
  /* width: 100%; */
  /* height: auto; */

  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  /* background-color: black; */
  filter: blur(160px);
`

export const ContentContainer = styled.div`
  height: 34rem;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
  }
`

export const CoffeContainer = styled.div`
  height: 34rem;
  /* display: flex; */
`
