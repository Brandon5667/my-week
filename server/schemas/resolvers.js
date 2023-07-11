const { AuthenticationError } = require("apollo-server-express");
const { User, Chore, Survey } = require("../models");
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

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    addChore: async (parent, { choreName, time, day, score }, context) => {
      if (context.user) {
        const chore = await Chore.create({
          choreName,
          time,
          day,
          score,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { chores: chore._id } }
        );

        return chore;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    updateChore: async (
      parent,
      { choreId, choreName, time, day, score },
      context
    ) => {
      if (context.user) {
        await Chore.findByIdAndUpdate(
          choreId,
          { choreName, time, day, score },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    completeChore: async (parent, { choreId }, context) => {
      if (context.user) {
        const chore = await Chore.findById(choreId);
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $inc: { score: chore.score } }
        );
        await Chore.findByIdAndDelete(choreId);
      }
    },

    addSurvey: async (
      parent,
      { trash, dishes, bathroom, walk, floor },
      context
    ) => {
      if (context.user) {
        const survey = await Survey.create({
          trash,
          dishes,
          bathroom,
          walk,
          floor,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { survey: survey._id } }
        );
        return survey;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
