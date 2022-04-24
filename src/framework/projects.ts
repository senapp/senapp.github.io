import { toUrl } from '../utils/connection';
import { ImageIdentity } from './images';

export enum ProjectIdentity {
    None,
    IFS,
    EFS,
    Chess,
    GameEngine,
    Pathfinding,
    Skeadeals,
    BBGranden,
}

export type Link = {
    url: string;
    name: string;
}

export type ProjectInformation = {
    type: ProjectIdentity;
    icon: ImageIdentity;
    name: string;
    links: Link[];
    tools: string[];
    description: string;
    public: boolean;
    url: string;
}


const IFSProject: ProjectInformation = {
    type: ProjectIdentity.IFS,
    icon: ImageIdentity.IFS,
    name: 'International Football Simulator',
    links: [
        { name: 'Android', url: 'https://play.google.com/store/apps/details?id=com.Senapp.FC2018S' },
        { name: 'IOS', url: 'https://apps.apple.com/us/app/international-fotball-sim/id1500480022' }
    ],
    tools: [],
    description: '',
    public: true,
    url: toUrl(`/projects/ifs`),
};

const EFSProject: ProjectInformation = {
    type: ProjectIdentity.EFS,
    icon: ImageIdentity.EFS,
    name: 'English Football Simulator',
    links: [
        { name: 'Android', url: 'https://play.google.com/store/apps/details?id=com.Senapp.ENGFS' },
    ],
    tools: [],
    description: '',
    public: true,
    url: toUrl(`/projects/efs`),
};

const ChessProject: ProjectInformation = {
    type: ProjectIdentity.Chess,
    icon: ImageIdentity.Chess,
    name: 'Chess',
    links: [
        { name: 'Github', url: 'https://github.com/senapp/ChessPython' },
    ],
    tools: [],
    description: '',
    public: false,
    url: toUrl(`/projects/chess`),
};

const GameEngineProject: ProjectInformation = {
    type: ProjectIdentity.GameEngine,
    icon: ImageIdentity.GameEngine,
    name: 'Senapp Game Engine',
    links: [
        { name: 'Github', url: 'https://github.com/senapp/senappGameEngine' },
    ],
    tools: [],
    description: '',
    public: false,
    url: toUrl(`/projects/senappGameEngine`),
};

const PathfindingProject: ProjectInformation = {
    type: ProjectIdentity.Pathfinding,
    icon: ImageIdentity.Pathfinding,
    name: 'Pathfinding Algorithms',
    links: [
        { name: 'Browser', url: 'https://senapp.github.io/VisualPathfindingAlgorithms/dist/index.html' },
        { name: 'Github', url: 'https://github.com/senapp/VisualPathfindingAlgorithms' },
    ],
    tools: [],
    description: '',
    public: false,
    url: toUrl(`/projects/pathfinding`),
};

const SkeadealsProject: ProjectInformation = {
    type: ProjectIdentity.Skeadeals,
    icon: ImageIdentity.Skeadeals,
    name: 'Skeådeals',
    links: [
        { name: 'Award', url: 'https://www.facebook.com/watch/?v=637417440390173' },
    ],
    tools: [],
    description: '',
    public: false,
    url: toUrl(`/projects/skeadeals`),
};

const BBGrandenProject: ProjectInformation = {
    type: ProjectIdentity.BBGranden,
    icon: ImageIdentity.BBGranden,
    name: 'B&B Gränden Website',
    links: [
        { name: 'Website', url: 'https://www.bbgranden.se/pages/home' },
    ],
    tools: [],
    description: '',
    public: false,
    url: toUrl(`/projects/bbgranden`),
};


export const ProjectStore = new Map<ProjectIdentity, ProjectInformation>([
    [ProjectIdentity.IFS, IFSProject],
    [ProjectIdentity.EFS, EFSProject],
    [ProjectIdentity.Chess, ChessProject],
    [ProjectIdentity.GameEngine, GameEngineProject],
    [ProjectIdentity.Pathfinding, PathfindingProject],
    [ProjectIdentity.Skeadeals, SkeadealsProject],
    [ProjectIdentity.BBGranden, BBGrandenProject],
]);