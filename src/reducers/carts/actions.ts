import { Cart, Request } from './reducer'

export enum ActionTypes {
  ADD_ITEM_CAFFEE = 'ADD_ITEM_CAFFEE',
  DEL_ITEM_CAFFEE = 'DEL_ITEM_CAFFEE',
  CONFIRM_ITEMS = 'CONFIRM_ITEMS',
}

export function addItemCaffee(cart: Cart) {
  return {
    type: ActionTypes.ADD_ITEM_CAFFEE,
    payload: {
      cart,
    },
  }
}

export function delItemCaffee(cart: Cart) {
  return {
    type: ActionTypes.DEL_ITEM_CAFFEE,
    payload: {
      cart,
    },
  }
}
export function confirmItems(request: Request) {
  return {
    type: ActionTypes.CONFIRM_ITEMS,
    payload: {
      request,
    },
  }
}
