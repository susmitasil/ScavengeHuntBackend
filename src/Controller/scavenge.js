const BeetleNut = require('../Models/beetleNut')

exports.getBranchDetails = async (req, res) => {
    try {
        const result = await BeetleNut.find()
      res.status(200).json({
        data: result,
        message: 'You can now get the requested branches for your request ',
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err,
      });
    }
  };
  exports.getDetailsUser = async (req, res) => {
    try {
        const result = await BeetleNut.find({ pin_covered: { $in: [ req.pin ]} })
      res.status(201).json({
        data: 'data returned for the POST request',
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err,
      });
    }
  };
  exports.invalid = async (req, res) => {
    res.status(404).json({
      status: 'fail',
      message: 'Invalid path',
    });
  };
  