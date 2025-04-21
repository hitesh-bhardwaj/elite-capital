import React from 'react'
import Header from './Header'
import Footer from './Footer'
import NewHeader from './NewHeader'


const Layout = ({children}) => {
  return (
   <>
   <Header/>
   {/* <NewHeader/> */}
   <main>
    {children}
   </main>
   <Footer/>
   </>
  )
}

export default Layout
