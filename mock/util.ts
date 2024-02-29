export enum ResultEnum {
  SUCCESS = 0,
  ERROR = -1,
  TIMEOUT = 401,
}

export enum RequestEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

type Recordable<T = any> = Record<string, T>;

export function resultSuccess<T = Recordable>(data: T, { message = 'ok' } = {}) {
  return {
    code: ResultEnum.SUCCESS,
    data,
    message,
  };
}

export function resultFail<T = Recordable>(data: T, { message = 'fail' } = {}) {
  return {
    code: ResultEnum.ERROR,
    data,
    message,
  };
}
