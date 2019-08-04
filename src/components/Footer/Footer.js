import React from 'react';
import { Trans } from 'react-i18next';
import GitHubProfile from '../gitHubProfile/gitHubProfile';
import './Footer.scss';

const Footer = () => (
  <footer className="footer-section">
    <h2>
      <Trans>Developers</Trans>
    </h2>
    <div className="cards">
      <GitHubProfile
        name={<Trans>Yury Chuchvaha</Trans>}
        git="uniorunr"
        image="https://avatars2.githubusercontent.com/u/33601725?s=460&v=4"
      />
      <GitHubProfile
        name={<Trans>Evgeniy Oleshkevich</Trans>}
        git="systemghost"
        image="https://avatars3.githubusercontent.com/u/5677074?s=460&v=4"
      />
      <GitHubProfile
        name={<Trans>Darya Novak</Trans>}
        git="daryanovak"
        image="https://avatars1.githubusercontent.com/u/25826685?s=460&v=4"
      />
      <GitHubProfile
        name={<Trans>Yauheni Dauhala</Trans>}
        git="edovgalo"
        image="https://avatars0.githubusercontent.com/u/44709906?s=460&v=4"
      />
      <GitHubProfile
        name={<Trans>Anton Yahorau</Trans>}
        git="antosha33"
        image="https://avatars1.githubusercontent.com/u/28390094?s=400&v=4"
      />
      <GitHubProfile
        name={<Trans>Vadzim Zartaiski</Trans>}
        git="zartaich"
        image="https://avatars3.githubusercontent.com/u/33836291?s=460&v=4"
      />
      <GitHubProfile
        name={<Trans>Aliaksei Petrakou</Trans>}
        git="tppd67421"
        image="https://avatars2.githubusercontent.com/u/25455143?s=460&v=4"
      />
    </div>
  </footer>
);

export default Footer;
