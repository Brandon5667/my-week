const { User, Chore } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    chores: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Chore.find(params).sort({ createdAt: -1 });
    },
    chore: async (parent, { choreId }) => {
      return Chore.findOne({ _id: choreId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};
