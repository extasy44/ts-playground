import axios from "axios";
import { User } from "./models/User";

const user = new User({ name: "Jiwoo", age: 2 });

user.save();
