import Aboutus from '@/components/Aboutus'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Services from '@/components/Services'
import { SparklesPreview } from '@/components/SparklesPreview'

function Home() {
  return (
    <>
    <SparklesPreview />
    {/* <Aboutus/> */}
    <h1 className=' text-4xl text-center mt-6'>Features</h1>
    <Services/>
    <h1 className=' text-center text-4xl mt-6'>How To Use</h1>
    <Features/>
   <Footer />

    </>
  )
}

export default Home