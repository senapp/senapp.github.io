import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';
import { PageContent } from '../components/page/PageContent';

export const SenappGameEnginePage: React.FC = () => (
    <PageContainer>
        <PageContent>
            Senapp Game Engine
        </PageContent>
    </PageContainer>
);

ReactDOM.render(<SenappGameEnginePage />, document.getElementById('root'));