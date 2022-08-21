import React, { useState, useContext, useRef } from 'react'

import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'

import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { useNavigate } from 'react-router-dom'

import { CartsContext } from '../../contexts/CartsContext'

import { ItemCart } from './components/ItemCart'

import {
  ArticleContainer,
  SectionsContainer,
  DescriptionContent,
  FormContainer,
  AsidesContainer,
  PaymentOptionsContainer,
  SelectPayment,
  InputComponentContainer,
  AsideContentContainer,
  TotalizationContainer,
  ConfirmButton,
} from './styles'

const addressFormValidationSchema = zod.object({
  cep: zod.string().min(9, 'Informe o CEP'),
  rua: zod.string().min(3, 'Informe a rua'),
  numero: zod.string(),
  complemento: zod.string(),
  bairro: zod.string().min(3, 'Informe o bairro'),
  cidade: zod.string().min(3, 'Informe a cidade'),
  uf: zod.string().min(2, 'Informe a UF').max(2, 'apenas sigla'),
})

type NewAddressFormData = zod.infer<typeof addressFormValidationSchema>

enum paymentTypes {
  credit = 0,
  debit = 1,
  maney = 2,
}
export function Cart() {
  const btnEl = useRef()
  const navigateTo = useNavigate()

  const [selectedPayment, setSelectedPayment] = useState<paymentTypes>(0)

  const { carts, confirmRequest } = useContext(CartsContext)

  const handleSelectPayment = (type: paymentTypes) => {
    setSelectedPayment(type)
  }

  const newAddressForm = useForm<NewAddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
    },
  })

  const { handleSubmit, watch, reset } = newAddressForm

  function handleCreateAddress(data: NewAddressFormData) {
    confirmRequest({
      carts,
      address: data,
    })
    reset()
    navigateTo('/feedback')
  }

  const totalItems = carts?.reduce((prev, curr) => {
    prev += curr.quantity * curr.price
    return prev
  }, 0)
  const total = totalItems === 0 ? 0 : totalItems + 3.5

  return (
    <ArticleContainer>
      <SectionsContainer>
        <h1>Complete seu pedido</h1>
        <FormContainer>
          <DescriptionContent color="orange">
            <MapPinLine size={22} />
            <div>
              <h2>Endereço de Entrega</h2>
              <h3>Informe o endereço onde deseja receber seu pedido</h3>
            </div>
          </DescriptionContent>
          <form onSubmit={handleSubmit(handleCreateAddress)}>
            <FormProvider {...newAddressForm}>
              <input
                id="cep"
                className="cep"
                type="text"
                placeholder="CEP"
                required
                {...newAddressForm.register('cep')}
              />
              <input
                id="rua"
                className="rua"
                type="text"
                placeholder="Rua"
                required
                {...newAddressForm.register('rua')}
              />
              <input
                id="numero"
                className="numero"
                type="text"
                placeholder="Número"
                {...newAddressForm.register('numero')}
              />
              <InputComponentContainer className="complemento" show={true}>
                <input
                  id="complemento"
                  type="text"
                  placeholder="Complemento"
                  {...newAddressForm.register('complemento')}
                />
              </InputComponentContainer>
              <input
                id="bairro"
                className="bairro"
                type="text"
                placeholder="Bairro"
                required
                {...newAddressForm.register('bairro')}
              />
              <input
                id="cidade"
                className="cidade"
                type="text"
                placeholder="Cidade"
                required
                {...newAddressForm.register('cidade')}
              />
              <input
                id="uf"
                className="uf"
                type="text"
                placeholder="UF"
                required
                {...newAddressForm.register('uf')}
              />
              <input ref={btnEl} type="submit" style={{ display: 'none' }} />
            </FormProvider>
          </form>
        </FormContainer>
        <PaymentOptionsContainer>
          <DescriptionContent>
            <CurrencyDollar size={22} />
            <div>
              <h2>Pagamento</h2>
              <h3>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </h3>
            </div>
          </DescriptionContent>
          <div className="selectContainer">
            <SelectPayment
              selected={selectedPayment === 0}
              onClick={() => handleSelectPayment(0)}
            >
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </SelectPayment>
            <SelectPayment
              selected={selectedPayment === 1}
              onClick={() => handleSelectPayment(1)}
            >
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </SelectPayment>
            <SelectPayment
              selected={selectedPayment === 2}
              onClick={() => handleSelectPayment(2)}
            >
              <Money size={16} />
              DINHEIRO
            </SelectPayment>
          </div>
        </PaymentOptionsContainer>
      </SectionsContainer>
      <AsidesContainer>
        <h1>Cafés selecionados</h1>
        <AsideContentContainer>
          {carts?.map((cart) => (
            <React.Fragment key={cart.title}>
              <ItemCart key={cart.title} cart={cart} />
              <hr />
            </React.Fragment>
          ))}
          <TotalizationContainer>
            <div>
              <h3>Total de itens</h3>
              <h2>
                {totalItems
                  ? new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                      minimumFractionDigits: 2,
                    }).format(totalItems)
                  : 'R$ 0'}
              </h2>
            </div>
            <div>
              <h3>Entrega</h3>
              <h2>R$ 3,50</h2>
            </div>
            <div>
              <h1>Total</h1>
              <h1>
                {total
                  ? new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                      minimumFractionDigits: 2,
                    }).format(total)
                  : 'R$ 0'}
              </h1>
            </div>
          </TotalizationContainer>
          <ConfirmButton onClick={() => btnEl.current.click()}>
            CONFIRMAR PEDIDO
          </ConfirmButton>
        </AsideContentContainer>
      </AsidesContainer>
    </ArticleContainer>
  )
}
