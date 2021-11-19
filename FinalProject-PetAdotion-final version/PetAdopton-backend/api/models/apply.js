'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for todo object.
 */
let ApplySchema = new Schema({
    username:{
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    address:{
        type:String
    },
    zip: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
}, {
    versionKey: false
});
// Duplicate the id field as mongoose returns _id field instead of id.
ApplySchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
ApplySchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('applys', ApplySchema);