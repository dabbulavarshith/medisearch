import { procedures } from "../../data/procedures";

export default function handler(req, res) {
  res.status(200).json(procedures);
}
