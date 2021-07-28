import React from 'react'
import Header from './container/Header'
import Footer from './container/Footer'
import MoviesList from './container/MoviesList'

const App = () => {
    return (
        <div>
            <Header></Header>
            <MoviesList/>
            <Footer></Footer>
        </div>
    )
}

export default App
