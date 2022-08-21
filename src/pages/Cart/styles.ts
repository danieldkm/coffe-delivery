import styled from 'styled-components'

export const ArticleContainer = styled.article`
  top: 9.25rem;
  position: relative;
  width: 70rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.6;
  }

  h2 {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }

  @media (max-width: 1100px) {
    width: 100%;
    flex-direction: column;
    gap: 12px;
  }
`
export const SectionsContainer = styled.div`
  text-align: left;

  display: flex;
  gap: 12px;
  flex-direction: column;
`
interface DescriptionContentProps {
  color: string
}

export const DescriptionContent = styled.div<DescriptionContentProps>`
  height: 44px;
  display: flex;
  gap: 12px;

  & svg {
    color: ${(props) =>
      props.color === 'orange'
        ? props.theme['yellow-dark']
        : props.theme.purple};
  }

  & div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 7px;

    & h1 {
      line-height: 1;
    }
  }
`

export const FormContainer = styled.section`
  width: 40rem;
  height: 23.25rem;
  background: ${(props) => props.theme['base-card']};
  padding: 40px;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  & form {
    width: 560px;
    display: grid;
    grid-template-columns: repeat(6, 83.344px);
    grid-template-areas:
      'cep cep cep cep cep cep'
      'rua rua rua rua rua rua'
      'numero numero complemento complemento complemento complemento'
      'bairro bairro cidade cidade cidade uf';
    row-gap: 16px;
    column-gap: 12px;

    & input {
      background: ${(props) => props.theme['base-input']};
      border: 1px solid ${(props) => props.theme['base-button']};
      padding: 12px;
      border-radius: 4px;
      height: 42px;
    }

    & .cep {
      grid-area: cep;
      width: 200px;
    }

    & .rua {
      grid-area: rua;
    }

    & .numero {
      grid-area: numero;
    }

    & .complemento {
      grid-area: complemento;
    }

    & .bairro {
      grid-area: bairro;
    }

    & .cidade {
      grid-area: cidade;
    }

    & .uf {
      grid-area: uf;
    }
  }
`

interface InputComponentContainerProps {
  show: boolean
}
export const InputComponentContainer = styled.div<InputComponentContainerProps>`
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & input {
    border: none;
    flex: 1;
  }

  ::after {
    display: ${(props) => (props.show ? 'block' : 'none')};
    width: 0;
    content: 'Opcional';
    font-style: italic;
    position: relative;
    color: ${(props) => props.theme['base-label']};
    right: 72px;
  }
`

export const PaymentOptionsContainer = styled.section`
  width: 40rem;
  height: 12.9375rem;
  background: ${(props) => props.theme['base-card']};
  padding: 40px;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  & .selectContainer {
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }
`

interface SelectPaymentProps {
  selected: boolean
}
export const SelectPayment = styled.button<SelectPaymentProps>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  padding: 16px;
  border-radius: 6px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  background: ${(props) =>
    props.selected ? props.theme['purple-light'] : props.theme['base-button']};

  border: ${(props) =>
    props.selected ? `1px solid ${props.theme.purple}` : 'none'};

  & svg {
    color: ${(props) => props.theme.purple};
  }
`

export const AsidesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const AsideContentContainer = styled.aside`
  width: 28rem;
  /* height: 31.125rem; */
  background: ${(props) => props.theme['base-card']};
  padding: 40px;
  border-radius: 6px 44px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  gap: 24px;

  & hr {
    width: 100%;
    border: 1px solid ${(props) => props.theme['base-button']};
  }
`

export const ConfirmButton = styled.button`
  width: 100%;
  height: 46px;
  border-radius: 6px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 0.875rem;
  border: 0;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background 0.2s;

  &:link {
    text-decoration: none;
  }

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`

export const TotalizationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  & div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & h2 {
      color: ${(props) => props.theme['base-text']};
    }

    & h1 {
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1.5;
    }
  }
`
