import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';
import { PageContent } from '../components/page/PageContent';

export const SkeadealsPage: React.FC = () => (
    <PageContainer>
        <PageContent>
            Skeadeals
        </PageContent>
    </PageContainer>
);

ReactDOM.render(<SkeadealsPage />, document.getElementById('root'));