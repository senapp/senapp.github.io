import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';

export const SenappGameEnginePage: React.FC = () => (
    <PageContainer>
        <div>
            Senapp Game Engine
        </div>
    </PageContainer>
);

ReactDOM.render(<SenappGameEnginePage />, document.getElementById('root'));