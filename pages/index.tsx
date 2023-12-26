import IndexPage from 'components/IndexPage'
import PreviewIndexPage from 'components/PreviewIndexPage'
import { init } from 'lib/demo.data'
import { readToken } from 'lib/sanity.api'
import { getHomeData, getClient, getSettings } from 'lib/sanity.client'
import { Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

interface PageProps extends SharedPageProps {
  data: any
  settings: Settings
}

interface Query {
  [key: string]: string
}

export default function Page(props: PageProps) {
  const { data, settings, draftMode } = props

  // if (draftMode) {
  //   return <PreviewIndexPage data={data} settings={settings} />
  // }

  return <IndexPage data={data} settings={settings} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, data={}] = await Promise.all([
    getSettings(client),
    getHomeData(client),
  ])
  console.log(data)
  // if(data.physiotherapists.length ===0){
  //   init()
  // }
  return {
    props: {
      data,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}
