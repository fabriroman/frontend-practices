type FooterProps = {
    email?: string;
    message?: string;
}


const Footer = ({ email, message }: FooterProps) => {
    return (
        <footer className="footer">
            <p>{message}</p>
            <p>{email}</p>
        </footer>
    )
}

export default Footer;