import * as React from 'react';
import { ImageIdentity } from '../../framework/images';
import { getTheme, switchTheme, Theme } from '../../framework/theme';
import { toUrl } from '../../utils/connection';
import { BarItem } from './BarItem';
import { Image } from '../common/Image';

import css from './Topbar.module.css';
import { isMobile, isPortrait } from '../../framework/settings';
import { useEffect, useReducer, useState } from 'react';
import { scrollToTop, toggleScroll } from '../../utils/utils';

type Props = {
    isProjects: boolean;
}

export const Topbar: React.FC<Props> = ({ isProjects }) => {
    const [expanded, setExpanded] = useState(false);
    
    const mobileView = isPortrait() || isMobile();
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    useEffect(() => { window.addEventListener('resize', forceUpdate); }, []);

    const getLeftBarItems = () => {
        return(<ul className={!mobileView ? css.barListLeft : (css.mobileList + " " + css.barItemsExpanded)}>
            <BarItem label="Home" url={toUrl(`/pages/home`)} />
            {
                isProjects
                    ? <BarItem label="Projects" url={toUrl(`/pages/projects`)} />
                    : <BarItem label="Apps" url={toUrl(`/pages/apps`)} />
            }
            <BarItem label="Contact" url={toUrl(`/pages/contact`)} />
            <BarItem action={switchTheme} imageIdentity={getTheme() === Theme.Dark ? ImageIdentity.Sun : ImageIdentity.Moon} />
        </ul>);
    }

    const createTopLeftView = () => {
        if (mobileView) {
            return (<>
                <Image onClick={() => {
                    setExpanded(!expanded)
                    toggleScroll(expanded);
                    scrollToTop();
                }} containerClassName={css.expandContainer} imageClassName={css.expand} imageIdentity={expanded ? ImageIdentity.Close :ImageIdentity.Expand} />
                <div className={css.mobileListContainer + " " + (expanded ? css.barExpanded : "")}>
                    {getLeftBarItems()}
                </div>
            </>);
        } else {
            return (getLeftBarItems());
        }
    }

    return (
        <div className={css.topbar}>
            {createTopLeftView()}
            <ul className={css.barListRight}>
                <Image imageClassName={css.logo} imageIdentity={ImageIdentity.SenappStudios} />
            </ul>
        </div>
    );
};