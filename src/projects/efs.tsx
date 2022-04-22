import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';
import { PageContent } from '../components/page/PageContent';

export const EFSPage: React.FC = () => (
    <PageContainer>
        <PageContent>
            EFS
        </PageContent>
    </PageContainer>
);

ReactDOM.render(<EFSPage />, document.getElementById('root'));