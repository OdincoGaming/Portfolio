import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Howdy howdy, my name is <span className="purple"> Frederick Lyle </span>
            <br />
            I am currently employed as a Senior Unity Developer at Katmai Government Services
            creating realtime 3D training simulators for the Navy.
            <br />
            I have been using Unity since 2011 and have worked on a variety of projects
            outside of game development. Projects like my AI powered stock trading bot or a completely automated meme page on Facebook.
            <br />
            <br />
            I also enjoy
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing, Making, and Studying Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Experimenting with AI, Machine Learning, and Neural Networks
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Fantasy Novels, Short Stories, and Poetry
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching GDC, Unite, and TED Talks
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking, Kayaking, and Searching for Rare Plants
            </li>
          </ul>

          <p style={{ color: "#f7c5a6" }}>
            "I came to write code and push commits, and I'm all out of commits."{" "}
          </p>
          <footer className="blockquote-footer">Frederick</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
