import * as React from 'react';
import { ProjectInformation } from '../../framework/projects';
import { Image } from '../common/Image';
import css from './ProjectView.module.css';

type Props = {
    project: ProjectInformation | undefined;
}

export const ProjectView: React.FC<Props> = ({ project }) => {
    if (!project) {
        return null;
    }

    return (
        <div>
            <Image containerClassName={css.projectIconContainer} imageClassName={css.projectIcon} imageIdentity={project.icon} />
            <div className={css.projectInfoRight}>
                <div className={css.projectName}>
                    <h3>Name</h3>
                    <h1>{project.name}</h1>
                </div>
                <div className={css.projectLinks}>
                    <h3>Links</h3>
                    <div className={css.projectLinksContainer}>
                        {project.links.map((link, index) => <>
                            {index !== 0 && <span className={css.linkSeperator}>{', '}</span>}
                            <a className={css.link} key={index} href={link.url}>{link.name}</a>
                        </>)}
                    </div>
                </div>
                <div className={css.projectTools}>
                    <h3>Tools</h3>
                    <p className={css.projectToolsText}>{project.tools.join(', ')}</p>
                </div>
            </div>
            <div className={css.projectInfo}>
                <h2>Description</h2>
                <p>{project.description}</p>
            </div>
        </div>
    );
};
