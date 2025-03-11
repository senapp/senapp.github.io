import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';
import { PageContent } from '../components/page/PageContent';
import { ProjectView } from '../components/projects/ProjectView';
import { ProjectStore, ProjectIdentity } from '../framework/projects';

export const SkeadealsPage: React.FC = () => {
    const project = ProjectStore.get(ProjectIdentity.Skeadeals);

    return (
        <PageContainer>
            <PageContent>
                <ProjectView project={project} />
            </PageContent>
        </PageContainer>
    );
};

ReactDOM.render(<SkeadealsPage />, document.getElementById('root'));