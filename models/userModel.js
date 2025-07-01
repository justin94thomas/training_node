const db = require('../db/connections');

// // Test API
// (async () => {
//   try {
//     const result = await db.query('SELECT * FROM public.users');
//     console.log('Users:', result.rows);
//   } catch (error) {
//     console.error('Error fetching users:', error);
//   }
// })();

// Create a new user
const createUser = async (name, email, hashedPassword, role = 'user') => {
  const result = await db.query(
    'INSERT INTO public.users (name, email, password, role) VALUES (?, ?, ?, ?)',
    [name, email, hashedPassword, role]
  );
  return result.insertId;
};

// Find user by email
const findUserByEmail = async (email) => {
   const result = await db.query('SELECT * FROM public.users WHERE email = ?', email);
  return result.rows;
};

// Find user by ID
const findUserById = async (id) => {
  const result = await db.query('SELECT id, name, email, role FROM public.users WHERE id = ?', id);
  return result.rows;
};

const findAllUsers = async () => {
  const result = await db.query('SELECT * FROM public.users');
  return result.rows;
}
module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
  findAllUsers
};
