enum Role{
    Admin,
    User,
    Guest
}

let myRole:Role = Role.Admin;

console.log("My Role", myRole);
console.log("RoleName", Role[myRole]);

myRole = Role.Guest;
console.log("New Role",Role[myRole])