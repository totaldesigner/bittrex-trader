import { logger } from '../index';

describe('middlewares', () => {
  it('should handle log', () => {
    const middleware = logger({});
    const action = {};
    const next = jest.fn();
    middleware(next)(action);
    expect(next).toBeCalled();
  });
});
