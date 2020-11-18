import Head from 'next/head'
import { GetStaticProps } from 'next'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { useGithubJsonForm, useGithubToolbarPlugins } from 'react-tinacms-github'
import { usePlugin, useForm, useFormScreenPlugin } from 'tinacms'
import styled from 'styled-components'
import Link from 'next/link'
import { Nav } from '../components/Nav'
import { BodyCenter, BodyRight, BodyLeft, ContentBody } from '../components/ContentBody'
import React from 'react'
import { InlineForm, InlineTextarea } from 'react-tinacms-inline'

export default function Home({file, cms, configFile}) {

  

  const [data, form] = useGithubJsonForm(file)
  usePlugin(form)

  const [configData, configForm] = useGithubJsonForm(configFile)

  useFormScreenPlugin(configForm)

  useGithubToolbarPlugins()

  return (
    <>
    <InlineForm form={form}>
      <Nav data={configData}/>
      
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





const getProps = (fileName: string) => async ({
  preview,
  previewData
}) => {
  if (preview) {
    const contentFile = await getGithubPreviewProps({
      ...previewData,
      fileRelativePath: `json/${fileName}.json`,
      parse: parseJson,
    });
    return {
      props: {
        ...contentFile.props,
        configFile: (
          await getGithubPreviewProps({
            ...previewData,
            fileRelativePath: `content/config.json`,
            parse: parseJson,
          })
        ).props.file,
      },
    };
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      configFile: {
        fileRelativePath: `content/config.json`,
        data: (await import(`../content/config.json`))
          .default,
      },
      file: {
        fileRelativePath: `content/${fileName}.json`,
        data: (await import(`../content/${fileName}.json`))
          .default,
      },
    },
  };
}



export const getStaticProps: GetStaticProps = getProps('home')