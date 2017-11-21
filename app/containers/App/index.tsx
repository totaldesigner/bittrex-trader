import * as classNames from 'classnames';
import * as React from 'react';
import ErrorBoundary from '../ErrorBoundary';

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
    return (
      <ErrorBoundary>
        {this.props.children}
      </ErrorBoundary>
    );
  }
}

export default App;
