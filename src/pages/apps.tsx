import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';

export const AppsPage: React.FC = () => (
    <PageContainer>
        <div>
            Apps
        </div>
    </PageContainer>
);

ReactDOM.render(<AppsPage />, document.getElementById('root'));