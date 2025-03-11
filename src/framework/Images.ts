export enum ImageIdentity {
    None,
    Instagram,
    Youtube,
    Twitter,
    SenappStudios,
    Moon,
    Sun,
    IFS,
    EFS,
    Expand,
    Close
}

export type ImageInformation = {
    url: string;
    fontawesome?: boolean;
}

export const ImageStore = new Map<ImageIdentity, ImageInformation>([
    [ImageIdentity.Instagram, { url: 'fab fa-instagram', fontawesome: true }],
    [ImageIdentity.Youtube, { url: 'fab fa-youtube', fontawesome: true }],
    [ImageIdentity.Twitter, { url: 'fab fa-twitter', fontawesome: true }],
    [ImageIdentity.SenappStudios, { url: '../resources/logo.png' }],
    [ImageIdentity.Moon, { url: 'fas fa-moon', fontawesome: true }],
    [ImageIdentity.Sun, { url: 'fas fa-sun', fontawesome: true }],
    [ImageIdentity.IFS, { url: '../resources/projects/ifs.png' }],
    [ImageIdentity.EFS, { url: '../resources/projects/efs.png' }],
    [ImageIdentity.Expand, { url: '../resources/icons/menuBar.png' }],
    [ImageIdentity.Close, { url: '../resources/icons/close.png' }],
]);