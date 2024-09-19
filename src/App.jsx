import { Provider } from 'react-redux'
import './App.css'
import AppRoutes from './layout/approutes'
import store from './store/store'

function App() {

  return (
    <>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </>
  )
}

export default App
