import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
       <title>Learning Next         </title> 
      </Head>
      <Link href="/about"><a>About</a>
                     </Link>
      Learning Next
    </div>
  )
}
