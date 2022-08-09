import { RiAccountCircleLine } from 'react-icons/ri';
import Link from 'next/link';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-md bg-light">
            <div className="container-fluid">
                <Link href="/home">
                    <a className="navbar-brand">Navbar</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/home">
                                <a className="nav-link active" aria-current="page">Գլխավոր</a>
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Փնտրել․․․" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <RiAccountCircleLine />
                </div>
            </div>
        </nav>
    )
}

export default Header;