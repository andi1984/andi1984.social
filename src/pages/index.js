import styled from "styled-components"
import React from "react"
import { graphql } from "gatsby"
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-wrap: wrap;
`
const Grid = styled.section`
  width: 75vw;
  display: grid;
  margin: 0 auto;
  grid-template: 1fr 1fr / repeat(auto-fit, 10rem);
  justify-content: space-around;
`

const GridItem = styled.a`
  height: 200px;
  width: 100%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`

export const query = graphql`
         query HomePageQuery {
           allMarkdownRemark(
             filter: { fileAbsolutePath: { regex: "//social//" } }
           ) {
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
      <Grid>
        {social.map(entry => (
          <GridItem key={entry.link} href={entry.link}>
            {entry.title}
          </GridItem>
        ))}
      </Grid>
    </Container>
  )
}

export default IndexPage
