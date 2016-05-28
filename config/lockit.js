exports.appname = 'express-bone';
// signup settings
exports.signup = {
  route: '/signup',
  tokenExpiration: '1 day',
  views: {
    signup: 'lockit/signup.jade',         // input fields 'name', 'email' and 'password' | local variable 'error' | POST /'signup.route'
    linkExpired: '',    // message link has expired | input field 'email' | POST /'signup.route'/resend-verification
    verified: '',       // message email is now verified and maybe link to /'login.route'
    signedUp: '',       // message email has been sent => check your inbox
    resend: 'lockit/resend.jade'          // input field 'email' | local variable 'error' | POST /'signup.route'/resend-verification
  },
  handleResponse: true  // let lockit handle the response after signup success
};

exports.login = {
    route: '/login',
    logoutRoute: '/logout',
    views: {
        login: 'lockit/login.jade',
        loggedOut: 'lockit/logout.jade' // add a logout listener , just not used @toto
    }
};
exports.forgotPassword = {
  route: '/forgot-password',
  tokenExpiration: '1 day',
  views: {
    forgotPassword: 'lockit/forgot-password.jade', // input field 'email' | POST /'forgotPassword.route' | local variable 'error'
    newPassword: 'lockit/new-password.jade',    // input field 'password' | POST /'forgotPassword.route'/#{token} | local variable 'error'
    changedPassword: 'lockit/change-password-success.jade',// message that password has been changed successfully
    linkExpired: 'lockit/link-expired.jade',    // message that link has expired and maybe link to /'forgotPassword.route'
    sentEmail: 'lockit/forgot-password-send.jade'       // message that email with token has been sent
  }
};
// email already taken template
exports.emailSignupTaken = {
  subject: 'Email already registered',
  text: [
    '<h2>Hello <%- username %></h2>',
    'you or someone else tried to sign up for <%- appname %>.',
    '<p>Your email is already registered and you cannot sign up twice.',
    ' If you haven\'t tried to sign up, you can safely ignore this email. Everything is fine!</p>',
    '<p>The <%- appname %> Team</p>'
  ].join('')
};

// resend signup template
exports.emailResendVerification = {
  subject: '完成您的注册',
  text: [
    '<h2>您好！ <%- username %></h2>',
    '这是 <%- link %> 完成注册的链接.',
    '<p>来自: <%- appname %> </p>'
  ].join(''),
  linkText: '点击这里'
};

// forgot password template
exports.emailForgotPassword = {
  subject: '重置您的密码',
  text: [
    '<h2>您好！ <%- username %></h2>',
    '<%- link %> 重置您的密码.',
    '<p>来自： <%- appname %></p>'
  ].join(''),
  linkText: '点击这里'
};
exports.emailType = 'nodemailer-smtp-transport';
exports.emailSettings = {
    host: "smtp.qq.com",
    secureConnection: true, // use SSL
    port: 465,
    secure:true,
    auth: {
        user: '3082784291@qq.com',
        pass: 'kzbirhyierbkdhae'
    }
};
exports.emailFrom = '3082784291@qq.com';
exports.twofactor = false;

 //or if you want to use MongoDB
 // exports.db = {
 //   url: 'mongodb://localhost/',
 //   name: 'test',
 //   collection: 'users'  // collection name for MongoDB
 // };

 // MySQL
 exports.db = {
   url: 'mysql://root:12345678@localhost:3306/',
   name: 'bone_development',
   collection: 'users'
 };
