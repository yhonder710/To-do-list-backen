import mongoose, { Schema } from "mongoose";
import { Type_Use, Type_User, User } from "types/UsersTypes";


const UserSchema: Schema = new Schema<User>(
  {
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      unique: true
    },
    type_user: {
      type: String,
      enum: Object.values(Type_User),
      required: true,
      default: Type_User.user,
    },
    type_use: {
      type: String,
      enum: Object.values(Type_Use),
      required: true,
      default: Type_Use.GestionPersonal
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export const UserModel = mongoose.model<User>("User", UserSchema)
