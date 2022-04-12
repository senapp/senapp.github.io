import * as React from 'react';
import { ImageIdentity } from '../../framework/Images';
import { toUrl } from '../../utils/connection';
import { BarItem } from './BarItem';
import { Image } from '../common/Image';

import css from './Topbar.module.css';

export const Topbar: React.FC = () => (
    <div className={css.topbar}>
        <ul className={css.barListLeft}>
            <BarItem label="Home" url={toUrl(`/pages/home`)} />
            <BarItem label="Apps" url={toUrl(`/pages/apps`)} />
            <BarItem label="Contact" url={toUrl(`/pages/contact`)} />
        </ul>
        <Image imageClassName={css.logo} imageIdentity={ImageIdentity.SenappStudios} />
    </div>
);