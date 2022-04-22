import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';
import { PageContent } from '../components/page/PageContent';

export const IFSPage: React.FC = () => (
    <PageContainer>
        <PageContent>
            IFS
        </PageContent>
    </PageContainer>
);

ReactDOM.render(<IFSPage />, document.getElementById('root'));