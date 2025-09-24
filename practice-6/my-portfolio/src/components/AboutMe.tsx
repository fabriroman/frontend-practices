type AboutMeProps = {
    bio: string;
}

const AboutMe = ({ bio }: AboutMeProps) => {
    return (
        <section className="about-section">
            <h2>About Me</h2>
            <p>{bio}</p>
        </section>
    )
}

export default AboutMe;