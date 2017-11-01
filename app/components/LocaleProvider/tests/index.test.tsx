import { shallow } from 'enzyme';
import * as React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';

import LocaleProvider from '../index';

const messages = defineMessages({
  someMessage: {
    defaultMessage: 'This is some default message',
    en: 'This is some en message',
    id: 'some.id',
  },
});

describe('<LocaleProvider />', () => {
  it('should render its children', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = shallow(
      <LocaleProvider messages={messages} locale="en">
        {children}
      </LocaleProvider>,
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
