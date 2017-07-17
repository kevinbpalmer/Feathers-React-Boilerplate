const {authenticate} = require('feathers-authentication').hooks;
const {populate} = require('feathers-hooks-common');

const sanitizeMessage = require('../../hooks/sanitize-message');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [sanitizeMessage()],
    update: [sanitizeMessage()],
    patch: [sanitizeMessage()],
    remove: []
  },
  after: {
    all: [populate({
        schema: {
          include: [
            {
              service: 'users',
              nameAs: 'user',
              parentField: 'userId',
              childField: '_id'
            }
          ]
        }
      })],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
