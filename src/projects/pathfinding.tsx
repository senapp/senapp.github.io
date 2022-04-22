import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';
import { PageContent } from '../components/page/PageContent';

export const PathfindingPage: React.FC = () => (
    <PageContainer>
        <PageContent>
            Pathfinding
        </PageContent>
    </PageContainer>
);

ReactDOM.render(<PathfindingPage />, document.getElementById('root'));