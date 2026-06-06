export default function Navbar() {
    return (
        <>
            <nav id="navbar">
                <a href="#hero" className="nav-logo">
                    Marriqa <span>Events</span>
                </a>

                <ul className="nav-links">
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#gallery">Portfolio</a>
                    </li>
                    <li>
                        <a href="#testimonials">Stories</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>

                <a href="#contact" className="nav-cta">
                    Book Consultation
                </a>

                <div className="hamburger" id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>

            <div className="mobile-menu" id="mobileMenu">
                <button className="menu-close" id="menuClose">
                    ✕
                </button>

                <a href="#about" className="mobile-link">
                    About
                </a>
                <a href="#services" className="mobile-link">
                    Services
                </a>
                <a href="#gallery" className="mobile-link">
                    Portfolio
                </a>
                <a href="#testimonials" className="mobile-link">
                    Stories
                </a>
                <a href="#contact" className="mobile-link">
                    Contact
                </a>

                <a
                    href="#contact"
                    className="btn-primary"
                    style={{ fontSize: "0.72rem" }}
                >
                    Book Consultation
                </a>
            </div>
        </>
    );
}
