const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

export function createReducer(initState: any, handlers: any) {
  return function reducer(state = initState, action: any) {
    const handler = handlers[action.type];
    return handler ? handler(state, action) : state;
  };
}

export function createRequestTypes(base: string) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc: any, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}
