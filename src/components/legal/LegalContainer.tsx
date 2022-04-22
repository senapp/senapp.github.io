import * as React from 'react';
import { Expander } from '../common/Expander';

import css from './LegalContainer.module.css';

type Props = {
    header: string;
    expanded: boolean;
    dateUpdated: string;
}

export const LegalContainer: React.FC<Props> = ({ header = '', expanded = false, dateUpdated = '', children }) => (
    <Expander header={`${header}: ${dateUpdated}`} defaultExpanded={expanded} containerClassName={css.expanderContainer} headerClassName={css.expanderHeader}>
        <div className={css.childContainer}>{children}</div>
    </Expander>
);