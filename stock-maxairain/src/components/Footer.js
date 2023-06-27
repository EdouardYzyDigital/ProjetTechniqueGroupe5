const Footer = () => {
    return (
        <footer className="bg-dark text-dark px-3 py-3 fixed-bottom">
            <div className="text-light text-center mb-2">
                <small>&copy; {new Date().getFullYear()} MaxAirain, Tous droits réservés</small>
            </div>
        </footer>
    );
}

export default Footer;