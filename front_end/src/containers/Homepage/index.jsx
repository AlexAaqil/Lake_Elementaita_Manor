import Hero from './Hero'
import Navbar from './Navbar'
import About from './About'
import Services from './Services'
import Gallery from './Gallery'
import Footer from '../../components/Footer'

export default function Homepage(){
    return(
        <>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Gallery />            
            <Footer />
        </>
    )
}