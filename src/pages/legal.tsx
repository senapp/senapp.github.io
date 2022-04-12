import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';

export const LegalPage: React.FC = () => (
    <PageContainer>
        <div>
            Legal
        </div>
    </PageContainer>
);

ReactDOM.render(<LegalPage />, document.getElementById('root'));