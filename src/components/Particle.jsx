import React from 'react'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import ParticleConfig from "./particle-config";
import { loadFull } from "tsparticles";

const Particle = () => {

  return (
    <Particles params={ParticleConfig}></Particles>
  );
}

export default Particle