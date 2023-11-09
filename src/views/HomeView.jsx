import React from 'react'
import Header from '../components/Header'
import Skip from '../components/Skip'
import Intro from '../components/Intro'
import Site from '../components/Site'
import Port from '../components/port'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Main from '../components/Main'
import SKill from '../components/SKill'


const HomeView = () => {
  return (
    <>
        <Skip />
        <Header />
        <Main>
            <Intro />
            <SKill />
            <Site />
            <Port />
            <Contact />
        </Main>
        <Footer />
    </>

  )
}

export default HomeView
