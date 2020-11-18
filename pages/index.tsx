import Head from 'next/head'
import { GetStaticProps } from 'next'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { useGithubJsonForm, useGithubToolbarPlugins } from 'react-tinacms-github'
import { usePlugin, useForm, useFormScreenPlugin } from 'tinacms'
import { Nav } from '../components/Nav'
import { BodyCenter, BodyRight, BodyLeft, ContentBody } from '../components/ContentBody'
import React from 'react'
import { InlineForm, InlineTextarea } from 'react-tinacms-inline'
import getProps from '../getProps'

export default function Home({file, cms, configFile}) {

  

  const [data, form] = useGithubJsonForm(file)
  usePlugin(form)

  const [configData, configForm] = useGithubJsonForm(configFile, {
    label: 'Config',
    fields: [
      {
        name: 'title',
        component: 'text'
      }
    ]
  })

  useFormScreenPlugin(configForm)
  useGithubToolbarPlugins()

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