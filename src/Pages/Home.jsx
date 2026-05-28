import TopHeader from "../components/TopHeader/TopHeader"
import Footer from "../components/Footer/Footer"
import Carousel from "../components/Carousel/Carousel"
import CardBox from "../components/CardBox/CardBox"

import "./Home.css"

export default function Home() {

    return (
        <div>
            <TopHeader />
                <Carousel />
                <CardBox 
                leftMargin={'10%'}
                rightMargin={'10%'}
                cardContent={<>Olá mundo</>}/>
            <Footer />
        </div>
    )
}