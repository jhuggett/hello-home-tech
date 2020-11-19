import Head from 'next/head'
import { GetStaticProps } from 'next'
import getProps from '../getProps'
import useForms from '../useForms'
import { InlineForm, InlineTextarea } from 'react-tinacms-inline'
import { Nav } from '../components/Nav'
import { ContentBody, BodyLeft, BodyCenter, BodyRight } from '../components/ContentBody'

export default function Services({cms, file, configFile}) {
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