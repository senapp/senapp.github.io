import * as React from 'react';
import css from './PageContent.module.css';

type Props = {
    className?: string;
}

export const PageContent: React.FC<Props> = ({ className = '', children }) => (
    <div className={`${css.container} ${className}`.trimEnd()}>
        {children}
    </div>
);