import { from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

const makeRequest = (data) =>
  mergeMap((payload) => {
    const { url, method, body } = data(payload);

    return body
      ? from(
          fetch(url, {
            method,
            headers: {
              'Content-Type': 'application/json',
            },
            body,
          }).then((response) => response.json()),
        )
      : from(
          fetch(url, {
            method,
            headers: {
              'Content-Type': 'application/json',
            },
          }).then((response) => response.json()),
        );
  });

export default makeRequest;
