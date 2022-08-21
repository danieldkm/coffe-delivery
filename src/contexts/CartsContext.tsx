import { differenceInSeconds } from 'date-fns'
import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import {
  ActionTypes,
  addItemCaffee,
  delItemCaffee,
  confirmItems,
} from '../reducers/carts/actions'
import { Cart, cartsReducer, Request } from '../reducers/carts/reducer'

interface CartsContextType {
  carts: Cart[]
}
export const CartsContext = createContext({} as CartsContextType)

interface CartsContextProviderProps {
  children: ReactNode
}

localStorage.setItem(
  '@coffee-delivery:carts-state-1.0.0',
  JSON.stringify({ carts: [] }),
)

localStorage.setItem(
  '@coffee-delivery:requests-state-1.0.0',
  JSON.stringify({ requests: [] }),
)

export function CartsContextProvider({ children }: CartsContextProviderProps) {
  const [cartsState, dispatch] = useReducer(
    cartsReducer,
    {
      carts: [],
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:carts-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
      return []
    },
  )

  const { carts } = cartsState

  useEffect(() => {
    const stateJSON = JSON.stringify(cartsState)
    localStorage.setItem('@coffee-delivery:carts-state-1.0.0', stateJSON)
  }, [cartsState])

  function addCoffeeCart(data: Cart) {
    const id = String(new Date().getTime())
    dispatch(addItemCaffee(data))
  }

  function removeCoffeeCart(data: Cart) {
    dispatch(delItemCaffee(data))
  }

  function confirmRequest(request: Request) {
    dispatch(confirmItems(request))

    const storedState = localStorage.getItem(
      '@coffee-delivery:requests-state-1.0.0',
    )
    if (storedState) {
      const data = JSON.parse(storedState)
      data.requests.push(request)

      localStorage.setItem(
        '@coffee-delivery:requests-state-1.0.0',
        JSON.stringify(data),
      )
    }
  }

  return (
    <CartsContext.Provider
      value={{
        carts,
        addCoffeeCart,
        removeCoffeeCart,
        confirmRequest,
      }}
    >
      {children}
    </CartsContext.Provider>
  )
}
