export default function Footer() {
    return (
        <footer className="bg-black py-4">
            {/* Links */}
            <div className="row">
                <div className="col">
                    <ul className="nav justify-content-center py-3">
                        <li className="nav-item">
                            <a
                                className="nav-link px-2 text-light"
                                href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link px-2 text-light"
                                href="#">
                                Features
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link px-2 text-light"
                                href="#">
                                Pricing
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link px-2 text-light"
                                href="#">
                                FAQs
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link px-2 text-light"
                                href="#">
                                Contact Us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link px-2 text-light"
                                href="#">
                                About
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Copyright */}
            <div className="text-center py-3">
                <span className="text-light">© 2025 Company, Inc</span>
            </div>
        </footer>
    )

}