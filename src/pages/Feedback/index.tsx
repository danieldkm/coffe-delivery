import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

import entregadorImg from '../../assets/images/Illustration.png'

import {
  FeedbackContainer,
  SectionContainer,
  ContentContainer,
  ContentRow,
  CircleContainerIcon,
} from './styles'

export function Feedback() {
  return (
    <FeedbackContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <h3>Agora é só aguardar que logo o café chegará até você</h3>
      </div>
      <SectionContainer>
        <ContentContainer>
          <div>
            <ContentRow>
              <CircleContainerIcon>
                <MapPin size={16} weight="fill" />
              </CircleContainerIcon>
              <div className="content">
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{' '}
                Farrapos - Porto Alegre, RS
              </div>
            </ContentRow>
            <ContentRow>
              <CircleContainerIcon color="yellow">
                <Timer size={16} weight="fill" />
              </CircleContainerIcon>
              <div className="content">
                <div>Previsão de entrega</div>
                <div>
                  <strong>20 min - 30 min</strong>
                </div>
              </div>
            </ContentRow>
            <ContentRow>
              <CircleContainerIcon color="yellow-dark">
                <CurrencyDollar size={16} weight="fill" />
              </CircleContainerIcon>
              <div className="content">
                <div>Pagamento na entrega</div>
                <div>
                  <strong>Cartão de Crédito</strong>
                </div>
              </div>
            </ContentRow>
          </div>
        </ContentContainer>
        <img src={entregadorImg} alt="entregador de moto" />
      </SectionContainer>
    </FeedbackContainer>
  )
}
