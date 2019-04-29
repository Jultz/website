import React from "react"
import { Flex, Box } from "rebass"
import { H1, H3, H4, P } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"
import hats from "../images/hats.jpeg"
import studying from "../images/studying.jpeg"
import taipei from "../images/taipei.jpeg"
import lgl from "../images/lgl.jpeg"
import books from "../images/books.jpeg"

const ImprintPage = () => (
  <Layout>
    <SEO title="Imprint" />
    <Section>
      <H1>Education</H1>
      <RespGrid min={"240px"}>
        <div>
          <H3>Cologne Business School</H3>

          <img id="profileleft" src={hats} />
        </div>
        <div>
          <H4>
            <br />
            <br />
            MA International Business. Specialization: Marketing Management
          </H4>
          <P>September 2018 - present</P>
        </div>
      </RespGrid>
      <RespGrid min={"240px"}>
        <div>
          <H3>Cologne Business School</H3>
          <img id="profileleft" src={studying} />
        </div>
        <Box>
          <H4>
            <br />
            <br />
            <br />
            BA International Culture & Management. Specialization:
            Cross-cultural Management
          </H4>
          <P>September 2014 - August 2017</P>
        </Box>
      </RespGrid>
      <RespGrid min={"240px"}>
        <div>
          <H3>National Chengchi University, Taiwan</H3>
          <img id="profileleft" src={taipei} />
        </div>
        <Box>
          <br />
          <br />
          <br />
          <H4>Semester abroad</H4>
          <P>September 2016 - January 2017</P>
        </Box>
      </RespGrid>
      <RespGrid min={"240px"}>
        <div>
          <H3>Maastricht University</H3>
          <img id="profileleft" src={books} />
        </div>
        <Box>
          <H4>
            <br />
            <br />
            BSc Economics & Business Economics
          </H4>
          <P>September 2013 - June 2014</P>
          <P>Not completed</P>
        </Box>
      </RespGrid>
      <RespGrid min={"240px"}>
        <div>
          <H3>Lycée de Garçons Luxembourg (LGL)</H3>
          <img id="profileleft" src={lgl} />
        </div>
        <Box>
          <H4>
            <br />
            <br />
            <br />
            <br />
            Highschool
          </H4>
          <P>September 2005 - July 2013</P>
          <P>Specialisation: Social Sciences</P>
        </Box>
      </RespGrid>
    </Section>
  </Layout>
)

export default ImprintPage
