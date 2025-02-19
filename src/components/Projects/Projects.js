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
              description="A game inspired by the horror of the New York City Subway. You're at your stop but the doors are far away and fast closing, yet nobody is getting out of your way. The maze generation is based off of Conway's Game of Life where each cell in the maze has it's own set of rules that determine if it is a walkway or not. I used MakeHuman for the characters. I plan to add more elements like sounds; to increase the creepy factor, as well as more animations and a dynamic moving crowd outside the subway cars to increase immersion."
              ghLink="https://github.com/OdincoGaming/PublicTransportation"
              demoLink="https://github.com/OdincoGaming/PublicTransportation/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flowerproject}
              isBlog={false}
              title="The Flower Project"
              description="A prototype of a casual decoration game designed to encourage people to have more house plants. The kiosks in game would eventually link to real websites selling the corresponding flowers. Contains hidden easter eggs. Optimizing the greenhouse gases, webgl responsive scaling, and inputs for mobile were fun experiments with this one."
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
              description="A stock trading bot that uses the Alpaca API to buy and sell stocks. It decides what to buy and sell using a Neural Network trained on 20 years worth of minute by minute data on over 2000 companies available on NASDAQ. I learned that prices aren't enough. To be truly succesful overtime it would require sentiment analysis, forum scraping, the ability to watch the news, and a slew of other features. However, this was my first Neural Network written completely from scratch and was a wonderful and infuriating learning experience."
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
              description="A bot I made that ran it's own Facebook page. (has since been taken down by Meta as it apparently went against their guidelines) Every morning at 9am it would get the top 10 searches from Yahoo. It would then Google those searches and grab the top 10 results for each and use them to generate prompts for a GPT2 LLM. The model I was using came pre-trained on Plato's 'The Republic' I then further trained it myself for over 25,000 epochs on the top 10,000 comments from the top 10,000 posts on Reddit."
              ghLink="https://github.com/OdincoGaming/Text-Posting"
             // demoLink="https://github.com/OdincoGaming/Text-Posting"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={boxing}
              isBlog={false}
              title="Ascii Boxing"
              description="The first game I released to the Google Play Store. It utilizes a semi-turn based gameplay loop where the length of time you take to make your move determines who goes first. I used Ascii art for the characters as I did not have access to an artist and AI generated art didn't exist yet. This was an eye-opening learning experience about the business side of game development and made me my first $150 as a developer/business owner."
              ghLink="https://github.com/OdincoGaming/AsciiBoxing_Final"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
