import * as React from 'react';
import { isCurrentUrl } from '../utils/connection';
import { filterCssClasses } from '../utils/css';

import css from './BarItem.module.css';

type Props = {
    label: string;
    url: string;
}

export const BarItem: React.FC<Props> = ({ label, url }) => {
    const isActive = isCurrentUrl(url);

    const aClassName = filterCssClasses({
        [css.barLabel]: true,
        [css.active]: isActive,
    });

    return (
        <li className={css.barItem}>
            <a className={aClassName} href={url}>{label}</a>
        </li>
    );
};