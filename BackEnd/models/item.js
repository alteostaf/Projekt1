const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        photo: {
            type: String,
            require: true
        }
    }
)

const Item = mongoose.model("Item", itemSchema)

module.exports = Item

