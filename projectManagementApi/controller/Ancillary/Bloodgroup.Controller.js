const BloodGroupDao = require('../../dao/Ancillary/BloodGroup.Dao');

var BloodGroupController = {
    addBloodGroup: addBloodGroup,
    findBloodGroups: findBloodGroups,
    findBloodGroupById: findBloodGroupById,
    updateBloodGroup: updateBloodGroup,
    deleteById: deleteById
}

function addBloodGroup(req, res) {
    let bloodgroup = req.body;
    BloodGroupDao.create(bloodgroup).
        then((data) => {
            return res.status(200).json({
                statuscode: 200,
                status: "success",
                data: data,
                error: [{ message: "", errorcode: "" }],
            });
        })
        .catch((error) => {
            res.status(500).json({
                statuscode: 500,
                status: "failed",
                data: {},
                error: [{ message: error.message, errorcode: 500 }],
            });
        });
}

function findBloodGroupById(req, res) {
    BloodGroupDao.findById(req.params.id).
        then((data) => {
            return res.status(200).json({
                statuscode: 200,
                status: "success",
                data: data,
                error: [{ message: "", errorcode: "" }],
            });
        })
        .catch((error) => {
            res.status(500).json({
                statuscode: 500,
                status: "failed",
                data: {},
                error: [{ message: error.message, errorcode: 500 }],
            });
        });
}

function deleteById(req, res) {
    BloodGroupDao.deleteById(req.params.id).
        then((data) => {
            return res.status(200).json({
                statuscode: 200,
                status: "success",
                data: data,
                error: [{ message: "", errorcode: "" }],
            });
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateBloodGroup(req, res) {
    BloodGroupDao.updateBloodGroup(req.body, req.params.id).
        then((data) => {
            return res.status(200).json({
                statuscode: 200,
                status: "success",
                data: data,
                error: [{ message: "", errorcode: "" }],
            });
        })
        .catch((error) => {
            console.log(error);
        });
}

function findBloodGroups(req, res) {
    BloodGroupDao.findAll()
        .then(function (response) {
            return res.status(200).json({
                statuscode: 200,
                status: "success",
                data: response,
                error: [{ message: "", errorcode: "" }],
            });
        })
        .catch((error) => {
            res.status(500).json({
                statuscode: 500,
                status: "failed",
                data: {},
                error: [{ message: error.message, errorcode: 500 }],
            });
        });
}

module.exports = BloodGroupController;