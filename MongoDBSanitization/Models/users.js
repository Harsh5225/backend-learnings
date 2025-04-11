import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20
    },
    lastName:{
        type:String
    },
    age:{
        type: Number,
        min: 14,
        max: 70,
        required: true,
    },
    gender:{
        type: String,
        // enum: ["male","female","others"]
        // validator function isko jab hum routes use karte hai tab use karte hai runValidators=true aata hai option mai jab update karte or kuch aur cheeze karana hai tab bhi
        // eg.  await User.findByIdAndUpdate(_id, update, { runValidators: true });
        // to ye validator function chalega
        // agar ye nahi chala to error throw karega
        
        validate(value){
            if(!["male","female","others"].includes(value))
                throw new Error("Invalid Gender")
        }
    },
    emailId:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase:true,
        immutable: true,
    },
    password:{
        type: String
    },
    photo:{
        type: String,
        default: "This is the default photo"
    }
}, { timestamps: true })


const User = mongoose.model("user",userSchema);

export default User;