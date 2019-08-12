import styled from "styled-components"
import React from "react"
import { graphql } from "gatsby"
import pictureOfMyself from "../images/me.jpg"
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 100vh;
  background-image: url(${pictureOfMyself});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
`

const Heading = styled.h1`
  font-size: 10vw;
  color: #c5e4ff;
  mix-blend-mode: difference;
`

const Grid = styled.section`
  width: 75vw;
  display: grid;
  margin: 0 auto;
  grid-template: 1fr 1fr / repeat(auto-fit, 10rem);
  justify-content: space-around;
`

const GridItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30%;
  margin: 1rem 0;
  font-size: 2rem;
  font-weight: bold;
  width: 100%;
  background-color: #c5e4ff;
  color: #732b1a;
  box-sizing: border-box;
  mix-blend-mode: screen;
  transform: perspective(1px) skew(355deg) translateZ(0);
  backface-visibility: hidden;
  border: 10px solid transparent;
  
  &:focus {
    mix-blend-mode: difference;
    border-color: #eebd81;
  }
`

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "//social//" } }) {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            title
            date
            link
            path
          }
          rawMarkdownBody
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const social = data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter)

  return (
    <Container>
      <Heading>Contact me</Heading>
      <Grid>
        {social.map(entry => (
          <GridItem
            key={entry.link}
            href={entry.link}
            target="_blank"
            rel="noopener nofollow"
          >
            {entry.title}
          </GridItem>
        ))}
      </Grid>
    </Container>
  )
}

export default IndexPage
