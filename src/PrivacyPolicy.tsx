import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ExpandMore";

import MuiAccordion, {
  AccordionProps
} from "@mui/material/Accordion";

import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses
} from "@mui/material/AccordionSummary";

import { styled } from '@mui/material/styles';


const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)'
}));

interface GooglePrivacyPolicyProps {
  title?: string;
}

const GooglePrivacyPolicy = ({ title = "AdMob Privacy Policy" }: GooglePrivacyPolicyProps) => (
  <Link href="https://support.google.com/admob/answer/6128543?hl=en" color="info.main">{title}</Link>
);

const PrivacyPolicy = () => {
  return (
    <Container>
      <Typography variant="h5" sx={{ mt: 2 }}>
        Just Bucket Privacy Policy
      </Typography>
      <Typography sx={{ mt: 2, mb: 2, whiteSpace: 'pre-line' }}>
        <strong>Effective Date:</strong> January 3, 2025

        {"\n"}{"\n"}Thank you for choosing Just Bucket! Your privacy is important to us.
        This Privacy Policy explains how we collect, use, and protect your information when you use our app, Just Bucket.
      </Typography>
      <Accordion>
        <AccordionSummary>
          <Typography component="span">
            Information We Collect
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            <strong>a. Personal Information</strong>
            {"\n"}We do not collect personally identifiable information, such as your name, email address, or phone number.

            {"\n\n"}<strong>b. Non-Personal Information</strong>
            {"\n"}We may collect non-personal information automatically, including:

            <ul>
              <li>Device information (e.g., model, operating system version)</li>
              <li>Usage data (e.g., app features accessed, session duration)</li>
              <li>Log data (e.g., IP address, app crash reports)</li>
            </ul>

            <strong>c. Ad-Related Information</strong>
            {"\n"}We use Google AdMob to display native ads, which may collect data for ad personalization, including:

            <ul>
              <li>Advertising identifiers (e.g., Apple’s IDFA).</li>
              <li>Location data (if permitted).</li>
              <li>App interactions and engagement metrics.</li>
            </ul>

            For more information, refer to <GooglePrivacyPolicy />.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography component="span">
            Legal Basis for Processing Data
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            We process data based on the following legal grounds:
            <ul>
              <li>Consent: When you agree to personalized ads.</li>
              <li>Legitimate Interests: To improve app performance and provide relevant content.</li>
              <li>Legal Obligation: When required to comply with laws.</li>
            </ul>
            You may withdraw consent at any time by adjusting your device’s privacy settings.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography component="span">
            How We Use Your Information
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            We use the information collected to:
            <ul>
              <li>Provide and improve app functionality.</li>
              <li>Personalize advertisements displayed within the app.</li>
              <li>Monitor app performance and resolve technical issues.</li>
              <li>Comply with legal requirements.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography component="span">
            User Consent and Opt-Out Options
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            You can control your privacy preferences as follows:
            
            <ul>
              <li>Disable personalized ads through your device, if applicable.</li>
              <li>Adjust app permissions through your device settings.</li>
              <li>Uninstall the application.</li>
              <li>Opt-Out of Ads Personalization: <Link href="https://myadcenter.google.com/personalizationoff?sasb=true&ref=ad-settings">Google Ads Settings</Link></li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography component="span">
            Data Sharing and Disclosure
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            We do not sell, trade, or rent your personal information. However, we may share non-personal data with:
            <ul>
              <li>Third-party analytics tools to evaluate app performance.</li>
              <li>Advertising partners (such as AdMob) for ad personalization.</li>
            </ul>
            We may disclose your data if required by law or to protect our legal rights.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography component="span">
            Data Retention Policy
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            We retain data only as long as necessary for the purposes stated in this Privacy Policy:

            <ul>
              <li>Advertising data may be retained based on AdMob’s policies.</li>
            </ul>

            We encourage you to review their privacy policies to understand how your data is handled:
            {"\n"}<GooglePrivacyPolicy />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography component="span">
            Third-Party Links and Services
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            Just Bucket may contain links to third-party websites or services.
            We are not responsible for their privacy practices, and we recommend reviewing their policies before providing any personal data.

            {"\n"}{"\n"}Just Bucket integrates third-party services, including AdMob, which may collect and use your information under their own privacy policies.
            
            {"\n"}{"\n"}We encourage you to review their privacy policies to understand how your data is handled:
            {"\n"}<GooglePrivacyPolicy />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography component="span">
            Cookies and Tracking Technologies
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            We do not use cookies or tracking technologies. However, our third-party partners, such as Google AdMob, use cookies and similar technologies to:

            <ul>
              <li>Track user interactions and app performance.</li>
              <li>Display targeted advertisements.</li>
              <li>You can manage cookies through your device settings or browser preferences.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography component="span">
            Your Rights
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            You have the right to:

            <ul>
              <li>Opt-out of personalized ads by adjusting your device settings.</li>
              <li>Request access to the data we collect about you.</li>
              <li>Request deletion of your data where applicable.</li>
            </ul>

            For assistance, please contact us.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography component="span">
            Security
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            We implement reasonable security measures to protect your data.
            However, no method of electronic storage or transmission is 100% secure, and we cannot guarantee absolute security.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography component="span">
            Children’s Privacy
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            Just Bucket is not intended for children under the age of 13. We do not knowingly collect data from children.
            If you believe we have collected information from a child, please contact us immediately.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography component="span">
            Changes to This Privacy Policy
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            We may update this Privacy Policy from time to time and without notice.
            We recommend reviewing this policy periodically for changes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography component="span">
            Contact Us
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            If you have any questions about this Privacy Policy or need assistance with your privacy rights, please contact us:
            {'\n'}{'\n'}<Link href="mailto:contact@justbucket.app" color="info.main">contact@justbucket.app</Link>.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default PrivacyPolicy;