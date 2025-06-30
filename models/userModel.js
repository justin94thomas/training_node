const db = require('../db/connections');

// Create a new user
const createUser = async (name, email, hashedPassword, role = 'user') => {
  const [result] = await db.query(
    'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
    [name, email, hashedPassword, role]
  );
  return result.insertId;
};

// Find user by email
const findUserByEmail = async (email) => {
  const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
};

// Find user by ID
const findUserById = async (id) => {
  const [rows] = await db.query('SELECT id, name, email, role FROM users WHERE id = ?', [id]);
  return rows[0];
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserById
};
