import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';
import { PageContent } from '../components/page/PageContent';
import { ProjectIdentity, ProjectStore } from '../framework/projects';
import { ProjectView } from '../components/projects/ProjectView';

export const EFSPage: React.FC = () => {
    const project = ProjectStore.get(ProjectIdentity.EFS);

    return (
        <PageContainer>
            <PageContent>
                <ProjectView project={project} />
            </PageContent>
        </PageContainer>
    );
};

ReactDOM.render(<EFSPage />, document.getElementById('root'));