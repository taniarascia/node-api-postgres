"use strict";

module.exports = (function () {
  function Parser(argsList){
    this.argsList = argsList.map(function (a) {
      return a;
    })
  }

  /**
   * @description If cli detects hyphen for -U return the element ahead of it
   * @return {number} Default user is me
   */
  Parser.prototype.getPgUser = function (credentials) {
    if (this.argsList.indexOf("-U") !== -1) {
      return this.argsList[this.argsList.indexOf("-U") + 1]
    }

    return 'me'; 
  };

  /**
   * @description If cli detects hyphen for -p retrieve password in the element ahead
   * @return {number} Default pw is password
   */
  Parser.prototype.getPgPassword = function (credentials) {
    if (this.argsList.indexOf("-p") !== -1) {
      return this.argsList[this.argsList.indexOf("-p") + 1]
    } 

    return 'password'
  };

  return Parser;
})()
