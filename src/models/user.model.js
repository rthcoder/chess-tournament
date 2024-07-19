import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    is_admin: {
        type: Boolean,
        default: false
    },
    user_created_at: {
        type: Date,
        default: Date.now
    }
},
    {
        timestamps: true
    }
);

// userSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) {
//         return next();
//     }
//     this.password = await bcrypt.hash(this.password, 10);
//     next();
// });

// UserSchema.methods.comparePassword = function (password) {
//     return bcrypt.compare(password, this.password);
// };

export default mongoose.model("User", userSchema);