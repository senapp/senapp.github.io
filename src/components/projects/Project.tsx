import * as React from 'react';
import { ProjectInformation } from '../../framework/projects';
import { Image } from '../common/Image';
import css from './Project.module.css';

type Props = {
    project: ProjectInformation;
}

export const Project: React.FC<Props> = ({ project }) => (
    <div className={css.container}>
        <Image href={project.url} aClassName={css.imageA} containerClassName={css.imageContainer} imageClassName={css.image} imageIdentity={project.icon} />
        <div className={css.title}>{project.name}</div>
        <div className={css.links}>
            {project.links.map((link, index) => <>
                {index !== 0 && <span className={css.linkSeperator}>{', '}</span>}
                <a className={css.link} key={index} href={link.url}>{link.name}</a>
            </>)}
        </div>
    </div>
);
