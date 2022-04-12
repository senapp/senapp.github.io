import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';

export const BBGrandenPage: React.FC = () => (
    <PageContainer>
        <div>
            B&B Granden
        </div>
    </PageContainer>
);

ReactDOM.render(<BBGrandenPage />, document.getElementById('root'));