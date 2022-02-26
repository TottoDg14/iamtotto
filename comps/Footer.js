const Footer = () => {
    return (
        <footer>
            <div className="container h-100 d-flex">
                <div className="row w-100">
                    <div className="col-md-6 d-flex align-items-center">
                        <span className="text-muted">© 2022 - Made by Totto</span>
                    </div>

                    <ul className="nav col-md-6 align-items-center justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a className="text-muted" href="#">TW</a></li>
                        <li className="ms-3"><a className="text-muted" href="#">IG</a></li>
                        <li className="ms-3"><a className="text-muted" href="#">FB</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;