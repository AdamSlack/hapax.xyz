import React from 'react'
import ProjectPreview from '../../components/ProjectPreview/ProjectPreview'

import './Projects.css'

const projects = [
    {
        name: 'Hapax.xyz',
        tagline:'The repository for this site!',
        imgSrc: 'https://raw.githubusercontent.com/AdamSlack/colours.hapax.xyz/master/examples/sintel-circles.png',
        repoLink: 'https://github.com/AdamSlack/hapax.xyz',
        link: 'https://hapax.xyz',
    },
    {
        name: 'moistsquid',
        tagline:'Had this domain for a while now. Not at all sure what to do with it yet. Was once a t-shirt store, currently a site that was playing around with the html-5 canvas.',
        imgSrc: 'https://raw.githubusercontent.com/AdamSlack/colours.hapax.xyz/master/examples/tearsOfSteel-circles.png',
        repoLink: 'https://github.com/AdamSlack/moistsquid.co.uk',
        link: 'https://moistsquid.co.uk',
    },
    {
        name: 'Film Colour Charts',
        tagline:'Generate art prints from the average colours of a video. You can also browse charts that overs have made and decided to share, or save and share your own.',
        imgSrc: 'https://raw.githubusercontent.com/AdamSlack/AdamSlack/master/big_buck_bunny.png',
        repoLink: 'https://github.com/AdamSlack/colours.hapax.xyz',
        link: 'https://colours.hapax.xyz'
    },
    {
        name: 'Chrome Web Store Scraper',
        tagline:'An old project that will let you scrape meta-data from the Chrome plugin store. Uses selenium (poorly) to load dynamic content.',
        imgSrc: '',
        repoLink: 'https://github.com/AdamSlack/chrome-web-store-scraper'
    },
    {
        name: 'Author Profiling',
        tagline:'A Project from University investigating the prediction of the author of short texts. Also features a write-up of the results.',
        imgSrc: '',
        repoLink: 'https://github.com/AdamSlack/author_profiling'
    },
    {
        name: 'Latent Entity Models',
        tagline:'A Project from University defining and exploring Latent Entity Models with collections of texts. Think of it as the automatic extraction of entity stereotypes. An extensive write-up is included.',
        imgSrc: '',
        repoLink: 'https://github.com/AdamSlack/latentEntityModels'
    },
    {
        name: 'X-Ray: Koala Hero',
        tagline:'An Android Application for Parents and families designed to allow parents to learn about the apps their children are using. Developed for a study investigating privacy-related decisions that parents make',
        imgSrc: '',
        repoLink: 'https://github.com/OxfordHCC/xray-koala-hero'
    },
    {
        name: 'NHSD GP IT Futures Buying Catalogue',
        tagline:'A Now Archived project for the Private Beta of NHS Digital\'s GP IT Futures Buying Catalogue',
        imgSrc: '',
        repoLink: 'https://github.com/nhs-digital-gp-it-futures/Buying-Catalogue-Private-Beta'
    },
    {
        name: 'X-Ray Archiver',
        tagline:'A Service for scraping, analysing, and storing privacy oriented meta-data for Android Applications. Used within Privacy oriented studies investigating the data-sharing practices of 3rd parties within mobile applications',
        imgSrc: '',
        repoLink: 'https://github.com/sociam/xray-archiver'
    }
]

// This will allow the flex box to continue to space things nicely even on a row that isn't full of items
const createPhantomProjects = () => Array.from({length: 4}, () => (<ProjectPreview className="phantom-hack"></ProjectPreview>))

const Projects = () => {
    return (
        <ul className="containers">
            {
                projects.map((project) => (
                    <ProjectPreview {...project}></ProjectPreview>
                ))
            }
            {createPhantomProjects()}
        </ul>
    )
}

export default Projects
