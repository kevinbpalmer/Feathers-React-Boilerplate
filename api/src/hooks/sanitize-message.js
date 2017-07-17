module.exports = function(options = {}) { // eslint-disable-line no-unused-vars
  return function sanitizeMessage(hook) {
    // The authenticated user
    const user = hook.params.user;
    // The actual message text
    const name = hook.data.name
    const text = hook.data.text
      // Messages can't be longer than 400 characters
      .substring(0, 400)
      // Do some basic HTML escaping
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const newObj = Object.assign({}, hook.data, {
      text,
      userId: user._id,
      createdAt: new Date().getTime()
    })

    // Override the original data
    hook.data = newObj;

    return Promise.resolve(hook);
  };
};
