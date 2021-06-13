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
  exports.getDetailsCust = async (req, res) => {
    try {
        const result = await BeetleNut.find({pin_covered: {$elemMatch: { $all:  req.body.pin }} })
        console.log(req.body)
        console.log(parseInt(req.body.pin))
        console.log(result)
      res.status(200).json({
        data: result,
        message: 'Bad Bad luck, No Donut for you!!',
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
      console.log(req.body)
        const result = await BeetleNut.find({username: req.body.username })
        
        console.log(result)
      res.status(200).json({
        data: result,
        message: 'your details are fetched as per request',
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
  