/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('users').del();
  await knex('users').insert([
    { full_name: 'Ada Lovelace', email: 'ada@lovelace.com' },
    { full_name: 'Sally Ride', email: 'sally@ride.com' },
    { full_name: 'Alan Turing', email: 'alan@turing.com' },
    { full_name: 'Steve Jobs', email: 'steve@jobs.com' },
  ]);
};
