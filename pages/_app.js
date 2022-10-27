import { AxiosInstanceProvider } from '../context/context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    
    <AxiosInstanceProvider
        config={{ baseURL: "https://5e4f6bd143b2b200142a36de.mockapi.io/" }}>
        <Component {...pageProps} />
     </AxiosInstanceProvider>
  
  )
}

export default MyApp
