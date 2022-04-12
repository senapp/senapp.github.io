import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';

export const ContactPage: React.FC = () => (
    <PageContainer>
        <div>
            Contact
        </div>
    </PageContainer>
);

ReactDOM.render(<ContactPage />, document.getElementById('root'));