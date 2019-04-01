import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import Figure from "../components/Figure"
import { H1, P } from "../components/VerticalRhythm"
//import img01_4x1 from "../images/1920/4x1/01.jpg"
//import img01_21x9 from "../images/1440/21x9/01.jpg"
//import img01_16x9 from "../images/1200/16x9/01.jpg"
//import img01_3x2 from "../images/0800/3x2/01.jpg"
//import img01_4x3 from "../images/0480/4x3/01.jpg"
import breakpoints from "../theme/breakpoints"
import img02_4x1 from "../images/1920/4x1/02.jpeg"
import img02_21x9 from "../images/1440/21x9/02.jpeg"
import img02_16x9 from "../images/1200/16x9/02.jpeg"
import img02_3x2 from "../images/0800/3x2/02.jpeg"
import img02_4x3 from "../images/0480/4x3/02.jpeg"
import img from "../images/JJBW.jpg"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `Management`,
        `application`,
        `Marketing`,
        `CBS`,
        `CV`,
        `Candidate`,
      ]}
    />
    <Figure caption="Photo from pexels.com">
      <picture>
        <source srcSet={img02_4x1} media={`(min-width: ${breakpoints.xl})`} />
        <source srcSet={img02_21x9} media={`(min-width: ${breakpoints.lg})`} />
        <source srcSet={img02_16x9} media={`(min-width: ${breakpoints.md})`} />
        <source srcSet={img02_3x2} media={`(min-width: ${breakpoints.sm})`} />
        <img src={img02_4x3} alt="Graduation" />
      </picture>
    </Figure>
    <Section>
      <H1>Hi guys</H1>
      <P>Welcome to my page.</P>
      <P>Now you have the basis to build something great.</P>
      <img id="profileright" src={img} />
      <P>
        Of course, you can also use icons, e.g.{" "}
        <FontAwesomeIcon icon="coffee" />, <FontAwesomeIcon icon="yin-yang" />,{" "}
        <FontAwesomeIcon icon="peace" />.
      </P>
    </Section>
  </Layout>
)

export default IndexPage
