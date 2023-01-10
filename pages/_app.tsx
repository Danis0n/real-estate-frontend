import type { AppProps } from 'next/app'
import {Provider} from "react-redux";
import {persistor, store} from "../app/store/store";
import '../styles/globals.css'
import AuthProvider from "../app/provider/AuthProvider";
import {TypeComponentAuthFields} from "../app/provider/private-route.interface";
import {PersistGate} from "redux-persist/integration/react";

type TypeAppProps = AppProps & TypeComponentAuthFields;

export default function App({ Component, pageProps }: TypeAppProps) {
  return (
      <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
              <AuthProvider Component={Component}>
                    <Component {...pageProps} />
              </AuthProvider>
          </PersistGate>
      </Provider>
  )
}
