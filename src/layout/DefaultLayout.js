import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout">
      <div className="header">
        <Header />
      </div>

      <main className="main">{children}</main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  )
}
