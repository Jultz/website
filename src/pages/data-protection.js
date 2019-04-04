import React from "react"
import { Flex, Box } from "rebass"
import { H1, H3, P } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"

const DataProtectionPage = () => (
  <Layout>
    <SEO title="Data Protection" />
    <Section>
      <p />
      <h1>Disclaimer</h1>

      <p>Last updated: April 04, 2019</p>

      <p>
        The information contained on https://juliajanssen.netlify.com/ website
        (the "Service") is for general information purposes only.
      </p>

      <p>
        Julia Janssen assumes no responsibility for errors or omissions in the
        contents on the Service.
      </p>

      <p>
        In no event shall Julia Janssen be liable for any special, direct,
        indirect, consequential, or incidental damages or any damages
        whatsoever, whether in an action of contract, negligence or other tort,
        arising out of or in connection with the use of the Service or the
        contents of the Service. Julia Janssen reserves the right to make
        additions, deletions, or modification to the contents on the Service at
        any time without prior notice. This Disclaimer for Julia Janssen has
        been created with the help of{" "}
        <a href="https://termsfeed.com/disclaimer/generator/">
          TermsFeed Disclaimer Generator
        </a>
        .
      </p>

      <p>
        Julia Janssen does not warrant that the website is free of viruses or
        other harmful components.
      </p>

      <h2>External links disclaimer</h2>

      <p>
        https://juliajanssen.netlify.com/ website may contain links to external
        websites that are not provided or maintained by or in any way affiliated
        with Julia Janssen
      </p>

      <p>
        Please note that the Julia Janssen does not guarantee the accuracy,
        relevance, timeliness, or completeness of any information on these
        external websites.
      </p>
    </Section>
  </Layout>
)

export default DataProtectionPage
