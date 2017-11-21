import * as React from 'react';
import * as ReactDOM from 'react-dom';
import logger from '../../utils/logger';

interface IErrorBoundaryProps {
}

interface IErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {

  constructor(props?: IErrorBoundaryProps, context?: any) {
    super(props, context);
    this.state = {
      hasError: false,
    };
  }

  public componentDidCatch(error, info) {
    this.setState({ hasError: true });
    logger.error(`error: ${error}, info: ${info}`);
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return  React.Children.only(this.props.children);
  }
}

export default ErrorBoundary;
