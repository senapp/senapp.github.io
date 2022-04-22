import * as React from 'react';
import { ImageIdentity, ImageStore } from '../../framework/images';
import { filterCssClasses } from '../../utils/css';

import css from './Image.module.css';

type Props = {
    imageIdentity: ImageIdentity;
    containerClassName?: string;
    imageClassName?: string;
}

export const Image: React.FC<Props> = ({ imageIdentity, containerClassName = '', imageClassName = '' }) => {
    const imageInfo = ImageStore.get(imageIdentity);
    if (!imageInfo) {
        return null;
    }

    const containerClasses = filterCssClasses({
        [css.imageContainer]: true,
        [containerClassName]: !!containerClassName,
    });

    const imageClasses = filterCssClasses({
        [imageInfo.url]: !!imageInfo.fontawesome,
        [css.image]: true,
        [imageClassName]: !!imageClassName,
    });

    return (
        <div className={containerClasses}>
            {imageInfo.fontawesome
                ? <i className={imageClasses} />
                : <img className={imageClasses} src={imageInfo.url} />}
        </div>
    );
};