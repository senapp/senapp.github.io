import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';
import { PageContent } from '../components/page/PageContent';
import { ProjectsView } from '../components/projects/ProjectsView';
import css from './apps.module.css';

export const AppsPage: React.FC = () => (
    <PageContainer>
        <PageContent className={css.container}>
            <div className={css.title}>
                Apps
            </div>
            <ProjectsView showPrivate={false} />
        </PageContent>
    </PageContainer>
);

ReactDOM.render(<AppsPage />, document.getElementById('root'));