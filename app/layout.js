import '../styles/globals.css'
import { Header } from './components/header'
import { font } from './font.js'

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>Welcome!</title>
      </head>

      <body className={font.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
