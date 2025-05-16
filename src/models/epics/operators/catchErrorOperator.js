import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { toggleShowAlert } from '@/models/actions/alertActions';
import { setGeneralLoading } from '@/models/actions/catalogActions';

const catchErrorOperator = (flag) =>
  catchError((error) => {
    if (flag) {
      return of(
        toggleShowAlert({
          message: `${error}`,
          type: 'error',
          show: true,
        }),
        setGeneralLoading(false),
      );
    }

    return of(
      toggleShowAlert({
        message: `${error}`,
        type: 'error',
        show: true,
      }),
    );
  });

export default catchErrorOperator;
