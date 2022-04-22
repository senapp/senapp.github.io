import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';
import { PageContent } from '../components/page/PageContent';

export const ChessPage: React.FC = () => (
    <PageContainer>
        <PageContent>
            Chess
        </PageContent>
    </PageContainer>
);

ReactDOM.render(<ChessPage />, document.getElementById('root'));