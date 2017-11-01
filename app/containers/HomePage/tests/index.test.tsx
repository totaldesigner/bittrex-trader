/**
 * Testing our MainSection component
 */
jest.mock('../style.css', () => jest.fn());

import { mount } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import HomePage, { IHomePageProps } from '../index';

import LocaleProvider from '../../../components/LocaleProvider/index';
import { translationMessages } from '../../../i18n';
import configureStore from '../../../store';

const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

const renderComponent = (props = {}) => mount(
  <Provider store={store}>
    <LocaleProvider messages={translationMessages}>
      <HomePage {...props} />
    </LocaleProvider>
  </Provider>,
);

describe('<HomePage />', () => {
  it('should render a <button> tag if no route is specified', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('section').length).toEqual(1);
  });

  it('should not adopt a type attribute when rendering a section', () => {
    const type = 'submit';
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('section').prop('type')).toBeUndefined();
  });
});
