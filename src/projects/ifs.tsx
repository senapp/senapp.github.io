import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';

export const IFSPage: React.FC = () => (
    <PageContainer>
        <div>
            IFS
        </div>
    </PageContainer>
);

ReactDOM.render(<IFSPage />, document.getElementById('root'));