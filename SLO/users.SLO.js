import usersDAO from "../DAO/users.DAO.js";

export default class usersSLO {
  static async categorizeUsers() {
    let users = await usersDAO.getUsers();

    let upayaAdmin = [],
      upayaCallCenter = [],
      upayaSubAdmin = [],
      serviceSeeker = [],
      serviceProvider = [],
      others = [];

    users.map((user) => {
      switch (user.role) {
        case "Upaya Admin":
          upayaAdmin.push({
            userID: user.userID,
            fullname: user.fullname,
            contactnumber: user.contactnumber,
          });
          break;
        case "Callcenter Admin":
          upayaCallCenter.push({
            userID: user.userID,
            fullname: user.fullname,
            contactnumber: user.contactnumber,
          });
          break;
        case "Upaya Sub-Admin":
          upayaSubAdmin.push({
            userID: user.userID,
            fullname: user.fullname,
            contactnumber: user.contactnumber,
          });
          break;
        case "Service Seeker":
          serviceSeeker.push({
            userID: user.userID,
            fullname: user.fullname,
            contactnumber: user.contactnumber,
          });
          break;
        case "Service Provider":
          serviceProvider.push({
            userID: user.userID,
            fullname: user.fullname,
            contactnumber: user.contactnumber,
          });
          break;
        default:
          others.push({
            userID: user.userID,
            fullname: user.fullname,
            contactnumber: user.contactnumber,
          });
          break;
      }
    });
    const upayaUsers = {
      upayaAdmin,
      upayaCallCenter,
      upayaSubAdmin,
      serviceSeeker,
      serviceProvider,
      others
    };
    return upayaUsers;
  }
}
