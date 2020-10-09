(async function () {
  try {
    await Promise.reject('oopsie');
  } catch (err) {
    console.error(err);
  }

  console.log('This is still good!');
})();

function fail() {
  try {
    console.log('this works');
    throw new Error('oopsie');
  } catch (e) {
    console.log('error', e);
  } finally {
    console.log('still good');
    return 'returning from fail';
  }
  console.log('never going to get here'); // not reachable
}
fail();

class authenticationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'authenticationError';
    this.favouriteSnack = 'grapes';
  }
}
const a = new authenticationError('oopsie');

console.log(a.favouriteSnack);
