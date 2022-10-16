import "../styles/Home.css";

function Home() {
  return (
    <>
      <h1>Services</h1>
      <div className="showcase">
        <div className="video">
          <iframe
            src="https://www.youtube.com/embed/_lB7H9wXHTY"
            frameBorder={0}
            allowFullScreen
            title="BDO Blessing"
          ></iframe>
        </div>
        <div className="description">Services here</div>
      </div>
    </>
  );
}

export default Home;
