import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import config  from "process";

export interface UserDocument extends mongoose.Document {
    email: string;
    name: string;
    password: string;
    creatAt: Date;
    updatedAt: Date;
}


const userSchema = new mongoose.Schema({
    email: {type:String, required: true, unique:true},
    name: {type:String, required:true},
    password: {type:String, required: true}
},{
    timestamps: true
})

userSchema.pre("save", async function (next: mongoose.HookNextFunction) {
    let user = this as UserDocument;
    
    if(!user.isModified("password")) {
        return next();
    }

    const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"))
})

const UserModel = mongoose.model("User", userSchema, "User");

export default UserModel;