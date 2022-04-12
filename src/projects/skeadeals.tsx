import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';

export const SkeadealsPage: React.FC = () => (
    <PageContainer>
        <div>
            Skeadeals
        </div>
    </PageContainer>
);

ReactDOM.render(<SkeadealsPage />, document.getElementById('root'));