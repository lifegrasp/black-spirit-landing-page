import "../styles/About.css";

function About() {
  const descAbout =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue est in fermentum aliquet. Donec tempus tempor urna, vel rutrum quam maximus vel. Cras eleifend rhoncus risus quis rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In sed suscipit nunc. Duis semper eget ex vitae bibendum. Proin convallis mollis leo, in congue felis bibendum quis. Duis condimentum molestie magna, et fringilla nunc fermentum vel. Cras sodales neque ut tincidunt condimentum. Phasellus lobortis ligula elit, eget imperdiet libero varius et.";

  return (
    <>
      <h1 className="information">Information</h1>
      <div className="showcase-about">
        <h2>Purpose</h2>
        <p>{descAbout}</p>
      </div>
    </>
  );
}

export default About;
