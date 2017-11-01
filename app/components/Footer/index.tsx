import * as classNames from 'classnames';
import * as React from 'react';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

import * as style from './style.css';

interface IFooterProps {
  intl?: intlShape;
}

interface IFooterState {
  /* empty */
}

class Footer extends React.Component<IFooterProps, IFooterState> {

  public render() {
    return (
      <footer>
        FOOTER
      </footer>
    );
  }
}

export default injectIntl(Footer);
