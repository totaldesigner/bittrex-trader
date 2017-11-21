/* tslint:disable:no-console */
const logger = {
  debug: (msg) => {
    if (console && console.log) {
      console.info(msg);
    }
  },

  error: (msg) => {
    if (console && console.error) {
      console.error(msg);
    }
  },

  info: (msg) => {
    if (console && console.info) {
      console.info(msg);
    }
  },

  log: (msg) => {
    if (console && console.log) {
      console.log(msg);
    }
  },
};

export default logger;
