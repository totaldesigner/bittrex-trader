import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';

import { DEFAULT_LOCALE } from '../../constants/langs';

interface ILocaleProviderProps {
  locale?: string;
  messages?: any;
  children: any;
}

interface ILocaleProviderState {
  /* empty */
}

class LocaleProvider extends React.PureComponent<ILocaleProviderProps, ILocaleProviderState> {

  public render() {
    const locale = this.props.locale || DEFAULT_LOCALE;
    return (
      <IntlProvider
        locale={locale}
        key={locale}
        messages={this.props.messages[locale]}
      >
        {this.props.children}
      </IntlProvider>
    );
  }
}

export default LocaleProvider;
