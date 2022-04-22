import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Attributions } from '../components/legal/Attributions';
import { PrivacyPolicy } from '../components/legal/PrivacyPolicy';
import { Statements } from '../components/legal/Statements';
import { TermsAndConditions } from '../components/legal/TermsAndConditions';
import { PageContainer } from '../components/page/PageContainer';
import { PageContent } from '../components/page/PageContent';
import css from './legal.module.css';

enum Page {
    None,
    PrivacyPolicy,
    TermsAndConditions,
    Statements,
    Attributions
}

export const LegalPage: React.FC = () => {
    const urlLegalPage = getActiveUrlLegalPage();

    return (
        <PageContainer>
            <PageContent className={css.container}>
                <PrivacyPolicy expanded={urlLegalPage === Page.PrivacyPolicy} />
                <TermsAndConditions expanded={urlLegalPage === Page.TermsAndConditions} />
                <Statements expanded={urlLegalPage === Page.Statements} />
                <Attributions expanded={urlLegalPage === Page.Attributions} />
            </PageContent>
        </PageContainer>
    );
};

const getActiveUrlLegalPage = (): Page => {
    const splitByDash = window.location.href.split('/');

    if (splitByDash[splitByDash.length - 1].includes('?')) {
        const rawValueArray = splitByDash[splitByDash.length - 1].split('?');
        const rawValue = rawValueArray[rawValueArray.length - 1];
        if (Number.isNaN(Number(rawValue))) {
            return Page.None;
        } else {
            const value = Number(rawValue);
            switch (value) {
                case 0:
                    return Page.PrivacyPolicy;
                case 1:
                    return Page.TermsAndConditions;
                case 2:
                    return Page.Statements;
                case 3:
                    return Page.Attributions;
                default:
                    return Page.None;
            }
        }
    } else {
        return Page.None;
    }
};

ReactDOM.render(<LegalPage />, document.getElementById('root'));