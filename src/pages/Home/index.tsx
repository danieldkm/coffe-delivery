import cupCoffeDelivery from '../../assets/images/cup-coffe-delivery.png'
import {
  HomeContainer,
  BackgroundContainer,
  ContentContainer,
  CoffeContainer,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <BackgroundContainer />
      <ContentContainer>
        <p>Encontre o café perfeito para qualquer hora do dia</p>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
      </ContentContainer>
      <CoffeContainer>
        <img src={cupCoffeDelivery} alt="Cup Coffe" />
      </CoffeContainer>
    </HomeContainer>
  )
}
