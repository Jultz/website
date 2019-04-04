import React from "react"
import { Flex, Box } from "rebass"
import { H1, H3, P } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"

const ImprintPage = () => (
  <Layout>
    <SEO title="Imprint" />
    <Section>
      <H1>Imprint</H1>
      <RespGrid min={"240px"}>
        <Box>
          <H3>Responsible</H3>
          <P>
            Julia Janssen
            <br />
            {"Hardefußtstraße,1"}
            <br />
            {"juliakimjanssen@hotmail.com"}
          </P>
        </Box>
        <Box>
          <H3>Credits</H3>
          <P>Ulrich Anders</P>
          <P>Cologne Business School (CBS)</P>
        </Box>
      </RespGrid>
    </Section>
  </Layout>
)

export default ImprintPage
