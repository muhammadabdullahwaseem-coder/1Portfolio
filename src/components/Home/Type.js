import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Autonomous Multi-Agent Systems (CrewAI)",
          "Production RAG & Vector Search",
          "Enterprise Web & Mobile Architectures",
          "Full-Stack Developer (AI-Integrated)"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
        delay: 45,
        pauseFor: 2500,
        cursor: "|",
      }}
    />
  );
}

export default Type;
