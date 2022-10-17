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
        <div className="blessings">
          <div className="blessings-flex">
            <div className="icon">ICON HERE</div>
            <div className="desc">
              <h2>Blessing Title</h2>
              <p>Blessing description here</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
