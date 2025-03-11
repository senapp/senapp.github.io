import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';
import { PageContent } from '../components/page/PageContent';
import { ProjectView } from '../components/projects/ProjectView';
import { ProjectIdentity, ProjectStore } from '../framework/projects';

export const JapanWorldMarkerPage: React.FC = () => {
    const project = ProjectStore.get(ProjectIdentity.JapanWorldMarker);

    return (
        <PageContainer>
            <PageContent>
                <ProjectView project={project} />
            </PageContent>
        </PageContainer>
    );
};

ReactDOM.render(<JapanWorldMarkerPage />, document.getElementById('root'));