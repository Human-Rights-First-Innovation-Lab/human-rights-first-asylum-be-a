const Profile = require('../models/Profile');

const attachProfile = async (req, res, next) => {
  const { user } = req;
  const profile = await Profile.findOrCreateProfile(user);
  req.profile = profile;
  next();
};

module.exports = { attachProfile };
