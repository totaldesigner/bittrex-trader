/**
 * Testing our App comtainer
 */
import { mount, shallow } from 'enzyme';
import * as React from 'react';
import Footer from '../../../components/Footer/index';
import Header from '../../../components/Header/index';
import LocaleProvider from '../../../components/LocaleProvider/index';
import App from '../index';

// Import i18n messages
import { translationMessages } from '../../../i18n';

describe('<App />', () => {
  it('should render the Header', () => {
    const renderedComponent = mount(
      <LocaleProvider messages={translationMessages}>
        <App />
      </LocaleProvider>,
    );
    expect(renderedComponent.contains(<Header />)).toEqual(true);
  });

  it('should render the Footer', () => {
    const renderedComponent = mount(
      <LocaleProvider messages={translationMessages}>
        <App />
      </LocaleProvider>,
    );
    expect(renderedComponent.contains(<Footer />)).toEqual(true);
  });
});
