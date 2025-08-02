import Container from '@/components/Container'
import { MainNav } from '@/components/main-nav'
import React from 'react'

const Layout = ({children}:{children: React.ReactNode}) => {
  return (
    <>
    <div>
        <Container>
            <MainNav/>
        </Container>
    </div>
    {children}
    </>
  )
}

export default Layout
