import * as React from 'react';
import { ImageIdentity } from '../../framework/images';
import { toUrl } from '../../utils/connection';
import { BarItem } from './BarItem';

import css from './BottomBar.module.css';
import { useEffect, useReducer, useState } from 'react';
import { isMobile, isPortrait } from '../../framework/settings';
import { Image } from '../common/Image';
import { scrollToTop, toggleScroll } from '../../utils/utils';

export const BottomBar: React.FC = () => {
    const [expanded, setExpanded] = useState(false);
    
    const mobileView = isPortrait() || isMobile();
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    useEffect(() => { window.addEventListener('resize', forceUpdate); }, []);

    const getBarItems = () => {
        return (<>
            <ul className={!mobileView ? css.barListLeft : (css.mobileListLeft + " " + css.barItemsExpanded)}>
                <BarItem className={css.barItem} label="Privacy policy" url={toUrl(`/pages/legal`, '?0')} />
                <BarItem className={css.barItem} label="Terms & Conditions" url={toUrl(`/pages/legal`, '?1')} />
                <BarItem className={css.barItem} label="Statements" url={toUrl(`/pages/legal`, '?2')} />
                <BarItem className={css.barItem} label="Attributions" url={toUrl(`/pages/legal`, '?3')} />
                <BarItem className={css.barItem} label="Support" url={toUrl(`/pages/support`)} />
            </ul>
            <ul className={!mobileView ? css.barListRight : (css.mobileListRight + " " + css.barItemsExpanded + " " + css.barItemsExpandedSocials)}>
                <BarItem imageIdentity={ImageIdentity.Twitter} url="https://twitter.com/senappstudios" newPage />
                <BarItem imageIdentity={ImageIdentity.Instagram} url="https://www.instagram.com/senappstudios/" newPage />
                <BarItem imageIdentity={ImageIdentity.Youtube} url="https://www.youtube.com/channel/UCCPrhv3IQ5d35qnMZruUekw" newPage />
            </ul>
        </>);
    }

    const createBottomView = () => {
        if (mobileView) {
            return (<>
                <Image onClick={() => {
                    setExpanded(!expanded)
                    toggleScroll(expanded);
                    scrollToTop();
                }} containerClassName={css.expandContainer + " " + (expanded ? css.buttonExpanded : "")} imageClassName={css.expand} imageIdentity={expanded ? ImageIdentity.Close :ImageIdentity.Expand} />
                <div className={css.mobileListContainer + " " + (expanded ? css.barExpanded : "")}>
                    {getBarItems()}
                </div>
            </>);
        } else {
            return (getBarItems());
        }
    }

    return (
        <div className={css.bottombar}>
            {createBottomView()}
            <div className={css.copyright}>
                {new Date().getFullYear()} © Senapp Studios, Albin Björklund
            </div>
        </div>
    );
};