import * as React from 'react';
import { Bottombar } from './BottomBar';
import { Topbar } from './Topbar';

import css from './PageContainer.module.css';
import { getTheme, Theme } from '../../framework/theme';

export const PageContainer: React.FC = ({ children }) => {
    if (getTheme() === Theme.Light) {
        require('./LightTheme.module.css');
    } else {
        require('./DarkTheme.module.css');
    }

    require('./PageContainer.module.css');

    return (
        <div>
            <Topbar />
            <div className={css.pageContainer}>
                {children}
            </div>
            <Bottombar />
        </div>
    );
};