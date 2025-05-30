import mongoose, { Schema } from "mongoose";
import { Type_Use, User } from "types/UsersTypes";
import bcrypt from "bcrypt"


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
      trim: true,
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

UserSchema.pre<User>("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    const salt = await bcrypt.genSalt(12)
    const hash = await bcrypt.hash(this.password, salt)
    this.password = hash
  }
  next()
})

UserSchema.method("comparePassword", async function (password: string): Promise<boolean> {
  return await bcrypt.compare(password, this.password as string)
})

UserSchema.methods.toJSON = function () {
  const userObj = this.toObject()
  delete userObj.password
  return userObj
}

export const UserModel = mongoose.model<User>("User", UserSchema)
