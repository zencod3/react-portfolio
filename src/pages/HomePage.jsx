import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import Hobby from '../components/Hobby';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

function Home() {
    return (
        <div>
            <Navbar />
            <Hero/>
            <About/>
            <Contact/>
            <Hobby/>
            <Skills/>
            <Footer />
        </div>
    );
}

export default Home;
