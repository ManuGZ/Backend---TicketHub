const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    description:{
        type: String,
        max: 500
    },
    img:{
        type: String,
    },
    likes:{
        type: Array,
        default: []
    },
    comments: [ 
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
            content: {
                type: String,
                required: true,
            }
        }
    ]
},
{timestamps:true}
);

module.exports = mongoose.model("Post", PostSchema);