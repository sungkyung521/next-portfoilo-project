import '../styles/globals.css'
import '../styles/portfolio.css'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {

  return(
    <ThemeProvider attribute="class">
      <Component {...pageProps}/>
    </ThemeProvider>
    
  );  
}
