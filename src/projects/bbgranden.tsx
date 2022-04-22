import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';
import { PageContent } from '../components/page/PageContent';

export const BBGrandenPage: React.FC = () => (
    <PageContainer>
        <PageContent>
            B&B Granden
        </PageContent>
    </PageContainer>
);

ReactDOM.render(<BBGrandenPage />, document.getElementById('root'));