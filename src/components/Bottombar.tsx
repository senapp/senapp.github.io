import * as React from 'react';
import { ImageIdentity } from '../framework/Images';
import { toUrl } from '../utils/connection';
import { BarItem } from './BarItem';

import css from './Bottombar.module.css';

export const Bottombar: React.FC = () => (
    <div className={css.bottombar}>
        <ul className={css.barListLeft}>
            <BarItem label="Privacy policy" url={toUrl(`/pages/legal`, '?0')} />
            <BarItem label="Terms & Conditions" url={toUrl(`/pages/legal`, '?1')} />
            <BarItem label="Statements" url={toUrl(`/pages/legal`, '?2')} />
            <BarItem label="Attributions" url={toUrl(`/pages/legal`, '?3')} />
            <BarItem label="Support" url={toUrl(`/pages/support`)} />
        </ul>
        <ul className={css.barListRight}>
            <BarItem imageIdentity={ImageIdentity.Instagram} url="https://www.instagram.com/senappstudios/" newPage />
        </ul>
    </div>
);