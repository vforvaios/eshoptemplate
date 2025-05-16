const makeRequest = (url, method, extraBody, token = '') =>
  fetch(`${import.meta.env.VITE_API}/${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token !== '' && { Authorization: `Bearer ${token}` }),
    },
    ...(extraBody !== '' && { body: extraBody }),
  }).then((response) => response.json());

export default makeRequest;
