import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';

export const SupportPage: React.FC = () => (
    <PageContainer>
        <div>
            Support
        </div>
    </PageContainer>
);

ReactDOM.render(<SupportPage />, document.getElementById('root'));