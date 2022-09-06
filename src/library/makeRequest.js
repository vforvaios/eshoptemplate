const makeRequest = (url, method, extraBody = null) =>
  fetch(`${process.env.REACT_APP_API}/${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    ...(extraBody && { body: extraBody }),
  }).then((response) => response.json());

export default makeRequest;
