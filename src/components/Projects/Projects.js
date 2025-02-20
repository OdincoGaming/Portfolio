import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import botornotsquash from "../../Assets/Projects/botornotsquash.jpg";
import boxing from "../../Assets/Projects/AsciiBoxing.png";
import bluesbus from "../../Assets/Projects/BluesBus.png";
import publictransportation from "../../Assets/Projects/PublicTransportation.png";
import stockbot from "../../Assets/Projects/stockbot.jpg";
import flowerproject from "../../Assets/Projects/FlowerProject.png";
import scriptableweapons from "../../Assets/Projects/ScriptableWeapons.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Projects</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={publictransportation}
              isBlog={false}
              title="Public Transportation"
              description="A game meant to evoke the horror of the New York City subway system. The maze generation algorithm is my own and inspired by Conway's Game of Life and it's simple rules for cells."
              ghLink="https://github.com/OdincoGaming/PublicTransportation"
              demoLink="https://github.com/OdincoGaming/PublicTransportation/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flowerproject}
              isBlog={false}
              title="The Flower Project"
              description="A prototype casual decoration game designed as an effort to contribute to climate change. It's meant to encourage people to have more plants in their house and yards."
              ghLink="https://github.com/OdincoGaming/FlowerProject"
              demoLink="https://odincogaming.github.io/FlowerProject/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bluesbus}
              isBlog={false}
              title="Blues Bus"
              description="An endless drive through a rainy city. Mostly a showcase of the rain on glass shader I wrote for it. Inspired by the now defunct Rainymoods.com."
              ghLink="https://github.com/OdincoGaming/BluesBus"
              demoLink="https://odincogaming.github.io/BluesBus/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stockbot}
              isBlog={false}
              title="StockBot"
              description="My first neural network written from scratch. I cleaned and prepared 20 years of data on 2000 companies. It uses rollinger bands, Time and Date, Exponential moving Averages, and a little bit of Dollaar Cost Averaging to make its decisions."
              ghLink="https://github.com/OdincoGaming/StockBot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scriptableweapons}
              isBlog={false}
              title="Scriptable Weapons Asset"
              description="I operate under the assumption that programmers make tools so designers can make games. This is one such tool. It utilizes scriptable objects and the Unity inspector to empower designers to create varied and unique weaponry from scratch entirely in the inspector."
              ghLink="https://github.com/OdincoGaming/ScriptableWeaponsAssetExample" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={botornotsquash}
              isBlog={false}
              title="Bot or Not Squash"
              description="A fully automated Facebook meme page that generated posts with my own custom GPT2 model trained on Reddit. Scheduled Bash scripts ran every 24 hours to generate and post fresh, relevant content."
              ghLink="https://github.com/OdincoGaming/Text-Posting"
             // demoLink="https://github.com/OdincoGaming/Text-Posting"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={boxing}
              isBlog={false}
              title="Ascii Boxing"
              description=" Inspired by the games you could get in a happy meal in the early 2000s. My first release on Google Play. Hybrid turn based multiplayer where your speed in choosing a move determines who goes first."
              ghLink="https://github.com/OdincoGaming/AsciiBoxing_Final"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
