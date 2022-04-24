import * as React from 'react';
import { ProjectInformation, ProjectStore } from '../../framework/projects';
import { Project } from './Project';
import css from './ProjectsView.module.css';

type Props = {
    showPrivate: boolean;
}

export const ProjectsView: React.FC<Props> = ({ showPrivate }) => {
    const availableProjects: ProjectInformation[] = [];

    ProjectStore.forEach((value) => {
        if (showPrivate || value.public) {
            availableProjects.push(value);
        }
    });

    return (
        <div className={css.container}>
            {availableProjects.map(project => <Project key={project.type} project={project} />)}
        </div>
    );
};
