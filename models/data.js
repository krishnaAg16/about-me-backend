import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
    hero: {
        img: String,
        title: String,
        desc: String
    },
    about: {
        img: String,
        desc: String,
        resume: String,
        linkedin: String,
        instagram: String,
        github: String,
    },
    service: {
        desc: String,
        content: [{
            svg: String,
            title: String,
            desc: String
        }]
    },
    experience: {
        desc: String,
        content: [{
            time: String,
            title: String,
            company: String,
            desc: String,
            link: String
        }]
    },
    contact: {
        desc: String,
        add: String,
        phone: String,
        email: String
    },
    slug: {
        type: String,
        required: true,
        unique: true
    }
});

export default mongoose.model('Data', DataSchema);

