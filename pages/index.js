import Head from 'next/head'
import { motion } from 'framer-motion'
export default function Home() {
  return (
    <div>
      <Head>
       <title>Learning Next         </title> 
      </Head>
      
      <motion.div initial="hidden" animate="visible" variants={{
        hidden:{
          scale: .8,
          opacity:0
        },
        visible:{
          scale:1,
          opacity:1,
          transition:{
            delay:.4
          }
        }
      }}>
        Learning Next
      </motion.div>
      
    </div>
  )
}
