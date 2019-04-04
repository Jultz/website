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
      <H1>Work Experience</H1>
      <RespGrid min={"240px"}>
        <Box>
          <H3>Simon Kucher & Partner</H3>
        </Box>
        <Box>
          <H4>Student Job</H4>
          <P>October 2018 - present</P>
        </Box>
      </RespGrid>
      <RespGrid min={"240px"}>
        <Box>
          <H3>BMW Group</H3>
        </Box>
        <Box>
          <H4>Internship</H4>
          <P>
            March 2018 - July 2018 <br /> Department: Customer Relationship
            Management <br /> Maintenance and optimisation of the website
            www.bmw.de <br />
            Roll out of different CRM features on the website
          </P>
        </Box>
      </RespGrid>
      <RespGrid min={"240px"}>
        <Box>
          <H3>Rodenstock GmbH</H3>
        </Box>
        <Box>
          <H4>Internship</H4>
          <P>
            September 2017 - February 2018 <br />
            Department: Professioanl Marketing
          </P>
        </Box>
      </RespGrid>
      <RespGrid min={"240px"}>
        <Box>
          <H3>KM Individual</H3>
        </Box>
        <Box>
          <H4>Internship</H4>
          <P>July 2016 - August 2016</P>
          <P>
            Design of a new website. <br />
            Communication with international partner agencies.
            <br />
            Layout of travel itineraries.
          </P>
        </Box>
      </RespGrid>
      <RespGrid min={"240px"}>
        <Box>
          <H3>Luxair Group</H3>
        </Box>
        <Box>
          <H4>Summer Student Job</H4>
          <P>August 2015</P>
          <P>
            Administrative support in the ticketing service and direct sales
            department.
          </P>
        </Box>
      </RespGrid>
      <RespGrid min={"240px"}>
        <Box>
          <H3>Office Régional du Tourisme</H3>
        </Box>
        <Box>
          <H4>Summer Student Job</H4>
          <P>July 2015</P>
          <P>
            Administrative support in the national wine museum.
            <br /> Co-hosting events and workshops. Managing bike rentals.
          </P>
        </Box>
      </RespGrid>
      <RespGrid min={"240px"}>
        <Box>
          <H3>STATEC</H3>
        </Box>
        <Box>
          <H4>Summer Student Job</H4>
          <P>July 2011</P>
          <P>Administrative support regarding the national pricing index.</P>
        </Box>
      </RespGrid>
    </Section>
  </Layout>
)

export default ImprintPage
