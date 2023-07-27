import meter1 from "../assets/img/meter1.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>“Great web design without functionality is like a sports car<br></br>with no engine."</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter3} alt="Imag" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Imag" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Imag" />
                                <h5>Next</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Imag" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Imag" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Imag" />
                                <h5>Material Ui</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Imag" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Imag" />
                                <h5>Tailwind</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Imag" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Imag" />
                                <h5>GitHub</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Imag" />
                                <h5>WordPress</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Imag" />
                                <h5>Agile</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Imag" />
    </section>
  )
}
