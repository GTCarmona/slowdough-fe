import navStyles from '../styles/Navbar.module.css'
import Link from 'next/link'
function NavBar() {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/products">Products</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar
