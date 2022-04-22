import * as React from 'react';
import { LegalContainer } from './LegalContainer';

import css from './Attributions.module.css';

type Props = {
    expanded?: boolean;
}

const DateUpdated = '2021/09/04';

export const Attributions: React.FC<Props> = ({ expanded = false }) => (
    <LegalContainer header="Attributions on Football Simulator Apps" dateUpdated={DateUpdated} expanded={expanded}>
        <h2>Attributions</h2>
        <ul>
            <b> Translations </b>
            <li>
            Russian translation by
                <a href="https://www.fiverr.com/wasteland_">Mikhail Orenkin</a>
            </li>
            <b> Shared Images/Textures </b>
            <li>
            Original Dice icon
                <a href="https://www.iconspng.com/image/46051/simple-dice"
                >Link</a
                >
            from https://www.iconspng.com
            </li>
            <li>
            Original Tournament Bracket icon by
                <a href="https://www.flaticon.com/authors/freepik">Freepik</a>
            from www.flaticon.com
            </li>
            <li>
            Original Shuffle icon by
                <a href="http://simpleicon.com/shuffle.html">simpleicon</a>
            from www.simpleicon.com
            </li>
            <li>
            Original Attendance icon by
                <a href="https://www.flaticon.com/authors/freepik">Freepik</a>
            from www.flaticon.com
            </li>
            <li>
            Original Weather icon by
                <a href="https://www.flaticon.com/authors/bqlqn">bqlqn</a>
            from www.flaticon.com
            </li>
            <li>
            Original Seed icon by
                <a href="https://www.flaticon.com/authors/freepik">Freepik</a>
            from www.flaticon.com
            </li>
            <li>
            Original Prize icon by
                <a href="https://www.flaticon.com/authors/freepik">Freepik</a>
            from www.flaticon.com
            </li>
            <li>
            Original Man icon by
                <a href="https://www.flaticon.com/authors/freepik">Freepik</a>
            from www.flaticon.com
            </li>
            <li>
            Original Trashcan icon by
                <a href="https://www.flaticon.com/authors/sergiu-bagrin"
                >Sergiu Bagrin</a
                >
            from www.flaticon.com
            </li>
            <li>
            Originial Football player silhouettes by
                <a href="https://www.freepik.com/freepik">Freepik</a> from
            www.freepik.com
            </li>
            <li>
            Original Star icon
                <a href="http://simpleicon.com/star.html">Link</a> from
            www.simpleicon.com
            </li>
            <li>
            Original Tactics icon by
                <a href="https://www.flaticon.com/authors/freepik">Freepik</a>
            from www.flaticon.com
            </li>
            <li>
            Original Venue icon by
                <a href="https://www.onlinewebfonts.com/icon/147063">Pablo</a>
            from www.onlinewebfonts.com
            </li>
            <b> International Football Simulator </b>
            <li>
            Chameria flag by
                <a
                    href="https://commons.wikimedia.org/wiki/File:Flag_of_Chameria_(unofficial).jpg"
                >MrSean101</a
                >
            from www.wikipedia.com
            </li>
            <li>
            Felvidek flag by
                <a
                    href="https://sv.m.wikipedia.org/wiki/Fil:Felvidek_(Upper_Hungary)_football_flag.png"
                >Hammersfan</a
                >
            from www.wikipedia.com
            </li>
            <li>
            Padania flag by
                <a
                    href="https://commons.wikimedia.org/wiki/File:Flag_of_Padania.svg"
                >Orzetto</a
                >
            from www.wikipedia.com
            </li>
            <li>
            Parishes of Jersey flag by
                <a href="https://commons.wikimedia.org/wiki/File:Jersey_coa.svg"
                >PaD</a
                >
            from www.wikipedia.com
            </li>
            <li>
            Raetia flag by
                <a
                    href="https://commons.wikimedia.org/wiki/File:Raetia_flag.jpg"
                >Dandej</a
                >
            from www.wikipedia.com
            </li>
            <li>
            Sardinia flag by
                <a
                    href="https://commons.wikimedia.org/wiki/File:Flag_of_Sardinia,_Italy.svg"
                >ANGELUS</a
                >
            from www.wikipedia.com
            </li>
            <li>
            Lezgians flag by
                <a
                    href="https://commons.wikimedia.org/wiki/File:Flag_of_Caucasian_Albania_(Lekia_and_Shirvan).jpg"
                >Шарваланг</a
                >
            from www.wikipedia.com
            </li>
            <li>
            Panjab flag by
                <a
                    href="https://commons.wikimedia.org/wiki/File:Panjab_football_flag.png"
                >Hammersfan</a
                >
            from www.wikipedia.com
            </li>
            <li>
            United Koreans In Japan flag by
                <a
                    href="https://commons.wikimedia.org/wiki/File:Unification_flag_of_Korea.svg"
                >Various Authors, original upload by Valentim</a
                >
            from www.wikipedia.com
            </li>
            <li>
            Darfur flag
                <a
                    href="https://commons.wikimedia.org/wiki/File:Flag_of_Darfur.svg"
                >original upload by Walden69
                </a>
            from www.wikipedia.com
            </li>
            <li>
            Matabeleland flag by
                <a
                    href="https://commons.wikimedia.org/wiki/File:Matabeleland_football_flag.png"
                >Hammersfan</a
                >
            from www.wikipedia.com
            </li>
            <li>
            Cascadia flag by
                <a
                    href="https://commons.wikimedia.org/wiki/File:Flag_of_Cascadia.svg"
                >Vanisaac, orignal upload by Lexicon
                </a>
            from www.wikipedia.com
            </li>
            <li>
            Alderney flag by
                <a
                    href="https://commons.wikimedia.org/wiki/File:Flag_of_Alderney.svg"
                >Denelson83</a
                >
            from www.wikipedia.com
            </li>
            <li>
            Gotland flag
                <a
                    href="https://commons.wikimedia.org/wiki/File:Flag_of_Gotland.svg"
                >original upload by AxG</a
                >
            from www.wikipedia.com
            </li>
            <li>
            Hitra flag by
                <a
                    href="https://commons.wikimedia.org/wiki/File:Hitra_crest_flag.svg"
                >Mono</a
                >
            from www.wikipedia.com
            </li>
            <li>
            Western Isles flag by
                <a
                    href="https://commons.wikimedia.org/wiki/File:Western_Isles_Council_Flag.svg"
                >Leonardo Piccioni de Almeida</a
                >
            from www.wikipedia.com
            </li>
            <li>
            Gozo flag by
                <a
                    href="https://commons.wikimedia.org/wiki/File:Flag_of_Gozo.svg"
                >Sannita</a
                >
            from www.wikipedia.com
            </li>
            <li>
            Provence flag by
                <a
                    href="https://commons.wikimedia.org/wiki/File:Drapeau_de_Provence_%C2%AB_ancien_%C2%BB.svg"
                >Pce13</a
                >
            from www.wikipedia.com
            </li>
            <li>
            Two Sicilies flag by
                <a
                    href="https://commons.wikimedia.org/wiki/File:Flag_of_the_Kingdom_of_the_Two_Sicilies_(1816).svg"
                >F l a n k e r</a
                >
            from www.wikipedia.com
            </li>
            <li>
            Saint Barthelemy flag by
                <a
                    href="https://commons.wikimedia.org/wiki/File:Flag_of_Saint_Barthelemy_(local).svg"
                >Superbenjamin with coat of arms from user Manassas</a
                >
            from www.wikipedia.com
            </li>
            <li>
            Madeira flag by
                <a
                    href="https://commons.wikimedia.org/wiki/File:Flag_of_Madeira.svg"
                >
                Zscout370, original by Brian Boru</a
                >
            from www.wikipedia.com
            </li>
            <li>
            Saba flag by
                <a
                    href="https://commons.wikimedia.org/wiki/File:Flag_of_Saba.svg"
                >
                Denelson83</a
                >
            from www.wikipedia.com
            </li>
            <li>
            Sint Eustatius flag by
                <a href="https://commons.wikimedia.org/wiki/File:Flag_of_Sint_Eustatius.svg">
                    Andrwsc
                </a>
            from www.wikipedia.com
            </li>
            <li>
            Ascension Island flag by
                <a
                    href="https://commons.wikimedia.org/wiki/File:Flag_of_Ascension_Island.svg"
                >HowFalcons</a
                >
            from www.wikipedia.com
            </li>
            <li>
            Lima flag by
                <a
                    href="https://commons.wikimedia.org/wiki/File:Flag_of_Lima.svg"
                >Huhsunqu</a
                >
            from www.wikipedia.com
            </li>
            <li>
            Montevideo flag by
                <a href="https://www.reddit.com/user/cpvrn">cpvrn</a>
            from www.reddit.com
            </li>
        </ul>
    </LegalContainer>
);