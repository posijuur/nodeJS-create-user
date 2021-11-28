const db = require('@db');

class UserController {
  async create(user) {
    const { email, firstName, lastName, phoneNumber, companyName, password } = user;

    try {
      const { rows } = await db.query(
        'INSERT INTO users (firstName, lastName, email, phoneNumber, companyName, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [firstName, lastName, email, phoneNumber, companyName, password],
      );
      return rows[0];
    } catch (error) {
      return error;
    }
  }
}

module.exports = new UserController();
