import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';
import { PageContent } from '../components/page/PageContent';
import css from './contact.module.css';

export const ContactPage: React.FC = () => (
    <PageContainer>
        <PageContent className={css.container}>
            <div className={css.mailContainer}>
                <h1>Business:</h1>
                <a href="mailto:business.senapp@gmail.com">business.senapp@gmail.com</a>
                <div>Please do not email us about using your ad network or marketing our apps through your service.</div>
            </div>
            <div className={css.mailContainer}>
                <h1>Support:</h1>
                <a href="mailto:help.senapp@gmail.com">help.senapp@gmail.com</a>
                <div>{'Please check the support tab on the bottom of this page before emailing support.'}</div>
            </div>
        </PageContent>
    </PageContainer>
);

ReactDOM.render(<ContactPage />, document.getElementById('root'));