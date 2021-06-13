const reader = require('xlsx')
const file = reader.readFile('assets/BeetleNut_Data.xlsx')
const BeetleNut = require('../Models/beetleNut')
const User = require('../Models/user')

exports.insertData = async (req, res) => {
    try {
        let data = []
        let users = []
        const sheets = file.SheetNames

        for (let i = 0; i < sheets.length; i++) {
            const temp = reader.utils.sheet_to_json(
                file.Sheets[file.SheetNames[i]])
            temp.forEach((res, indx) => {
                let dataObj = {}
                let userObj = {}
                dataObj['institute'] = res['Insitution Name']
                dataObj['branch_name'] = res['Branch Name']
                dataObj['address'] = res['Address']
                dataObj['city'] = res['City']
                dataObj['contact'] = res['Contact Number'].split(',').map(item=>item.trim())
                dataObj['branch_incharge'] = res['Branch Incharge']
                dataObj['pin_covered'] = res['Pincode covered'].split(',').map(item=>item.trim())
                dataObj['username'] = 'user' + (indx+1)
                userObj['username'] = 'user' + (indx+1)
                userObj['password'] = 'pass' + (indx+1)
                userObj['role'] = 'user'
                data.push(dataObj)
                users.push(userObj)
            })
        }

        // Printing data
        console.log(data)
        // console.log(data)
        console.log("--------------------------------------------------------------------------------------")
        const result = await BeetleNut.create(data)
        const userRes = await User.create(users)
        res.status(200).json({
            message: result,
            messageUser: userRes,
            // message: 'You can now get the requested branches for your request ',
        });
    } catch (err) {
        res.status(404).json({
            status: 'failed to insert',
            message: err,
        });
    }
};
