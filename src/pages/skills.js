import React from "react"
import { Flex, Box } from "rebass"
import { H1, H3, H4, P } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"

const ImprintPage = () => (
  <Layout>
    <SEO title="Imprint" />
    <Section>
      <H1>Skills & Interests</H1>
      <RespGrid min={"240px"}>
        <Box>
          <H3>Languages</H3>
          <H4>English</H4>
          <p>Fluent</p>
          <H4>German</H4>
          <p>Fluent</p>
          <H4>French</H4>
          <p>Fluent</p>
          <H4>Spanish</H4>
          <p>Basic knowlege</p>
          <H4>Luxembourgish</H4>
          <p>Mothertongue</p>
        </Box>
        <Box>
          <H3>IT Skills</H3>
          <H4>MS Office</H4>
          <H4>SAP</H4>
          <H4>CSR Systems</H4>
          <H4>Javascrip, CSS & HTML</H4>
          <p>basic knowlege</p>
          <H4>HP ALM</H4>
          <p>basic knowlege</p>
        </Box>
      </RespGrid>
    </Section>
  </Layout>
)

export default ImprintPage
