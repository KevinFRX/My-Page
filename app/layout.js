import "../styles/globals.css"

import { Header } from "./components/header"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Welcome!</title>
      </head>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}
