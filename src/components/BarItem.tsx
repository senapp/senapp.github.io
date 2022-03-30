import * as React from 'react';
import { ImageIdentity } from '../framework/Images';
import { isCurrentUrl } from '../utils/connection';
import { filterCssClasses } from '../utils/css';
import { Image } from './Image';

import css from './BarItem.module.css';

type Props = {
    label?: string;
    imageIdentity?: ImageIdentity;
    url: string;
    className?: string;
    newPage?: boolean;
}

export const BarItem: React.FC<Props> = ({ label = '', imageIdentity, url, className = '', newPage = false }) => {
    const isActive = isCurrentUrl(url);

    const itemClasses = filterCssClasses({
        [css.barItem]: true,
    });

    const aClasses = filterCssClasses({
        [css.barItemContent]: true,
        [css.active]: isActive,
        [className]: !!className
    });

    return (
        <li className={itemClasses}>
            <a className={aClasses} href={url} target={newPage ? '_blank' : undefined} rel="noreferrer">
                {label && label}
                {imageIdentity && <Image imageIdentity={imageIdentity} />}
            </a>
        </li>
    );
};