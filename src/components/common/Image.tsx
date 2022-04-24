import * as React from 'react';
import { ImageIdentity, ImageStore } from '../../framework/images';
import { filterCssClasses } from '../../utils/css';

import css from './Image.module.css';

type Props = {
    imageIdentity: ImageIdentity;
    containerClassName?: string;
    imageClassName?: string;
    aClassName?: string;
    href?: string;
}

export const Image: React.FC<Props> = ({ imageIdentity, containerClassName = '', imageClassName = '', aClassName = '', href }) => {
    const imageInfo = ImageStore.get(imageIdentity);
    if (!imageInfo) {
        return null;
    }

    const containerClasses = filterCssClasses({
        [css.imageContainer]: true,
        [css.imageFontAwesomeContainer]: !!imageInfo.fontawesome,
        [containerClassName]: !!containerClassName,
    });

    const imageClasses = filterCssClasses({
        [css.image]: true,
        [imageInfo.url]: !!imageInfo.fontawesome,
        [css.imageFontAwesome]: !!imageInfo.fontawesome,
        [imageClassName]: !!imageClassName,
    });

    const getImage = (): JSX.Element => (
        imageInfo.fontawesome
            ? <i className={imageClasses} />
            : <img className={imageClasses} src={imageInfo.url} />
    );

    return (
        <div className={containerClasses}>
            {href
                ? <a className={aClassName} href={href}>{getImage()}</a>
                : getImage()
            }
        </div>
    );
};