import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from './components/page/PageContainer';

export const NotFound: React.FC = () => (
    <PageContainer>
        <div>
            404
        </div>
    </PageContainer>
);

ReactDOM.render(<NotFound />, document.getElementById('root'));