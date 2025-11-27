import Navbar from "./components/Navbar/Navbar";
import CardsSlide from "./components/Cards/Cards";
import CardProduct from "./components/CardProduct/CardProduct";
import Footer from "./components/Footer/Footer";
import './App.css'


function App() {



    return (
        <>
            <Navbar />
            <CardsSlide />
            <CardProduct prod="Fone Headset Gamer Sem Fio Nomen Pro H838-pro Redragon Preto Preto" desc="Some quick example text to build on the card title and make up the bulk of the card’s content" preco="R$99,00" />


            
            <Footer/>
        </>

    )
}


export default App;