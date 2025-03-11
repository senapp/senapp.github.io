import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';
import { PageContent } from '../components/page/PageContent';
import { ProjectStore, ProjectIdentity } from '../framework/projects';
import { ProjectView } from '../components/projects/ProjectView';

export const ChessPage: React.FC = () => {
    const project = ProjectStore.get(ProjectIdentity.Chess);

    return (
        <PageContainer>
            <PageContent>
                <ProjectView project={project} />
            </PageContent>
        </PageContainer>
    );
};

ReactDOM.render(<ChessPage />, document.getElementById('root'));