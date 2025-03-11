"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectStore = exports.ProjectIdentity = void 0;
const connection_1 = require("../utils/connection");
const images_1 = require("./images");
var ProjectIdentity;
(function (ProjectIdentity) {
    ProjectIdentity[ProjectIdentity["None"] = 0] = "None";
    ProjectIdentity[ProjectIdentity["IFS"] = 1] = "IFS";
    ProjectIdentity[ProjectIdentity["EFS"] = 2] = "EFS";
    ProjectIdentity[ProjectIdentity["Chess"] = 3] = "Chess";
    ProjectIdentity[ProjectIdentity["GameEngine"] = 4] = "GameEngine";
    ProjectIdentity[ProjectIdentity["Pathfinding"] = 5] = "Pathfinding";
    ProjectIdentity[ProjectIdentity["Skeadeals"] = 6] = "Skeadeals";
    ProjectIdentity[ProjectIdentity["BBGranden"] = 7] = "BBGranden";
    ProjectIdentity[ProjectIdentity["Kanji"] = 8] = "Kanji";
    ProjectIdentity[ProjectIdentity["JapanWorldMarker"] = 9] = "JapanWorldMarker";
})(ProjectIdentity = exports.ProjectIdentity || (exports.ProjectIdentity = {}));
const IFSProject = {
    type: ProjectIdentity.IFS,
    icon: images_1.ImageIdentity.IFS,
    name: 'International Football Simulator',
    links: [
        { name: 'Android', url: 'https://play.google.com/store/apps/details?id=com.Senapp.FC2018S' },
        { name: 'IOS', url: 'https://apps.apple.com/us/app/international-fotball-sim/id1500480022' }
    ],
    tools: ['C#', 'Unity', 'Firebase', 'Admob'],
    description: `Features:

Create a tournament with whatever options you like. You want a tournament set in Russia with 8 groups and 4 teams in each group, then you can do it. Want to simulate a four league system in which you have a different amount of teams in each group with custom names, then you can do it.

Create and edit teams, federations, players, want to change the name of something then you can do it. Each aspect has many things you can change.

Each match has an in-depth view of match statistics such as possession, who scored, which can be view live or after the match is complete.

Simulate international football in every possible way!

Privacy Policy: https://senapp.github.io/pages/legal.html?0
Terms and Conditions: https://senapp.github.io/pages/legal.html?1`,
    public: true,
    url: (0, connection_1.toUrl)(`/projects/ifs`),
    photos: [(0, connection_1.toUrl)(`/resources/projects/photos/ifs/ifs.png`)]
};
const EFSProject = {
    type: ProjectIdentity.EFS,
    icon: images_1.ImageIdentity.EFS,
    name: 'English Football Simulator',
    links: [
        { name: 'Android', url: 'https://play.google.com/store/apps/details?id=com.Senapp.ENGFS' },
    ],
    tools: ['C#', 'Unity', 'Admob'],
    description: `Features:

Create a tournament: 2, 4, 8 or 16 Group Stages in a group stage style tournament. 2 - 20 teams in the league tournament. You can also choose how many games each team plays. Elimination tournament, start the tournament from the final, semifinal, quarterfinal or the knockout stage.

You can also randomize the groups/league with either relatively good teams or completely random teams out of 68. You can also edit each group and team individually.

Custom Game; Place two teams out of 68 against each other and see what the result would be.

Create and Edit teams; You have the ability to create your own team, upload a custom logo, select a level and a name for the new team. You also have the ability to edit already existing teams and change their level, logo and name.

68 teams!

Privacy Policy: https://senapp.github.io/pages/legal.html?0
Terms and Conditions: https://senapp.github.io/pages/legal.html?1`,
    public: true,
    url: (0, connection_1.toUrl)(`/projects/efs`),
    photos: [(0, connection_1.toUrl)(`/resources/projects/photos/efs/efs.png`)]
};
const ChessProject = {
    type: ProjectIdentity.Chess,
    icon: images_1.ImageIdentity.Chess,
    name: 'Chess',
    links: [
        { name: 'Github', url: 'https://github.com/senapp/ChessPython' },
    ],
    tools: ['Python', 'PyGame'],
    description: `Chess made in python`,
    public: false,
    url: (0, connection_1.toUrl)(`/projects/chess`),
    photos: []
};
const GameEngineProject = {
    type: ProjectIdentity.GameEngine,
    icon: images_1.ImageIdentity.GameEngine,
    name: 'Senapp Game Engine',
    links: [
        { name: 'Github', url: 'https://github.com/senapp/senappGameEngine' },
    ],
    tools: ['C#', 'OpenTK', 'OpenGL'],
    description: `Senapp Game Engine is a simple game engine written in C# with OpenGL through OpenTK.

The main idea behind the engine was to explore game engine programming and make something that would be easy to use when creating a game and give quite good performance, basically modeled like a simple Unity3D but in your code editor.

Tutorials used:
GalacticGlum - Game Engine Tutorials
ThinMatrix - OpenGL 3D Game Tutorials
Cherno - Game Engine

Features:
Game object system
Component system
Scenes & scene management
Game object relation hierarchy
Transformation with translation, rotation & scaling with relation hierarchy
[UI] Font class with loading
[UI] Texts
[UI] Sprites
[UI] Buttons
[UI] TextButtons
[UI] Input fields
RaycastTarget/UI, enter/exit/click/unfocus with pixel precision for game objects
Keyboard input
Mouse input
Controller input
Model & texture loader
OBJ & DAE loader
Box collisions
Component renderers & shaders
Skybox rendering & shader
FrameBuffer & FrameBuffer rendering
Deferred rendering
Frame rate info
Wire frame rendering
Settings class & file
GraphicSettings, extension of Settings
Resource loading
Extension methods for vectors, math, & randomizing
Example programs`,
    public: false,
    url: (0, connection_1.toUrl)(`/projects/senappGameEngine`),
    photos: []
};
const PathfindingProject = {
    type: ProjectIdentity.Pathfinding,
    icon: images_1.ImageIdentity.Pathfinding,
    name: 'Pathfinding Algorithms',
    links: [
        { name: 'Browser', url: 'https://senapp.github.io/VisualPathfindingAlgorithms/dist/index.html' },
        { name: 'Github', url: 'https://github.com/senapp/VisualPathfindingAlgorithms' },
    ],
    tools: ['Typescript', 'React'],
    description: `Visualizer for pathfinding algorithms such as A*

Started as a pure Javascript project but was later converted to Typescript and React`,
    public: false,
    url: (0, connection_1.toUrl)(`/projects/pathfinding`),
    photos: []
};
const SkeadealsProject = {
    type: ProjectIdentity.Skeadeals,
    icon: images_1.ImageIdentity.Skeadeals,
    name: 'Skeådeals',
    links: [
        { name: 'Award', url: 'https://www.facebook.com/watch/?v=637417440390173' },
    ],
    tools: ['C#', 'Unity', 'Firebase - Database'],
    description: `Skeådeals was a coupon app that offered coupons from local companies in Skellefteå.

All discounts were one-time discounts and come up with a confirmation screen when used, this screen you would show to the cashier to use the coupon.

The app was active between 1 January 2020 and 1 July 2020 and coupons came and went constantly during that period.`,
    public: false,
    url: (0, connection_1.toUrl)(`/projects/skeadeals`),
    photos: []
};
const BBGrandenProject = {
    type: ProjectIdentity.BBGranden,
    icon: images_1.ImageIdentity.BBGranden,
    name: 'B&B Gränden Website',
    links: [
        { name: 'Website', url: 'https://www.bbgranden.se/pages/home' },
    ],
    tools: ['HTML', 'CSS', 'Javascript'],
    description: `Booking site for a hotel in Skellefteå, Sweden`,
    public: false,
    url: (0, connection_1.toUrl)(`/projects/bbgranden`),
    photos: []
};
const KanjiAppProject = {
    type: ProjectIdentity.Kanji,
    icon: images_1.ImageIdentity.Kanji,
    name: 'Kanji Practice',
    links: [
        { name: 'Browser', url: 'https://senapp.github.io/KanjiApp/dist/index.html' },
        { name: 'Github', url: 'https://github.com/senapp/KanjiApp' },
    ],
    tools: ['Typescript', 'React'],
    description: `Kanji practicing application for learning Japanese.`,
    public: false,
    url: (0, connection_1.toUrl)(`/projects/kanji`),
    photos: []
};
const JapanWorldMarkerProject = {
    type: ProjectIdentity.JapanWorldMarker,
    icon: images_1.ImageIdentity.JapanWorldMarker,
    name: 'Japan & World Marker',
    links: [
        { name: 'Browser', url: 'https://senapp.github.io/JapanAndWorldMarker/dist/index.html' },
        { name: 'Github', url: 'https://github.com/senapp/JapanAndWorldMarker' },
    ],
    tools: ['Typescript', 'React', 'OpenStreetMap'],
    description: `Marker application for recording which locations around Japan and in the world you have been to or wish to go to.`,
    public: false,
    url: (0, connection_1.toUrl)(`/projects/japanworldmarker`),
    photos: []
};
exports.ProjectStore = new Map([
    [ProjectIdentity.IFS, IFSProject],
    [ProjectIdentity.EFS, EFSProject],
    [ProjectIdentity.Chess, ChessProject],
    [ProjectIdentity.GameEngine, GameEngineProject],
    [ProjectIdentity.Pathfinding, PathfindingProject],
    [ProjectIdentity.Skeadeals, SkeadealsProject],
    [ProjectIdentity.BBGranden, BBGrandenProject],
    [ProjectIdentity.Kanji, KanjiAppProject],
    [ProjectIdentity.JapanWorldMarker, JapanWorldMarkerProject],
]);
//# sourceMappingURL=projects.js.map