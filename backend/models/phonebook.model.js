import mongoose from "mongoose";
import "dotenv/config";
const url = process.env.MONGODB_URI;
mongoose.connect(url, { family: 4 });

const phonebookSchema = mongoose.Schema({
  _id: { type: String, require: true },
  name: { type: String, require: true },
  phone: { type: String, require: true },
});


const PhoneBook= mongoose.model("phoneNumber", phonebookSchema)

export { PhoneBook }
