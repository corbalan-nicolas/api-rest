import mongoose from "mongoose"
const Schema = mongoose.Schema

const mySchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now()
  }
})

const model = mongoose.model('users', mySchema)

export default model