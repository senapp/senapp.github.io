import * as React from 'react';
import { Topbar } from './Topbar';

require('./PageContainer.module.css');

export const PageContainer: React.FC = ({ children }) => (
    <div>
        <Topbar />
        {children}
    </div>
);