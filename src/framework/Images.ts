export enum ImageIdentity {
    None,
    Instagram,
    Youtube,
    Twitter,
    Reddit,
    Discord,
    SenappStudios,
    Moon,
    Sun,
}

export type ImageInformation = {
    url: string;
    fontawesome?: boolean;
}

export const ImageStore = new Map<ImageIdentity, ImageInformation>([
    [ImageIdentity.Instagram, { url: 'fab fa-instagram', fontawesome: true }],
    [ImageIdentity.Youtube, { url: 'fab fa-youtube', fontawesome: true }],
    [ImageIdentity.Twitter, { url: 'fab fa-twitter', fontawesome: true }],
    [ImageIdentity.Reddit, { url: 'fab fa-reddit', fontawesome: true }],
    [ImageIdentity.Discord, { url: 'fab fa-discord', fontawesome: true }],
    [ImageIdentity.SenappStudios, { url: '../resources/logo.png' }],
    [ImageIdentity.Moon, { url: 'fas fa-moon', fontawesome: true }],
    [ImageIdentity.Sun, { url: 'fas fa-sun', fontawesome: true }],
]);