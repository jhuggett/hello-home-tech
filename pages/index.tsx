import { GetStaticProps } from 'next'
import { Nav } from '../components/Nav'
import { BodyCenter, BodyRight, BodyLeft, ContentBody } from '../components/ContentBody'
import React from 'react'
import { InlineForm, InlineTextarea } from 'react-tinacms-inline'
import getProps from '../getProps'
import useForms from '../useForms'



export default function Home({file, cms, configFile}) {

  const [data, form, configData, configForm] = useForms(file, configFile)

  

  return (
    <>
    <InlineForm form={form}>
      <Nav data={configData} cms={cms}/>
      
      <ContentBody>
        <BodyLeft>

        </BodyLeft>
        <BodyCenter>
          <InlineTextarea name="blurb" />
        </BodyCenter>
        <BodyRight>
          
        </BodyRight>
      </ContentBody>
    </InlineForm>
    </>
  )
}









export const getStaticProps: GetStaticProps = getProps('home')