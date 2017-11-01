/**
 * Testing our Footer component
 */
jest.mock('../style.css', () => jest.fn());
jest.mock('../../../images/blog.svg', () => 'blog.svg');
jest.mock('../../../images/facebook.svg', () => 'facebook.svg');

import { mount } from 'enzyme';
import * as React from 'react';
import Footer from '../index';

import { translationMessages } from '../../../i18n';
import LocaleProvider from '../../LocaleProvider/index';

describe('<Footer />', () => {
  it('should render the Footer', () => {
    const renderedComponent = mount(
      <LocaleProvider messages={translationMessages}>
        <Footer />
      </LocaleProvider>,
    );
    expect(renderedComponent.find('footer').length).toEqual(1);
  });
});
