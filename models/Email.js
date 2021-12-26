const mongoose = require('mongoose');

const EmailsSchema = mongoose.Schema( {
    Uid: {
        type: String,
        required : true,
    },
    email: {
        type: String,
    },
    mx: {
        type: Object,
    },
    country: {
        type: String,
    },
    website: {
        type: String,
    },
    active: {
        type: Boolean,
    },
    lastCheck: {
        type: Date,        
    },
    
},{ timestamps: true });

module.exports = mongoose.model('Emails',EmailsSchema);