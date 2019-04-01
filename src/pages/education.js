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
      <H1>Education</H1>
      <RespGrid min={"240px"}>
        <Box>
          <H3>CBS</H3>
        </Box>
        <Box>
          <H4>
            MA International Business. Specialisation: Marketing Management
          </H4>
          <P>September 2018 - present</P>
        </Box>
      </RespGrid>
      <RespGrid min={"240px"}>
        <Box>
          <H3>CBS</H3>
        </Box>
        <Box>
          <H4>
            BA International Culture & Management. Specialisation:
            Cross-cultural Management
          </H4>
          <P>September 2014 - August 2017</P>
        </Box>
      </RespGrid>
      <RespGrid min={"240px"}>
        <Box>
          <H3>National Chengchi University, Taiwan</H3>
        </Box>
        <Box>
          <H4>Semester abroad</H4>
          <P>September 2016 - January 2017</P>
        </Box>
      </RespGrid>
      <RespGrid min={"240px"}>
        <Box>
          <H3>Maastricht University</H3>
        </Box>
        <Box>
          <H4>BSc Economics & Business Economics</H4>
          <P>September 2013 - June 2014</P>
          <P>Not completed</P>
        </Box>
      </RespGrid>
      <RespGrid min={"240px"}>
        <Box>
          <H3>Lycée de Garçons Luxembourg (LGL)</H3>
        </Box>
        <Box>
          <H4>Highschol</H4>
          <P>September 2005 - July 2013</P>
          <P>Specialisation: Social Sciences</P>
        </Box>
      </RespGrid>
    </Section>
  </Layout>
)

export default ImprintPage
