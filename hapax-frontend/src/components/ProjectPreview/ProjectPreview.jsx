import React from 'react'
import './ProjectPreview.css'

const getSiteLinkAnchor = (link) => {
    if(link) {
        return (<a href={link} target="_blank">View Site</a>)
    }
}

const getRepoLinkAnchor = (repoLink) => {
    if(repoLink) {
        return (<a href={repoLink} target="_blank">View on GitHub</a>)
    }
}

const ProjectPreview = ({className, ...props}) => {
    const { imgSrc, name, tagline, link, repoLink } = props
    return (
        <li className={`project-preview ${className}`}>
            <div className="project-image">
                <img src={imgSrc} alt={`Image: ${name}`} />
            </div>
            <div className="project-summary">
                <h2>
                        {name}
                </h2>
                <p>{tagline}</p>
            </div>
            <div className="project-links">
                <span>
                    {getSiteLinkAnchor(link)}
                </span>
                <span>
                    {getRepoLinkAnchor(repoLink)}
                </span>
            </div>
        </li>
    )
}

export default ProjectPreview
