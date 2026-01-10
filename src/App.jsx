import './App.css'
import Header from "./Section/Header"
import Hero from "./Section/Hero"
import Category from "./Section/Category"
import Types from "./Section/Types"
import Service from "./Section/Service"
import ProductsGrid from "./Section/ProductsGrid"
import Banner from "./Section/Banner"
// import Review from "./Section/Review"
import Insta from "./Section/Insta"
import Footer from "./Section/Footer"

function App() {

  return (
    <>
      <div>
        <Header />
        <Hero />
        <Category />
        <Types />
        <Service />
        <ProductsGrid />
        <Banner />
        {/* <Review /> */}
        <Insta />
        <Footer />
      </div>
    </>
  )
}

export default App
