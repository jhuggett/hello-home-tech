import Head from 'next/head'
import { GetStaticProps } from 'next'
import { getGithubPreviewProps, parseJson } from 'next-tinacms-github'
import { useGithubJsonForm, useGithubToolbarPlugins } from 'react-tinacms-github'
import { usePlugin } from 'tinacms'

export default function Home({file, cms}) {


  const formOptions = {
    labeL: 'Home Page',
    fields: [
      {
        name: 'title',
        component: 'text'
      }
    ]
  }

  const [data, form] = useGithubJsonForm(file, formOptions)
  usePlugin(form)

  useGithubToolbarPlugins()

  return (
    <div>
      {data.title}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async function({
  preview,
  previewData
}) {
  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: 'content/home.json',
      parse: parseJson
    })
  }

  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/home.json',
        data: (await import('../content/home.json')).default
      }
    }
  }
}