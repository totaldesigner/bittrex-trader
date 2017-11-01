/**
 * Testing our Header component
 */
jest.mock('../style.css', () => jest.fn());
jest.mock('../../Menu/style.css', () => jest.fn());
jest.mock('../../Sidebar/style.css', () => jest.fn());
jest.mock('../../../images/logo_papago.svg', () => 'logo_papago.svg');

import { mount } from 'enzyme';
import * as React from 'react';
import Header from '../index';

import { translationMessages } from '../../../i18n';
import LocaleProvider from '../../LocaleProvider/index';

describe('<Header />', () => {
  it('should render a header', () => {
    const renderedComponent = mount(
      <LocaleProvider messages={translationMessages}>
        <Header />
      </LocaleProvider>,
    );
    expect(renderedComponent.find('header').length).toEqual(1);
  });
});
