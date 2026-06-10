"use strict";
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
let myRole = Role.Admin;
console.log("My Role", myRole);
console.log("RoleName", Role[myRole]);
myRole = Role.Guest;
console.log("New Role", Role[myRole]);
