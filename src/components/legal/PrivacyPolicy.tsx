import * as React from 'react';
import { LegalContainer } from './LegalContainer';

import css from './PrivacyPolicy.module.css';

type Props = {
    expanded?: boolean;
}

const DateUpdated = '2021/09/04';

export const PrivacyPolicy: React.FC<Props> = ({ expanded = false }) => (
    <LegalContainer header="Privacy Policy on Football Simulator Apps" dateUpdated={DateUpdated} expanded={expanded}>
        <h1>Privacy Policy</h1>
        <p>
            In this context "Senapp Studios apps" refers to any "Football
            Simulator" apps published by Senapp Studios.
        </p>
        <p>
            Senapp Studios apps are built and published as Ad Supported apps.
            This SERVICE is the same for all apps published by Senapp Studios
            and is provided by Senapp Studios at no cost and is intended for
            use as is.
        </p>
        <p>
            This page is used to inform visitors regarding our policies with
            the collection, use, and disclosure of Personal Information if
            anyone decided to use our Service.
        </p>
        <p>
            If you choose to use our Service, then you agree to the collection
            and use of information in relation to this policy. The Personal
            Information that we collect is used for providing and improving
            the Service. we will not use or share your information with anyone
            except as described in this Privacy Policy.
        </p>
        <p>
            The terms used in this Privacy Policy have the same meanings as in
            our Terms and Conditions, which is accessible at this page
        </p>
        <b>Information Collection and Use</b>
        <p>
            For a better experience, while using our Service, we will save
            user entered data on your device, things such as but not limited
            to user settings, team data and saved tournaments. This
            information is stored on your device and only there. We log
            general events such as but not limited to teams created, edited
            and or deleted. We do this to gauge user interaction and to
            improve the quality of the application. You have the option to
            disable event logging in the in-game settings menu
        </p>
        <p>
            The app does use third party services that may collect information
            used to identify you.
        </p>
        <p>
            Link to privacy policy of third party service providers used by
            the app
        </p>
        <ul>
            <li>
                <a href="https://support.google.com/admob/answer/6128543?hl=en">
                    Admob
                </a>
            </li>
            <li>
                <a href="https://unity3d.com/legal/privacy-policy">
                    Unity Privacy Policy
                </a>
            </li>
            <li>
                <a href="https://firebase.google.com/support/privacy">
                    Firebase Analytics
                </a>
            </li>
        </ul>
        <b>Opt-out of targeted advertisments</b>
        <p>
            You can opt-out of interest-based advertising on your mobile
            device by checking the privacy settings of your Android or iOS
            device and selecting “limit ad tracking” if you are on Apple iOS
            or “opt-out of interest based ads” if you are on Android. The
            option to opt-out of personalized ads in the game can be found in
            the in-game settings menu
        </p>
        <b>Log Data</b>
        <p>
            We want to inform you that whenever you use our Service, in a case
            of an error in the app we collect data and information (through
            third party products) on your phone called Log Data. This Log Data
            may include information such as your device Internet Protocol
            (“IP”) address, device name, operating system version, the
            configuration of the app when utilizing our Service, the time and
            date of your use of the Service, and other statistics.
        </p>

        <b>Cookies</b>
        <p>
            Cookies are files with a small amount of data that are commonly
            used as anonymous unique identifiers. These are sent to your
            browser from the websites that you visit and are stored on your
            device's internal memory.
        </p>
        <p>
            This Service does not use these “cookies” explicitly. However, the
            app may use third party code and libraries that use “cookies” to
            collect information and improve their services. You have the
            option to either accept or refuse these cookies and know when a
            cookie is being sent to your device. If you choose to refuse our
            cookies, you may not be able to use some portions of this Service.
        </p>
        <b>Service Providers</b>
        <p>
            We may employ third-party companies and individuals due to the
            following reasons:
        </p>
        <ul>
            <li>To facilitate our Service;</li>
            <li>To provide the Service on our behalf;</li>
            <li>To perform Service-related services; or</li>
            <li>To assist us in analyzing how our Service is used.</li>
        </ul>
        <p>
            We want to inform users of this Service that these third parties
            have access to your Personal Information. The reason is to perform
            the tasks assigned to them on our behalf. However, they are
            obligated not to disclose or use the information for any other
            purpose.
        </p>
        <b>Security</b>
        <p>
            We value your trust in providing us your Personal Information,
            thus we are striving to use commercially acceptable means of
            protecting it. But remember that no method of transmission over
            the internet, or method of electronic storage is 100% secure and
            reliable, and we cannot guarantee its absolute security.
        </p>
        <b>Links to Other Sites</b>
        <p>
            This Service may contain links to other sites. If you click on a
            third-party link, you will be directed to that site. Note that
            these external sites are not operated by us. Therefore, we
            strongly advise you to review the Privacy Policy of these
            websites. we have no control over and assume no responsibility for
            the content, privacy policies, or practices of any third-party
            sites or services.
        </p>
        <b>Children’s Privacy</b>
        <p>
            These Services do not address anyone under the age of 13. we do
            not knowingly collect personally identifiable information from
            children under 13. In the case we discover that a child under 13
            has provided us with personal information, we immediately delete
            this from our servers. If you are a parent or guardian and you are
            aware that your child has provided us with personal information,
            please contact us so that we will be able to do necessary actions.
        </p>
        <b>Changes to This Privacy Policy</b>
        <p>
            We may update our Privacy Policy from time to time. Thus, you are
            advised to review this page periodically for any changes. we will
            notify you of any changes by posting the new Privacy Policy on
            this page. These changes are effective immediately after they are
            posted on this page.
        </p>
    </LegalContainer>
);