import * as classNames from 'classnames';
import * as React from 'react';

import * as style from './style.css';

interface IHeaderProps {
}

interface IHeaderState {
}

class Header extends React.Component<IHeaderProps, IHeaderState> {

  constructor(props?: IHeaderProps, context?: any) {
    super(props, context);
  }

  public render() {

    return (
      <header>
        HEADER
      </header>
    );
  }
}

export default Header;
