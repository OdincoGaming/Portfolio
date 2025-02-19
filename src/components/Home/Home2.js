import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            <span className="purple"> Who </span> Am I
            </h1>
            <p className="home-about-body">
              I am a passionate programmer, designer, and writer. At an early age I taught 
              myself Papyrus Script to make mods for The Elder Scrolls III: Morrowind.
              A hobby that led me to Unity and C# which in turn led me to pursue an education in Computer Science
              and eventually into a career that started designing training simulators for the Navy.
              <br />
              <br />I am proficient in a number of languages; such as, 
              <i>
                <b className="purple"> C++, Javascript, Python, and; most fluently, C#. </b>
              </i>
              <br />
              <br />
              My passions are &nbsp;
              <i>
                <b className="purple">Game Development and Design</b> and the opportunities that provides to 
                tell stories and craft experiences.{" "}
                <b className="purple">
                  Video games are the ultimate form of art.
                </b>
              </i>
              <br />
              <br />
              I also enjoy experimenting with other kinds of projects such as my
              <b className="purple"> Stock Analysis Neural Network and Trading AI</b> or writing
              <i>
                <b className="purple">
                  {" "}
                  Novels and short stories.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/odincogaming"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/frederick-lyle/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
