const BloodGroup = require('../../models/Ancilllary/BloodGroup');
var BloodGroupDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateBloodGroup: updateBloodGroup
}

function findAll() {
    return BloodGroup.findAll();
}

function findById(id) {
    return BloodGroup.findByPk(id);
}

function deleteById(id) {
    return BloodGroup.destroy({ where: { id: id } });
}

function create(blood) {
    var newBloodgroup = new BloodGroup(blood);
    return newBloodgroup.save();
}

function updateBloodGroup(bloodgroup, id) {
    var updateBlood = {
        name: bloodgroup.name
    };
    return BloodGroup.update(updateBlood, { where: { id: id } });
}
module.exports = BloodGroupDao;