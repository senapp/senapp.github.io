import * as React from 'react';
import { ImageIdentity } from '../../framework/images';
import { getTheme, switchTheme, Theme } from '../../framework/theme';
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
            <BarItem action={switchTheme} imageIdentity={getTheme() === Theme.Dark ? ImageIdentity.Sun : ImageIdentity.Moon} />
        </ul>
        <ul className={css.barListRight}>
            <Image imageClassName={css.logo} imageIdentity={ImageIdentity.SenappStudios} />
        </ul>
    </div>
);