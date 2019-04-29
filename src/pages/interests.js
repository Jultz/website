import React from "react"
import { Flex, Box } from "rebass"
import { H1, H3, H4, P } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"
import gym from "../images/gym.jpeg"
import world from "../images/world.jpeg"
import ski from "../images/ski.jpeg"
import marathon from "../images/marathon.jpeg"

const ImprintPage = () => (
  <Layout>
    <SEO title="Imprint" />
    <Section>
      <H1>Hobbies</H1>
      <RespGrid min={"240px"}>
        <div>
          <img id="profileleft" src={world} />
        </div>
      </RespGrid>
      <RespGrid min={"240px"}>
        <div>
          <img id="profileright" src={marathon} />
        </div>
      </RespGrid>
      <RespGrid min={"240px"}>
        <div>
          <img id="profileleft" src={gym} />
        </div>
      </RespGrid>
      <RespGrid min={"240px"}>
        <div>
          <img id="profileright" src={ski} />
        </div>
      </RespGrid>
    </Section>
  </Layout>
)

export default ImprintPage
