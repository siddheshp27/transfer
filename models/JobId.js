const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
        enum: ["cpp", "py", "js", "java"],
    },
    fileName: {
        type: String,
        required: true,
    },
    submittedAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        required: true,
        enum: ["pending", "success", "error"]
    },
    output: {
        type: String
    }

})

module.exports = mongoose.model("job", JobSchema);