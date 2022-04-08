const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidatePost(data) {
    let errors = {};
    data.title = !isEmpty(data.title) ? data.title : "";
    data.desc = !isEmpty(data.desc) ? data.desc : "";

    if (validator.isEmpty(data.title)) {
        errors.title = "Required Title";
    }
    if (validator.isEmpty(data.desc)) {
        errors.desc = "Required Desc";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
};