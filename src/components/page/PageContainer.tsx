import * as React from 'react';
import { Bottombar } from './BottomBar';
import { Topbar } from './Topbar';

import css from './PageContainer.module.css';
require('./PageContainer.module.css');

export const PageContainer: React.FC = ({ children }) => (
    <div>
        <Topbar />
        <div className={css.pageContainer}>
            {children}
        </div>
        <Bottombar />
    </div>
);