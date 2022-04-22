import * as React from 'react';
import { LegalContainer } from './LegalContainer';

import css from './Statements.module.css';

type Props = {
    expanded?: boolean;
}

const DateUpdated = '2021/09/04';

export const Statements: React.FC<Props> = ({ expanded = false }) => (
    <LegalContainer header="Statements on Football Simulator Apps" dateUpdated={DateUpdated} expanded={expanded}>
        <h2>Statments</h2>
        <p>
            In this context "Senapp Studios apps" refers to any "Football
            Simulator" apps published by Senapp Studios.
        </p>
        <p>
            Unless stated otherwise, no team, club, player, assciation, and or
            organization endorses, is connected, or associated with any of
            Senapp Studios apps and Senapp Studios makes no representation of
            any such endorsement, connection, or association. No image or
            likness of any club, player, team, association and or organization
            is intentionally used in any of Senapp Studios apps and any such
            similarity with any graphical element is co-incidental.
        </p>
        <p>
            Senapp Studios supports no political or religious connection some
            of the elements in our game may be connected to.
        </p>
        <p>
            All assets and materials in Senapp Studios apps are either made by
            Senapp Studios or added with the knowledgde that it can be used
            with or without attributon, check Attributons.
        </p>
        <p>
            If you feel a mistake has occurred then message Senapp Studios at
            help.senapp@gmail.com
        </p>
    </LegalContainer>
);