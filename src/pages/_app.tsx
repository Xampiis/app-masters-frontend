import type { AppProps } from 'next/app'
import { UserForm } from '../components/UserForm';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <UserForm />
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
