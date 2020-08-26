import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Projects from '../../components/Projects/Projects'

import './HomePage.css'

const HomePage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <section>
                <h2>Open Source Projects</h2>
                <p>Here are some projects. Whilst they are all open source, they deffo are not all interesting!</p>
            </section>
            <section>
                <Projects></Projects>
            </section>

        </div>
    )
}

export default HomePage
