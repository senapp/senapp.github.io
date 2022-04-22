import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Expander } from '../components/common/Expander';
import { PageContainer } from '../components/page/PageContainer';
import { PageContent } from '../components/page/PageContent';
import css from './support.module.css';

export const SupportPage: React.FC = () => (
    <PageContainer>
        <PageContent className={css.container}>
            <div className={css.title}>
                * Frequently asked questions *
            </div>
            <Expander header="My game crashed/freezed/bugged?" defaultExpanded={false} containerClassName={css.questionContainer} headerClassName={css.questionHeader}>
                <div className={css.question}>
                Send a email to help.senapp@gmail.com with videos and screenshoots of the issue. If that is not possible then please describe what you were doing leading up to the issue. The more details the better!
                </div>
            </Expander>
            <Expander header="Can you make a club simulator as well?" defaultExpanded={false} containerClassName={css.questionContainer} headerClassName={css.questionHeader}>
                <div className={css.question}>
                    Yes!
                    <br />
                    <br />
                    I will try to release club versions of the game International Football Simulator when I have enough free time.
                </div>
            </Expander>
            <Expander header="I bought no ads but I still get ads?" defaultExpanded={false} containerClassName={css.questionContainer} headerClassName={css.questionHeader}>
                <div className={css.question}>
                    {'When you launch the game, go to the settings menu and click "Restore Purchases". If this doesn\'t fix the issue then send a email to help.senapp@gmail.com with your recipt number so I can refund you. Example: GPA.3213.3123.1231'}
                </div>
            </Expander>
        </PageContent>
    </PageContainer>
);

ReactDOM.render(<SupportPage />, document.getElementById('root'));