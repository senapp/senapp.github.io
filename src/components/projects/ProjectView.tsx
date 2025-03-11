import * as React from 'react';
import { ProjectInformation } from '../../framework/projects';
import { Image } from '../common/Image';
import css from './ProjectView.module.css';
import { useEffect, useReducer, useState } from 'react';
import { isMobile, isPortrait } from '../../framework/settings';
import { Button } from '../common/Button';

type Props = {
    project: ProjectInformation | undefined;
}

export const ProjectView: React.FC<Props> = ({ project }) => {
    if (!project) {
        return null;
    }

    const mobileView = isPortrait() || isMobile();
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    useEffect(() => { window.addEventListener('resize', forceUpdate); }, []);

    const createLinksInText = (text: string): string => {
        var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        return text.replace(exp,`<a class=${css.link} href='$1'>Link</a>`);
    };

    useEffect(() => {
        let element = document.getElementById("#description");
        if (element){
            element.innerHTML = createLinksInText(project.description);
        }
    });

    const [galleryLimit, setGalleryLimit] = useState(5);   

    return (
        <div className={css.projectContainer}>
            <div className={mobileView ? css.projectMainMobile : css.projectMain}>
                <Image containerClassName={mobileView ? css.projectIconContainerMobile  : css.projectIconContainer} imageClassName={css.projectIcon} imageIdentity={project.icon} />
                <div className={css.projectInfoRight}>
                    <div className={css.projectName}>
                        <h3>Name</h3>
                        <h1>{project.name}</h1>
                    </div>
                    <div className={css.projectLinks}>
                        <h3>Links</h3>
                        <div className={css.projectLinksContainer}>
                            {project.links.map((link, index) => <>
                                {index !== 0 && <span className={css.linkSeperator}>{', '}</span>}
                                <a target="_blank" className={css.link} key={index} href={link.url}>{link.name}</a>
                            </>)}
                        </div>
                    </div>
                    <div className={css.projectTools}>
                        <h3>Tools</h3>
                        <p className={css.projectToolsText}>{project.tools.join(', ')}</p>
                    </div>
                </div>
            </div>
            <div className={css.projectInfo}>
                <h2>Description</h2>
                <p id="#description" className={css.description}></p>
                {project.photos.length > 0 &&
                <div className={mobileView ? css.projectPhotosMobile : css.projectPhotos}>
                    <div className={css.galleryTopBar}>
                        <h2>Gallery</h2>
                        {project.photos.length >= galleryLimit &&
                            <Button className={css.showMoreButton} onClick={() => setGalleryLimit(galleryLimit + 5)} label="Show more" />
                        }
                    </div>
                    <div className={css.galleryContainer}>
                        {project.photos.map((photo, index) => {
                            if (index >= galleryLimit) {
                                return null;
                            }
                            return <img className={mobileView ? css.galleryPhotoMobile : css.galleryPhoto} src={photo} />;
                        })}
                    </div>
                    <div className={css.galleryPhotosText}>{`Showing ${Math.min(galleryLimit, project.photos.length)} of ${project.photos.length} photos`}</div>
                </div>
                }
            </div>
        </div>
    );
};
