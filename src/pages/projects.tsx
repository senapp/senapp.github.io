import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';

export const ProjectsPage: React.FC = () => (
    <PageContainer>
        <div>
            Projects
        </div>
    </PageContainer>
);

ReactDOM.render(<ProjectsPage />, document.getElementById('root'));