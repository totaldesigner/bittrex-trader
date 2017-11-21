import * as classNames from 'classnames';
import * as React from 'react';

import * as style from './style.css';

interface IDataTableProps {
}

interface IDataTableState {
}

class DataTable extends React.Component<IDataTableProps, IDataTableState> {

  constructor(props?: IDataTableProps, context?: any) {
    super(props, context);
  }

  public header() {
    return null;
  }

  public render() {

    return (
      <table>
        {this.header()}
      </table>
    );
  }
}

export default DataTable;
