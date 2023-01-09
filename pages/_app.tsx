import type { AppProps } from 'next/app'
import {Provider} from "react-redux";
import {persistor, store} from "../app/store/store";
import '../styles/globals.css'
import AuthProvider from "../app/provider/AuthProvider";
import {TypeComponentAuthFields} from "../app/provider/private-route.interface";
import {PersistGate} from "redux-persist/integration/react";
import ReduxToastrLib from "react-redux-toastr";

type TypeAppProps = AppProps & TypeComponentAuthFields;

export default function App({ Component, pageProps }: TypeAppProps) {
  return (
      <Provider store={store}>
          <PersistGate persistor={persistor} loading={20}>
              <AuthProvider Component={Component}>
                    <Component {...pageProps} />
                    {/*<ReduxToastrLib*/}
                    {/*    newestOnTop={false}*/}
                    {/*    preventDuplicates*/}
                    {/*    progressBar*/}
                    {/*    closeOnToastrClick*/}
                    {/*    timeOut={4000}*/}
                    {/*    transitionIn={'fadeIn'}*/}
                    {/*    transitionOut={'fadeOut'}*/}
                    {/*/>*/}
              </AuthProvider>
          </PersistGate>
      </Provider>
  )
}
