"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageStore = exports.ImageIdentity = void 0;
var ImageIdentity;
(function (ImageIdentity) {
    ImageIdentity[ImageIdentity["None"] = 0] = "None";
    ImageIdentity[ImageIdentity["Instagram"] = 1] = "Instagram";
    ImageIdentity[ImageIdentity["Youtube"] = 2] = "Youtube";
    ImageIdentity[ImageIdentity["Twitter"] = 3] = "Twitter";
    ImageIdentity[ImageIdentity["SenappStudios"] = 4] = "SenappStudios";
    ImageIdentity[ImageIdentity["Moon"] = 5] = "Moon";
    ImageIdentity[ImageIdentity["Sun"] = 6] = "Sun";
    ImageIdentity[ImageIdentity["IFS"] = 7] = "IFS";
    ImageIdentity[ImageIdentity["EFS"] = 8] = "EFS";
    ImageIdentity[ImageIdentity["Expand"] = 9] = "Expand";
    ImageIdentity[ImageIdentity["Close"] = 10] = "Close";
})(ImageIdentity = exports.ImageIdentity || (exports.ImageIdentity = {}));
exports.ImageStore = new Map([
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
//# sourceMappingURL=images.js.map