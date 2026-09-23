import React from 'react'
import Management from './Management/Management'
import PrincipalAndDirector from './PrincipalAndDirector/principal-director'
import VisionAndMission from './VisionMission/Vision-Mission'
import Values from './Values/Values'

const About = () => {
  return (
    <div>
      <Management />
      <PrincipalAndDirector />
      <VisionAndMission />
      <Values />
    </div>
  )
}

export default About
