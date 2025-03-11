import { toUrl } from '../utils/connection';
import { ImageIdentity } from './images';

export enum ProjectIdentity {
    None,
    IFS,
    EFS,
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
    photos: string[];
}


const IFSProject: ProjectInformation = {
    type: ProjectIdentity.IFS,
    icon: ImageIdentity.IFS,
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
    url: toUrl(`/projects/ifs`),
    photos: []
};

const EFSProject: ProjectInformation = {
    type: ProjectIdentity.EFS,
    icon: ImageIdentity.EFS,
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
    url: toUrl(`/projects/efs`),
    photos: []
};

export const ProjectStore = new Map<ProjectIdentity, ProjectInformation>([
    [ProjectIdentity.IFS, IFSProject],
    [ProjectIdentity.EFS, EFSProject],
]);