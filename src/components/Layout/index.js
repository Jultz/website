import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import CookieConsent from "react-cookie-consent"
import "./styled/layout.css"
import { ThemeProvider } from "styled-components"
import { Flex } from "rebass"
import "typeface-montserrat"
//import "typeface-dosis"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { library } from "@fortawesome/fontawesome-svg-core"
import {
  fab,
  faFacebookSquare,
  faTwitterSquare,
  faLinkedin,
  faInstagram,
  faXing,
} from "@fortawesome/free-brands-svg-icons"
import { faPeace, faCoffee, faYinYang } from "@fortawesome/free-solid-svg-icons"

import theme from "../../theme"
import Container from "../Container"
import Header from "../Header"
import Logo from "../Logo"
import Main from "../Main"
import Footer from "../Footer"
import Menu from "../Menu"
import MenuItem from "../MenuItem"
//import imgLogo from "../../images/logoUA.png"
import imgLogo from "../../images/JJLogo.png"
import "typeface-ubuntu"

library.add(
  fab,
  faCoffee,
  faPeace,
  faYinYang,
  faTwitterSquare,
  faFacebookSquare,
  faLinkedin,
  faInstagram,
  faXing
)

const Layout = ({ children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            version
          }
        }
      }
    `
  )
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>
          <Logo to="/" text="Julia Janssen" img={imgLogo} />
          <Menu>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/blog/">Blog</MenuItem>
            <MenuItem to="/resources/">Resources</MenuItem>
            <MenuItem to="/about/">About</MenuItem>
            <MenuItem to="/experiences/">Experiences</MenuItem>
            <MenuItem to="/education/">Education</MenuItem>
            <MenuItem to="/skills/">Skills</MenuItem>
            <MenuItem to="/background/">Background</MenuItem>
          </Menu>
        </Header>
        <Main>{children}</Main>
        <Footer>
          <div>© Julia Janssen</div>
          <Flex width={"3rem"} justifyContent="space-between">
            <a
              href="https://www.facebook.com/juliajanssen92"
              target="_blank"
              rel="noopener nofollow"
              padding-right="10px"
            >
              <FontAwesomeIcon icon={["fab", "facebook-square"]} />
            </a>
            <a
              href="https://www.instagram.com/jultz92/"
              target="_blank"
              rel="noopener nofollow"
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
            <a
              href="https://www.linkedin.com/in/julia-janssen-981226aa/"
              target="_blank"
              rel="noopener nofollow"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
            <a
              href="https://www.xing.com/profile/Julia_Janssen25/cv?sc_o=mxb_p"
              target="_blank"
              rel="noopener nofollow"
            >
              <FontAwesomeIcon icon={["fab", "xing"]} />
            </a>
          </Flex>
          <Flex flexDirection="column">
            <span>Version: {site.siteMetadata.version}</span>
            <Link to="/imprint/">Imprint</Link>
            <Link to="/data-protection/">Data Protection</Link>
          </Flex>
        </Footer>
        <CookieConsent
          location="bottom"
          buttonText="I agree"
          cookieName="gsuaCookie"
          style={{ background: "#465A65" }}
          buttonStyle={{ color: "#4e503b", fontSize: "15px" }}
          expires={150}
        >
          By using this website you agree to the application of cookies.
        </CookieConsent>
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
