'use strict';
const bittrex = require('node-bittrex-api');
const logger = require('../../server/utils/logger');

bittrex.options({
  'apikey': process.env.BTX_API_KEY,
  'apisecret': process.env.BTX_SECRET_KEY,
});

module.exports = (Bittrex) => {
  /**
   * Interface to the "public/getmarkets" Bittrex's API operation.
   *
   * @returns Either a promise of a market, or a market
   */
  Bittrex.getMarkets = (cb) => {
    process.nextTick(() => {
      cb(null, {

      });
    });
  };

  /**
   * Interface to the "public/getcurrencies" Bittrex's API operation.
   *
   * @returns Either a promise of a currency array, or a currency array
   */
  Bittrex.getCurrencies = (cb) => {
    process.nextTick(() => {
      cb(null, {

      });
    });
  };

  /**
   * Interface to the "public/getticker" Bittrex's API operation.
   *
   * @param   market The market of which we would like
   *                 to retrieve the ticker.
   * @returns Either a promise of a ticker, or a ticker
   */
  Bittrex.getTicker = (cb) => {
    process.nextTick(() => {
      cb(null, {

      });
    });
  };

  /**
   * Interface to the "public/getmarketsummaries" Bittrex's API operation.
   *
   * @returns Either a promise of a market summary array, or a market summary
   */
  Bittrex.getMarketSummaries = (cb) => {
    process.nextTick(() => {
      bittrex.getmarketsummaries((data, err) => {
        if (err) {
          logger.error(err);
        }
        cb(null, data.result);
      });
    });
  };

  /**
   * Interface to the "public/getmarketsummary" Bittrex's API operation.
   *
   * @param   market The market of which we would like
   *                 to retrieve the summary.
   * @returns Either a promise of a market summary, or a market summary
   */
  Bittrex.getMarketSummary = (cb) => {
    process.nextTick(() => {
      cb(null, {

      });
    });
  };

  /**
   * Interface to the "public/getorderbook" Bittrex's API operation.
   *
   * @param   market The market of which we would like
   *                 to retrieve the order book.
   * @param   type   The type of the order book that we want to
   *                 retrieve, depending on if we want only the
   *                 buys, sells, or both.
   * @returns Either a promise of an order book, or an order book
   */
  Bittrex.getOrderBook = (cb) => {
    process.nextTick(() => {
      cb(null, {

      });
    });
  };

  /**
   * Interface to the "public/getmarkethistory" Bittrex's API operation.
   *
   * @param   market The market of which we would like
   *                 to retrieve the market history.
   * @returns Either a promise of a trade array, or a trade array
   */
  Bittrex.getMarketHistory = (cb) => {
    process.nextTick(() => {
      cb(null, {

      });
    });
  };

  /**
   * Interface to the "public/buylimit" Bittrex's API operation.
   *
   * @param   market   The market on which we would like to buy.
   * @param   quantity The quantity that we would like to buy.
   * @param   rate     The price at which we would like to buy.
   * @returns Either a promise of the placed order's identifier, or the placed
   */
  Bittrex.buyWithLimit = (cb) => {
    process.nextTick(() => {
      cb(null, {

      });
    });
  };

  /**
   * Interface to the "public/selllimit" Bittrex's API operation.
   *
   * @param   market   The market on which we would like to sell.
   * @param   quantity The quantity that we would like to sell.
   * @param   rate     The price at which we would like to sell.
   * @returns Either a promise of the placed order's identifier, or the placed
   */
  Bittrex.sellWithLimit = (cb) => {
    process.nextTick(() => {
      cb(null, {

      });
    });
  };

  /**
   * Interface to the "public/cancelorder" Bittrex's API operation.
   *
   * @param   orderId The ID of the order we would like to cancel.
   * @returns True if the operation resulted in a success, throws
   *          otherwise.
   */
  Bittrex.cancelOrder = (cb) => {
    process.nextTick(() => {
      cb(null, {

      });
    });
  };

  /**
   * Interface to the "public/getopenorders" Bittrex's API operation.
   *
   * @param   market The market of which we would like to retrieve
   *                 the open orders.
   * @returns Either a promise of an open order array, or an open
   */
  Bittrex.getOpenOrders = (cb) => {
    process.nextTick(() => {
      cb(null, {

      });
    });
  };

  /**
   * Interface to the "public/getbalances" Bittrex's API operation.
   *
   * @returns Either a promise of a balance array, or a balance
   */
  Bittrex.getBalances = (cb) => {
    process.nextTick(() => {
      cb(null, {

      });
    });
  };

  /**
   * Interface to the "public/getbalance" Bittrex's API operation.
   *
   * @param currency The currency of which we would like to retrieve
   *                 the balance.
   * @returns Either a promise of a balance, or a balance if using
   */
  Bittrex.getBalance = (cb) => {
    process.nextTick(() => {
      cb(null, {

      });
    });
  };

  /**
   * Interface to the "public/getdepositaddress" Bittrex's API operation.
   *
   * @param currency The currency of which we would like to retrieve
   *                 the deposit address.
   * @returns Either a promise of a deposit address, or a deposit
   */
  Bittrex.getDepositAddress = (cb) => {
    process.nextTick(() => {
      cb(null, {

      });
    });
  };

  /**
   * Interface to the "public/getdepositaddress" Bittrex's API operation.
   *
   * @param currency  The currency which we would like to withdraw.
   * @param quantity  The quantity which we would like to withdraw.
   * @param address   The address to which we would like to withdraw.
   * @param paymentId Optional parameter used for CryptoNotes/BitShareX/Nxt.
   *
   * @returns Either a promise of a withdrawal ID, or a withdrawal ID
   */
  Bittrex.withdraw = (cb) => {
    process.nextTick(() => {
      cb(null, {

      });
    });
  };

  /**
   * Interface to the "public/getorder" Bittrex's API operation.
   *
   * @param uuid  The uuid of the order of which we would like to get the detail.
   *
   * @returns Either a promise of an order, or an order if using
   */
  Bittrex.getOrder = (cb) => {
    process.nextTick(() => {
      cb(null, {

      });
    });
  };

  /**
   * Interface to the Bittrex's API websockets system.
   *
   * @param watchableMarkets The markets of which we would like
   *                         to receive constant updates.
   * @param callback A callback function invoked as soon as new
   *                updates about the watched markets are received
   *                from Bittrex.
   */
  Bittrex.getExchangeStateUpdatesStream = (cb) => {
    process.nextTick(() => {
      cb(null, {

      });
    });
  };
};
