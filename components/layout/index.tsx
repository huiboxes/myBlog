import { NextPage } from "next"
import Navbar from "components/Navbar"
import Footer from "components/Footer"
import * as React from "react"

interface LayoutRrops {
  children: React.ReactNode;
}

const Layout: NextPage<LayoutRrops> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
