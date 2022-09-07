import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import amarya from "../assets/img/amarya.png";
import music from "../assets/img/music.png";
import portfolio from "../assets/img/Portfolio-web-app-ss.png";
import myportfolio from "../assets/img/my-portfolio.png";
import uno from "../assets/img/uno.png";
import netflix from "../assets/img/Netflix.png";
import spotify from "../assets/img/spotify.png";
import amazon from "../assets/img/amazon.png";
import food from "../assets/img/food.png";
import gym from "../assets/img/gym.png";
import flipkart from "../assets/img/flipkart.png";
import spotifyy from "../assets/img/spotify-basic.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      url: "https://melodious-pothos-9e05e9.netlify.app/",
      title: "Amarya Store",
      description: "Ecommerce Web-app",
      imgUrl: amarya,
    },
    {
      url: "https://glittering-kheer-18133a.netlify.app/",
      title: "Go Music",
      description: "Music Portfolio Web-app",
      imgUrl: music,
    },
    {
      url: "https://enchanting-rabanadas-7527eb.netlify.app/",
      title: "Freelance Portfolio",
      description: "Portfolio for Freelancers",
      imgUrl: portfolio,
    },
    {
      title: "My Portfolio",
      description: "Working profession Portfolio",
      imgUrl: myportfolio,
    },
    {
      title: "UNO Game",
      description: "Multiplayer UNO game for 2 players",
      imgUrl: uno,
    },
    {
      url: "https://incomparable-platypus-6fca18.netlify.app/",
      title: "Netflix",
      description: "Exact Clone of Netflix Web-app",
      imgUrl: netflix,
    },
    {
      url: "https://calm-lily-c56dd0.netlify.app/",
      title: "Spotify",
      description: "Clone Web-app of Spotify",
      imgUrl: spotify,
    },
    {
      title: "Amazon",
      description: "Web-app Clone of Amazon.com",
      imgUrl: amazon,
    },
    {
      title: "Lo Kha lo",
      description: "Basic website of food ordering",
      imgUrl: food,
    },
    {
      title: "My Gym",
      description: "Basic website of gym details & form",
      imgUrl: gym,
    },
    {
      title: "Flipkart",
      description: "Flipkart Clone by using HTML & CSS",
      imgUrl: flipkart,
    },
    {
      title: "Spotify",
      description: "Spotify website where you can listen songs",
      imgUrl: spotifyy,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>“There are three responses to a piece of design — yes, no, and WOW!<br></br>Wow is the one to aim for.”</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.slice(0,5).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                    {
                          projects.slice(5,8).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                      {
                          projects.slice(8,projects.length).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
