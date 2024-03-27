export class AppException extends Error {
  /**
   * @param {number} httpStatus
   * @param {string} key
   * @param {string} code
   * @param {string} message
   */
  constructor(httpStatus, key, code, message) {
    super(httpStatus);

    this.httpStatus = httpStatus;
    this.key = key;
    this.code = code;
    this.message = message;
  }

  getError() {
    return {
      key: this.key,
      code: this.code,
      message: this.message
    };
  }
}
