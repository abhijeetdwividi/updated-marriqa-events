export default function Navbar() {
    return (
        <>
            <nav id="navbar">
                <a href="/" className="nav-logo">
                    Marriqa <span>Events</span>
                </a>

                <ul className="nav-links">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/services">Services</a>
                    </li>
                    <li>
                        <a href="/destination-weddings">Destinations</a>
                    </li>
                    <li>
                        <a href="/venues">Venues</a>
                    </li>
                    <li>
                        <a href="/portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="/packages">Packages</a>
                    </li>
                    <li>
                        <a href="/blogs">Blogs</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>

                <a href="/contact" className="nav-cta">
                    Book Consultation
                </a>

                <button
                    type="button"
                    className="hamburger"
                    id="hamburger"
                    aria-label="Open navigation menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>

            <div className="mobile-menu" id="mobileMenu">
                <button
                    type="button"
                    className="menu-close"
                    id="menuClose"
                    aria-label="Close navigation menu"
                >
                    ✕
                </button>

                <a href="/" className="mobile-link">
                    Home
                </a>
                <a href="/services" className="mobile-link">
                    Services
                </a>
                <a href="/destination-weddings" className="mobile-link">
                    Destinations
                </a>
                <a href="/venues" className="mobile-link">
                    Venues
                </a>
                <a href="/portfolio" className="mobile-link">
                    Portfolio
                </a>
                <a href="/packages" className="mobile-link">
                    Packages
                </a>
                <a href="/blogs" className="mobile-link">
                    Blogs
                </a>
                <a href="/contact" className="mobile-link">
                    Contact
                </a>
            </div>
        </>
    );
}
