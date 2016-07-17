function MainCtrl() {

    this.userName = 'admin';
    this.helloText = '欢迎来到芝麻开门后台系统';
    this.descriptionText = '此系统主要方便学生通过输入学号直接在手机端打开门';
};


angular
    .module('inspinia')
    .controller('MainCtrl', MainCtrl)
