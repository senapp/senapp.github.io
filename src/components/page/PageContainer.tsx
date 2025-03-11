import * as React from 'react';
import { Topbar } from './Topbar';

import css from './PageContainer.module.css';
import { getTheme, Theme } from '../../framework/theme';
import { BottomBar } from './BottomBar';
import { useEffect, useReducer, useState } from 'react';

type Props = {
    isProjects?: boolean;
}

export const PageContainer: React.FC<Props> = ({ children, isProjects = false }) => {
    if (getTheme() === Theme.Light) {
        require('./LightTheme.module.css');
    } else {
        require('./DarkTheme.module.css');
    }

    require('./PageContainer.module.css');
    const params = window.location.search.includes("?") ? window.location.search.split("?")[1] : "";

    return (
        <div>
            <Topbar isProjects={isProjects || params === "projects"} />
            <div className={css.pageContainer}>
                {children}
            </div>
            <BottomBar />
        </div>
    );
};