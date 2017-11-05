import 'whatwg-fetch';

export function del(url, options?) {
  return request(url, {
    ...options,
    compress: true,
    method: 'DELETE',
  });
}

export function get(url, options?) {
  if (options) {
    url += `?${jsonToQuery(options)}`;
  }
  return request(url, {
    ...options,
    compress: true,
    method: 'GET',
  });
}

export function post(url, options?) {
  return request(url, {
    ...options,
    compress: true,
    method: 'POST',
  });
}

/**
 * Parses the JSON returned by a network request
 * @param  {object} response A response from a network request
 * @return {object}          The parsed JSON from the request
 */
export function parseJSON(response: Response) {
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 * @param  {object} response   A response from a network request
 * @return {object|undefined} Returns either the response, or throws an error
 */
export async function checkStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const json = await response.json();
  const error: any = new Error(response.statusText);
  throw {
    ...error,
    ...json,
  };
}

export function jsonToQuery(json) {
  return Object.keys(json).map((key) => {
      return key + '=' + json[key];
    }).join('&');
}

/**
 * Requests a URL, returning a promise
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           The response data
 */
export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .catch((ex) => {
      throw ex;
    });
}
