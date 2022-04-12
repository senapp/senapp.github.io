import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';

export const EFSPage: React.FC = () => (
    <PageContainer>
        <div>
            EFS
        </div>
    </PageContainer>
);

ReactDOM.render(<EFSPage />, document.getElementById('root'));