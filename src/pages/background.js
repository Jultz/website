import React from "react"
import { Flex, Box } from "rebass"
import { H1, H3, P } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"
import Background from "../components/Background"

const Backgroundpage = () => (
  <Layout>
    <SEO title="background" />
    <Background>
      <Section>
        <H1>hallo</H1>
      </Section>
    </Background>
  </Layout>
)

export default Backgroundpage
