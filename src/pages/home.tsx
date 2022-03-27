import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/PageContainer';

export const HomePage: React.FC = () => (
    <PageContainer>
        <div>
            Home
        </div>
    </PageContainer>
);

ReactDOM.render(<HomePage />, document.getElementById('root'));