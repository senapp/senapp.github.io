import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';
import { PageContent } from '../components/page/PageContent';

export const AppsPage: React.FC = () => (
    <PageContainer>
        <PageContent>
            Apps
        </PageContent>
    </PageContainer>
);

ReactDOM.render(<AppsPage />, document.getElementById('root'));