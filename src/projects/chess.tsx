import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';

export const ChessPage: React.FC = () => (
    <PageContainer>
        <div>
            Chess
        </div>
    </PageContainer>
);

ReactDOM.render(<ChessPage />, document.getElementById('root'));