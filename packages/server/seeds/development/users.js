/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('users').del();
  await knex('users').insert([
    { full_name: 'Ada Lovelace', email: 'ada@lovelace.com' },
    {
      full_name: 'Yuliia Balandiuk',
      email: 'yuliia.balandiuk8@gmail.com',
      uid: 'TfF0SrbO1MeFTdYa4wzv',
    },
    { full_name: 'Alan Turing', email: 'alan@turing.com' },
    { full_name: 'Steve Jobs', email: 'steve@jobs.com' },
  ]);
};
