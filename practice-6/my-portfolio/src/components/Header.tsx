type HeaderProps = {
    name: string;
    tagline: string;
    isStudent: boolean;
}

const Header = ({name, tagline, isStudent}: HeaderProps) => {
    const label = isStudent ? "Student Portfolio" : "Portfolio";
    return (
        <header className="header">
            <p>{label}</p>
            <h1>{name}</h1>
            <p>{tagline}</p>
        </header>
    )
}

export default Header;