module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const {Schema} = mongooseClient;
  const messages = new Schema({
    name: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    userId: {
      type: String,
      required: true
    },
    service: {
      type: String
    },
    nameAs: {
      type: String
    },
    parentField: {
      type: String
    },
    childField: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  });

  return mongooseClient.model('messages', messages);
};
