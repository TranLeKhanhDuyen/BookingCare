import bcrypt from 'bcryptjs';

export class BcryptHelper {
  /**
   * @param {string} plainText
   * @param {number} saltRounds
   */
  static async hash(plainText, saltRounds = 10) {
    return bcrypt.hash(plainText, saltRounds);
  }

  /**
   * @param {string} plainText
   * @param {string} hash
   */
  static async verifyHash(plainText, hash) {
    if (typeof plainText !== 'string' || typeof hash !== 'string') return false;

    return bcrypt.compare(plainText, hash);
  }
}
