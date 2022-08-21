import { produce } from 'immer'

import { ActionTypes } from './actions'

export interface Cart {
  title: string
  subtitle: string
  tags: string[]
  imageUrl: string
  price: number
  quantity: number
}

export interface Request {
  carts: Cart[]
  address: {
    cep: string
    rua: string
    numero: string
    bairro: string
    complemento: string
    cidade: string
    uf: string
  }
}

interface CartsState {
  carts: Cart[]
  requests: Request[]
}

export function cartsReducer(state: CartsState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_CAFFEE:
      return produce(state, (draft) => {
        if (!draft.carts) draft.carts = []

        const index = draft.carts.findIndex(
          (cart) => cart.title === action.payload.cart.title,
        )
        if (index >= 0) {
          draft.carts[index].quantity += action.payload.cart.quantity
        } else {
          draft.carts.push(action.payload.cart)
        }
      })
    case ActionTypes.DEL_ITEM_CAFFEE:
      return produce(state, (draft) => {
        if (draft.carts.length > 0) {
          const index = draft.carts.findIndex(
            (cart) => cart.title === action.payload.cart.title,
          )
          if (index >= 0) {
            draft.carts.splice(index, 1)
          }
        }
      })
    case ActionTypes.CONFIRM_ITEMS:
      return produce(state, (draft) => {
        if (!draft.requests) draft.requests = []

        draft.requests.push(action.payload.request)
      })
    default:
      return state
  }
}
