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
    IFS,
    EFS,
    Chess,
    GameEngine,
    Pathfinding,
    Skeadeals,
    BBGranden,
    Kanji,
    JapanWorldMarker,
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
    [ImageIdentity.Reddit, { url: 'fab fa-reddit', fontawesome: true }],
    [ImageIdentity.Discord, { url: 'fab fa-discord', fontawesome: true }],
    [ImageIdentity.SenappStudios, { url: '../resources/logo.png' }],
    [ImageIdentity.Moon, { url: 'fas fa-moon', fontawesome: true }],
    [ImageIdentity.Sun, { url: 'fas fa-sun', fontawesome: true }],
    [ImageIdentity.IFS, { url: '../resources/projects/ifs.png' }],
    [ImageIdentity.EFS, { url: '../resources/projects/efs.png' }],
    [ImageIdentity.Chess, { url: '../resources/projects/chess.png' }],
    [ImageIdentity.GameEngine, { url: '../resources/projects/gameEngine.png' }],
    [ImageIdentity.Pathfinding, { url: '../resources/projects/pathfinding.png' }],
    [ImageIdentity.Skeadeals, { url: '../resources/projects/skeadeals.png' }],
    [ImageIdentity.BBGranden, { url: '../resources/projects/bbgranden.png' }],
    [ImageIdentity.Kanji, { url: '../resources/projects/kanji.png' }],
    [ImageIdentity.JapanWorldMarker, { url: '../resources/projects/japanworldmarker.png' }],
    [ImageIdentity.Expand, { url: '../resources/icons/menuBar.png' }],
    [ImageIdentity.Close, { url: '../resources/icons/close.png' }],
]);