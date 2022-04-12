import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';

export const PathfindingPage: React.FC = () => (
    <PageContainer>
        <div>
            Pathfinding
        </div>
    </PageContainer>
);

ReactDOM.render(<PathfindingPage />, document.getElementById('root'));