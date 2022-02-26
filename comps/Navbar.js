import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='navbar container justify-content-between navbar-expand navbar-dark pt-0'>
                <a className='navbar-brand fs-1 ff-custom'>DM</a>
                <ul className='navbar-nav'>
                    <li className='nav-item'><Link href="/"><a className='nav-link active'>Inicio</a></Link></li>
                    <li className='nav-item'><Link href="/services"><a className='nav-link'>Servicios</a></Link></li>
                    <li className='nav-item'><Link href="/works"><a className='nav-link'>Portafolio</a></Link></li>
                    <li className='nav-item'><Link href="/contact"><a className='nav-link'>Cont&aacute;cto</a></Link></li>
                </ul>
        </nav>
    );
}
 
export default Navbar;