function setUserName(userName) {
    this.userName = userName
    console.log("called")
    // this works only if 'this' points to the correct object
    // otherwise userName will not be stored properly
}


function createUser(userName, userMail, userPassword) {
    // .call if we add this still it will not give uesrName bcz still its is giving reference of it 
    //  When a function finishes, yes it leaves the call stack
    // But values are not “lost” because of that
    // The real problem is: where those values were stored

    // use .call(this) so that 'this' inside setUserName
    // points to the current object (createUser instance)
    // otherwise userName will not be added to the object
    setUserName.call(this, userName)

    this.userMail = userMail
    this.userPassword = userPassword
}

const chai = new createUser("chai", "chai@gmail.com", "123")
console.log(chai)