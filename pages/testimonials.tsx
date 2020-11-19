import Head from 'next/head'
import styled from 'styled-components'
import { GetStaticProps } from 'next'
import getProps from '../getProps'
import useForms from '../useForms'
import { InlineForm } from 'react-tinacms-inline'
import { Nav } from '../components/Nav'
import { ContentBody, BodyLeft, BodyCenter, BodyRight } from '../components/ContentBody'

export default function Testimonials({cms, file, configFile}) {
  const [data, form, configData, configForm] = useForms(file, configFile)

  

  return (
    <>
    <InlineForm form={form}>
      <Nav data={configData} cms={cms}/>
      
      <ContentBody>
        <BodyLeft>

        </BodyLeft>
        <BodyCenter>
          
        </BodyCenter>
        <BodyRight>
          
        </BodyRight>
      </ContentBody>
    </InlineForm>
    </>
  )
}


export const getStaticProps: GetStaticProps = getProps('home')