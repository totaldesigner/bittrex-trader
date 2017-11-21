import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BittrexActions from '../../actions/bittrex';
import { MarketSummary } from '../../models/MarketSummary';
import { IRootState } from '../../reducers';

import * as classNames from 'classnames';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import * as style from './style.css';

export interface IHomePageProps<T> {
  intl?: intlShape;
  bittrexActions?: typeof BittrexActions;
  marketSummaries: IMarketSummary[];
  ticker: ITicker;
}

export interface IHomePageState {
}

export class HomePage extends React.PureComponent<IHomePageProps<any>, IHomePageState> {

  constructor(props?: IHomePageProps<any>, context?: any) {
    super(props, context);
  }

  public componentDidMount() {
    this.props.bittrexActions.getMarketSummaries();
  }

  public componentWillReceiveProps(nextProps) {
    const marketSummaries = nextProps.marketSummaries;
    if (this.props.marketSummaries !== marketSummaries) {
      for (const marketSummary of marketSummaries) {
        this.props.bittrexActions.getTicker({ market: marketSummary.name });
      }
    }
  }

  public render() {
    const marketSummaries = this.props.marketSummaries;
    const ticker = this.props.ticker;

    return (
      <div>
        <Header />
        <section>
          SECTION
        </section>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state: IRootState) {
  return {
    marketSummaries: state.marketSummaries,
    ticker: state.ticker,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    bittrexActions: bindActionCreators(BittrexActions as any, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(injectIntl(HomePage));
