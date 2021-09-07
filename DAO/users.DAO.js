import db from "../conn.js";

export default class usersDAO {
  static async getUsers(req, res, next) {
    try {
      const sqlSelect = `SELECT uu.userID, ud.fullname, uu.contactnumber, ur.role
        FROM upayausers uu 
        JOIN userdetails ud ON uu.userID = ud.userID
        JOIN assigneduserroles au ON uu.userID = au.userID
        JOIN upayauserroles ur ON au.roleID = ur.roleID
        WHERE au.serviceID = '1' AND uu.status = 'Active' `;
      return new Promise(function (resolve, reject) {
        db.query(sqlSelect, function (err, results, fields) {
          if (err) return reject(err);
          return resolve(results);
        });
      });
    } catch (e) {
      console.error(`Unable to get users, ${e}`);
    }
  }
}
