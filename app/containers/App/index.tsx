import * as classNames from 'classnames';
import * as React from 'react';

export interface IAppProps {
  className?: string;
  location?: any;
  route?: any;
}

interface IAppState {
}

export class App extends React.Component<IAppProps, IAppState> {

  constructor(props?: IAppProps, context?: any) {
    super(props, context);
  }

  public render() {
    return React.Children.only(this.props.children);
  }
}

export default App;
