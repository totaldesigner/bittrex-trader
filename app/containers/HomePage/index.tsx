import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as classNames from 'classnames';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import * as style from './style.css';

export interface IHomePageProps<T> {
  intl?: intlShape;
}

export interface IHomePageState {
}

export class HomePage extends React.PureComponent<IHomePageProps<any>, IHomePageState> {

  constructor(props?: IHomePageProps<any>, context?: any) {
    super(props, context);
  }

  public render() {

    return (
      <div>
        <Header />
        <section>
          SECTION
        </section>
        <Footer />
      </div>
    );
  }
}

export default injectIntl(HomePage);
