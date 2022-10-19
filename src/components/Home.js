import "../styles/Home.css";

function Home() {
  const enhanceDesc =
    "No need to failstack to a certain stack. One tap is all you need to reach end game!";

  const dropDesc =
    "Spend less time hitting mobs for long hours just to get treasured items!";

  const accuracyDesc =
    "Sick of missing your targets because of their absurd evasion? With this, they'll be questioning if their evasion is even working at all!";

  return (
    <>
      <h1 className="services">Services</h1>
      <div className="showcase-home">
        {/* Video section is here */}
        <div className="video">
          <iframe
            src="https://www.youtube.com/embed/_lB7H9wXHTY"
            frameBorder={0}
            allowFullScreen
            title="BDO Blessing"
          ></iframe>
        </div>
        {/* Video section ends here */}

        {/* Blessings section is here */}
        <div className="blessings">
          <div className="blessings-flex">
            <div className="icon">
              <img
                className="icon-image"
                alt="enhancement icon"
                src="images/icon-enhance.png"
              />
            </div>
            <div className="desc">
              <h2>100% Enhancing Rate!</h2>
              <p>{enhanceDesc}</p>
            </div>
          </div>
          <div className="blessings-flex">
            <div className="icon">
              <img
                className="icon-image"
                alt="drop rate icon"
                src="images/icon-drop.png"
              />
            </div>
            <div className="desc">
              <h2>100% Drop Rate!</h2>
              <p>{dropDesc}</p>
            </div>
          </div>
          <div className="blessings-flex">
            <div className="icon">
              <img
                className="icon-image"
                alt="accuracy icon"
                src="images/icon-accuracy.png"
              />
            </div>
            <div className="desc">
              <h2>100% Accuracy Rate!</h2>
              <p>{accuracyDesc}</p>
            </div>
          </div>
        </div>
        {/* Blessing section ends here */}
      </div>
    </>
  );
}

export default Home;
