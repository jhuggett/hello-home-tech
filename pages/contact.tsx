import Head from 'next/head'
import { GetStaticProps } from 'next'
import getProps from '../getProps'

export default function Home() {
  return (
    <div>
     
    </div>
  )
}


export const getStaticProps: GetStaticProps = getProps('home')