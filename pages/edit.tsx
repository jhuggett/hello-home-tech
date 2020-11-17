import Head from 'next/head'
import { EditLink } from '../components/EditLink'

export default function Home({cms}) {
  return (
    <div>
      <EditLink cms={cms} />
    </div>
  )
}