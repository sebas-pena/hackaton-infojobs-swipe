'use client'
import { Provider } from 'react-redux'
import { store } from './store'
import Initializer from './Initializer'

export default function Providers ({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Initializer>
        {children}
      </Initializer>
    </Provider>
  )
}
