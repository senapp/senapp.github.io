import * as React from 'react';
import { useEffect, useState } from 'react';
import { useRect } from '../../framework/useRect';
import { filterCssClasses } from '../../utils/css';
import css from './Expander.module.css';

type Props = {
    header?: string;
    defaultExpanded?: boolean;
    containerClassName?: string;
    headerClassName?: string;
}

export const Expander: React.FC<Props> = ({ header = '', defaultExpanded = true, containerClassName = '', headerClassName = '', children }) => {
    const [expanded, setExpanded] = useState(defaultExpanded);
    const [showChildren, setShowChildren] = useState(defaultExpanded);
    const [rect, ref, manuallyUpdate] = useRect<HTMLDivElement>();

    useEffect(() => {
        if (!expanded) {
            window.setTimeout(() => setShowChildren(false), 125);
        } else {
            setShowChildren(true);
            window.setTimeout(() => manuallyUpdate(), 125);
        }
    }, [expanded]);

    const containerClasses = filterCssClasses({
        [css.container]: true,
        [containerClassName]: !!containerClassName,
        [css.containerExpanded]: expanded,
    });

    const headerClasses = filterCssClasses({
        [css.header]: true,
        [headerClassName]: !!headerClassName,
        [css.headerExpanded]: expanded,
        [css.headerNotExpanded]: !expanded,
    });

    return (
        <div className={containerClasses}>
            <div style={{ marginBottom: expanded ? '5px' : 0 }} onClick={() => setExpanded(!expanded)} className={headerClasses}>
                {header}
            </div>
            <div style={{ height: expanded && rect ? rect.height : 0 }} className={css.content}>
                {showChildren && <div ref={ref}>{children}</div>}
            </div>
        </div>
    );
};