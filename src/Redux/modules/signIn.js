import { takeEvery, put, call, takeLeading, select } from 'redux-saga/effects';
import { createActions, handleActions, createAction } from 'redux-actions';
import UserService from '../../Services/userService';
import TokenService from '../../Services/tokenService';
import { push } from 'connected-react-router';

const prefix = 'EOTTAECINEMA/LOUGIN';

//action
const { start, logsuccess, fail, init } = createActions(
  {
    LOGSUCCESS: (nickName, token) => ({ nickName, token }),
  },
  'START',
  'FAIL',
  'INIT',
  { prefix },
);

export { logsuccess, init };

//initialState
const initialState = {
  loading: false,
  error: null,
  token: null,
};

//reducer
const reducer = handleActions(
  {
    START: (state) => ({
      loading: true,
      error: null,
      token: null,
    }),

    LOGSUCCESS: (state, action) => ({
      loading: false,
      error: null,
      token: action.payload.token,
    }),

    FAIL: (state, action) => ({
      loading: false,
      error: action.payload,
      token: null,
    }),
    INIT: () => ({
      loading: false,
      error: null,
      token: null,
    }),
  },
  initialState,
  { prefix },
);

export default reducer;

const START_SIGNIN_SAGA = `${prefix}/START_SIGNIN_SAGA`;
const START_LOGOUT_SAGA = `${prefix}/START_LOGOUT_SAGA`;

export const startSignInSagaActionCreator = createAction(
  START_SIGNIN_SAGA,
  (id, password) => ({ id, password }),
);

export const startLogOutActionCreator = createAction(START_LOGOUT_SAGA);
function* startSignInSaga(action) {
  const { id, password } = action.payload;
  try {
    yield put(start());
    const { nickName, accessToken } = yield call(
      UserService.SignIn,
      id,
      password,
    );
    if (!accessToken) {
      yield put(logsuccess(false, false));
      return;
    }
    TokenService.save({ nickName, accessToken });
    yield put(logsuccess(nickName, accessToken));
  } catch (error) {
    yield put(fail(error));
  }
}

function* startLogOutSaga() {
  TokenService.delete();
  yield put(logsuccess(null, null));
  const path = yield select((state) => state.router.location.pathname);
  if (path === '/ticketing') {
    yield put(push('/'));
    return;
  }
  try {
  } catch (error) {}
}

export function* SignInSaga() {
  yield takeEvery(START_SIGNIN_SAGA, startSignInSaga);
  yield takeLeading(START_LOGOUT_SAGA, startLogOutSaga);
}
