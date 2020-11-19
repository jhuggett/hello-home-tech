import { InlineTextField, InlineTextarea, BlocksControls } from "react-tinacms-inline";
import styled from 'styled-components'

export function Hero() {

  return (
    <HeroContainer>
      <h1>
        <InlineTextarea name="headline" />
      </h1>

      <p>
        <InlineTextarea name="subtext" />
      </p>
    </HeroContainer>
  )
}

export const heroBlock = {
  Component: ({ index }) => {
    <BlocksControls index={index}>
      <Hero />
    </BlocksControls>
  },
  template: {
    label: 'Hero',
    defaultItem: {
      headline: 'This is a headline',
      subtext: 'This is the subtext.'
    },
    fields: []
  },
}

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`