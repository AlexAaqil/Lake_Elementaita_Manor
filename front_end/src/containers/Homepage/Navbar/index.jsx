import './navbar.css'

export default function Navbar() {
  return (
    <header>
        <nav>
            <div className="logo">
                <a href="#hero">Lake Elemenentaita Manor</a>
            </div>
            <ul className="nav_links">                
                <li><a href="#About">About</a></li>
                <li><a href="#Gallery">Gallery</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}
