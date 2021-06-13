const User = require('../Models/user')

exports.auth = async (req, res) => {
  try {
    console.log(req.body)
    const result = await User.find({ username: req.body.username, password: req.body.password })
    if (result.length > 0) {
      console.log(result)
      res.status(200).json({
        data: [{"id":result[0]._id,"username":result[0].username, "role":result[0].role}],
        message: 'User Details found!',
      });
    }
    else {
      res.status(200).json({
        data: result,
        message: 'User Details not found',
      });
    } 
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};