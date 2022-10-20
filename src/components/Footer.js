import "../styles/Footer.css";

function Footer() {
  const disclaimer =
    "This project is made to display and hone my web development skills. None of the services offered here are real.";
  return (
    <>
      <footer>
        <a
          href="https://github.com/lifegrasp/black-spirit-landing-page"
          target={"_blank"}
        >
          <img alt="GitHub logo" src="/images/GitHub_logo.png" />
        </a>
        <h3>{disclaimer}</h3>
      </footer>
    </>
  );
}

export default Footer;
