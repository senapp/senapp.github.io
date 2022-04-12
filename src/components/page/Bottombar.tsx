import * as React from 'react';
import { ImageIdentity } from '../../framework/Images';
import { toUrl } from '../../utils/connection';
import { BarItem } from './BarItem';

import css from './Bottombar.module.css';

export const Bottombar: React.FC = () => (
    <div className={css.bottombar}>
        <ul className={css.barListLeft}>
            <BarItem className={css.barItem} label="Privacy policy" url={toUrl(`/pages/legal`, '?0')} />
            <BarItem className={css.barItem} label="Terms & Conditions" url={toUrl(`/pages/legal`, '?1')} />
            <BarItem className={css.barItem} label="Statements" url={toUrl(`/pages/legal`, '?2')} />
            <BarItem className={css.barItem} label="Attributions" url={toUrl(`/pages/legal`, '?3')} />
            <BarItem className={css.barItem} label="Support" url={toUrl(`/pages/support`)} />
        </ul>
        <ul className={css.barListRight}>
            <BarItem imageIdentity={ImageIdentity.Discord} url="https://discord.com/invite/XbMRVedRwr" newPage />
            <BarItem imageIdentity={ImageIdentity.Twitter} url="https://twitter.com/senappstudios" newPage />
            <BarItem imageIdentity={ImageIdentity.Instagram} url="https://www.instagram.com/senappstudios/" newPage />
            <BarItem imageIdentity={ImageIdentity.Youtube} url="https://www.youtube.com/channel/UCCPrhv3IQ5d35qnMZruUekw" newPage />
        </ul>
        <div className={css.copyright}>
            {new Date().getFullYear()} © Senapp Studios, Albin Björklund
        </div>
    </div>
);