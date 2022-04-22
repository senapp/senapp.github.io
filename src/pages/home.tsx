import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';
import { PageContent } from '../components/page/PageContent';
import css from './home.module.css';

export const HomePage: React.FC = () => (
    <PageContainer>
        <PageContent className={css.homeContainer}>
            <h1 className={css.title}>Senapp Studios</h1>
            <h2 className={css.text}>
            Game and App developer
            </h2>
            <h3 className={css.message}>
                Check out the website with the tabs above and below!
            </h3>
        </PageContent>
    </PageContainer>
);

ReactDOM.render(<HomePage />, document.getElementById('root'));