import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiCsharp,
  SiUnity,
  SiPython,
  SiTensorflow,
  SiUnrealengine,
  SiCplusplus,
  SiReact,
  SiNodedotjs,
  SiMicrosoftsqlserver,
  SiWebgl
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="C#">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Unity Game Engine">
        <SiUnity />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Unreal Engine">
        <SiUnrealengine />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="C++">
        <SiCplusplus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Tensorflow">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React">
        <SiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node.js">
        <SiNodedotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="SQL">
        <SiMicrosoftsqlserver />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="WebGL">
        <SiWebgl />
      </Col>
    </Row>
  );
}

export default Toolstack;
