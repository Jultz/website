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
import writing from "../images/writing.jpeg"
//import grad from "../images/grad.jpeg"
import hustle from "../images/hustle.jpeg"
import strategy from "../images/strategy.jpeg"
import buero from "../images/buero.jpeg"
import boss from "../images/boss.jpeg"
import img from "../images/JJBW.jpg"
import Carousel from "nuka-carousel"

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

    <Carousel>
      <img src={hustle} />
      <img src={boss} />
      <img src={strategy} />
      <img src={buero} />
      <img src={writing} />
    </Carousel>
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
