import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';
import { PageContent } from '../components/page/PageContent';

export const ProjectsPage: React.FC = () => (
    <PageContainer>
        <PageContent>
            Projects
        </PageContent>
    </PageContainer>
);

ReactDOM.render(<ProjectsPage />, document.getElementById('root'));