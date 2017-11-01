import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, IndexRoute, Redirect, Route, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import './global.css';

import LocaleProvider from './components/LocaleProvider';
import App from './containers/App';
import configureStore from './store';

// Import i18n messages
import { translationMessages } from './i18n';

const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

const asyncComponent = (getComponent) => (
  class AsyncComponent extends React.Component<any, any> {
    public static Component: any;
    constructor() {
      super();
      this.state = {
        Component: AsyncComponent.Component,
        visible: false,
      };
    }
    public componentWillMount() {
      if (!this.state.Component) {
        getComponent().then((Component) => {
          AsyncComponent.Component = Component;
          setTimeout(() => {
            this.setState({Component});
          }, 0);
        });
      }
    }
    public render() {
      const {Component} = this.state;
      if (Component) {
        return (<Component {...this.props} />);
      }
      return (<div className={'wrap'} />);
    }
  }
);

// HomePage
const HomePage = asyncComponent(() => System.import('containers/HomePage').then((m) => m.default));

const render = (messages) => {
  ReactDOM.render(
    <Provider store={store}>
      <LocaleProvider messages={messages}>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={HomePage} />
          </Route>
        </Router>
      </LocaleProvider>
    </Provider>,
    document.getElementById('root'),
  );
};

// Hot reloadable translation json files
if (module.hot) {
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept('./i18n', () => {
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!global.Intl) {
  require.ensure([
    'intl',
    'intl/locale-data/jsonp/en.js',
    'intl/locale-data/jsonp/ko.js',
  ], (requires) => {
    require('intl');
    require('intl/locale-data/jsonp/en.js');
    require('intl/locale-data/jsonp/ko.js');
    render(translationMessages);
  });
} else {
  render(translationMessages);
}
