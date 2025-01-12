import { Outlet } from 'react-router'
import { Header } from './Header'
import { Container } from './Container'
import { Main } from './Main'
import { Footer } from './Footer'
import { Offcanvas } from './Offcanvas'
import '../styles/layout.scss'

export function Layout() {
  return (
    <div className="layout d-flex flex-column bg-dark">
      <Offcanvas />
      <Header />
      <Container>
        <Main>
          <Outlet />
        </Main>
      </Container>
      <Footer />
    </div>
  )
}