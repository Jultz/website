import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import Figure from "../components/Figure"
import { H1, P } from "../components/VerticalRhythm"
import breakpoints from "../theme/breakpoints"
import img03_4x1 from "../images/1920/4x1/03.jpeg"
import img03_21x9 from "../images/1440/21x9/03.jpeg"
import img03_16x9 from "../images/1200/16x9/03.jpeg"
import img03_3x2 from "../images/0800/3x2/03.jpeg"
import img03_4x3 from "../images/0480/4x3/03.jpeg"
import writing from "../images/writing.jpeg"
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
        `Janssen`,
      ]}
    />
    <Figure caption="Photo by Lost Co on Unsplash">
      <picture>
        <source srcSet={img03_4x1} media={`(min-width: ${breakpoints.xl})`} />
        <source srcSet={img03_21x9} media={`(min-width: ${breakpoints.lg})`} />
        <source srcSet={img03_16x9} media={`(min-width: ${breakpoints.md})`} />
        <img src={img03_4x3} alt="Hustle" />
      </picture>
    </Figure>

    <Section>
      <div>
        <img id="profileright" src={img} />
        <H1>Hello,</H1>
        <P>Welcome to my page! </P>
        <P>
          My name is Julia Janssen. I am a Master student at Cologne Business
          School (CBS), studying International Business with a specialization in
          Marketing Management.
        </P>
        <P>
          This website is a resume of my educational and professional
          background.{" "}
        </P>
        <P>
          Enjoy exploring and feel free to contact me over the social media
          channels listed below.
        </P>
      </div>
    </Section>
  </Layout>
)

export default IndexPage
