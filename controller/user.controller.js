import usersSLO from "../SLO/users.SLO.js";

export default class userController {
  static async getUpayaUser(req, res, next) {
    try {
      let userSLResponse = await usersSLO.categorizeUsers();
      res.status(200).json(userSLResponse);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}
