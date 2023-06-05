import { FaCartPlus, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header>
        <div className="nav">
            <div className="brand">Alimama</div>
            <div className="nav-items flex">
                <li className="nav-links">items</li>
                <li className="nav-links">items</li>
                <li className="nav-links">items</li>
                <li className="nav-links">items</li>

                <div className="flex">
                    <FaCartPlus />
                    <FaSearch />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar