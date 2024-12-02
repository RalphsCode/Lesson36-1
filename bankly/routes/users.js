/** User related routes. */

const User = require('../models/user');
const express = require('express');
const router = new express.Router();
const ExpressError = require('../helpers/expressError');
const { authUser, requireLogin, requireAdmin } = require('../middleware/auth');

/** GET /
 *
 * Get list of users. Only logged-in users should be able to use this.
 *
 * It should return only *basic* info:
 *    {users: [{username, first_name, last_name}, ...]}
 *
 */

router.get('/', authUser, requireLogin, async function(req, res, next) {
  try {
    let users = await User.getAll();
    return res.json({ users });
  } catch (err) {
    return next(err);
  }
}); // end

/** GET /[username]
 *
 * Get details on a user. Only logged-in users should be able to use this.
 *
 * It should return:
 *     {user: {username, first_name, last_name, phone, email}}
 *
 * If user cannot be found, return a 404 err.
 *
 */

router.get('/:username', authUser, requireLogin, async function(
  req,
  res,
  next
) {
  try {
    let user = await User.get(req.params.username);
    return res.json({ user });
  } catch (err) {
    return next(err);
  }
});

/** PATCH /[username]
 *
 * Update user. Only the user themselves or any admin user can use this.
 *
 * It should accept:
 *  {first_name, last_name, phone, email}
 *
 * It should return:
 *  {user: all-data-about-user}
 *
 * It user cannot be found, return a 404 err. If they try to change
 * other fields (including non-existent ones), an error should be raised.
 *
 */

// BUG #5 Fix - remove requireAdmin, as was not allowing a user to update their own record
router.patch('/:username', authUser, requireLogin, async function(
  req,
  res,
  next
) {
  try {
    if (!req.curr_admin && req.curr_username !== req.params.username)  {
      throw new ExpressError('Only that user or admin can edit a user.', 401);
    };

    // get fields to change; remove token so we don't try to change it
    let fields = { ...req.body };
    delete fields._token;

    // BUG # 6 Fix - Only allow certain fields to be updated
    const allowedFields = ['first_name', 'last_name', 'phone', 'email'];
    const filteredFields = Object.keys(fields).filter(key => allowedFields.includes(key));
    const updateData = {};
    filteredFields.forEach(key => {
      updateData[key] = req.body[key];
    });
    // If there were fields that were not permitted to be patched, throw error
    if (Object.keys(fields).length !== Object.keys(updateData).length) {
      throw new ExpressError("Only first_name, last_name, phone and email can be updated", 422);
    };
    // Update the database
    let user = await User.update(req.params.username, updateData);
    return res.json({ user });
  } catch (err) {
    return next(err);
  }
}); // end

/** DELETE /[username]
 *
 * Delete a user. Only an admin user should be able to use this.
 *
 * It should return:
 *   {message: "deleted"}
 *
 * If user cannot be found, return a 404 err.
 */

router.delete('/:username', authUser, requireAdmin, async function(
  req,
  res,
  next
) {
  try {
    User.delete(req.params.username);
    return res.json({ message: 'deleted' });
  } catch (err) {
    return next(err);
  }
}); // end

module.exports = router;
