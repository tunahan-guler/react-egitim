import { ApolloProvider } from '@apollo/client'
import { Suspense } from 'react'
import { Provider } from 'react-redux'
import { client } from './ApolloClient'
import Router from './Router/Router'
import { store } from './store/store'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Suspense fallback={<div>LOADING</div>}>
          <Router />
        </Suspense>
      </Provider>
    </ApolloProvider>
  )
}

export default App