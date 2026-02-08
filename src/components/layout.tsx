import { Outlet } from 'react-router'
import NavBar from './navBar'
import Footer from './footer'


function Layout() {
    return (
        <div className='mx-auto flex flex-col justify-between align-center'>
            <NavBar />
            <div className='h-100'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout