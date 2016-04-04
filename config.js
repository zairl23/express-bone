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
        loggedOut: 'lockit/myLogout.jade' // add a logout listener , just not used @toto
    }
};
exports.forgotPassword = {
  route: '/forgot-password',
  tokenExpiration: '1 day',
  views: {
    forgotPassword: 'lockit/forgot-password.jade', // input field 'email' | POST /'forgotPassword.route' | local variable 'error'
    newPassword: 'lockit/new-password.jade',    // input field 'password' | POST /'forgotPassword.route'/#{token} | local variable 'error'
    changedPassword: '',// message that password has been changed successfully
    linkExpired: '',    // message that link has expired and maybe link to /'forgotPassword.route'
    sentEmail: ''       // message that email with token has been sent
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
  subject: 'Complete your registration',
  text: [
    '<h2>Hello <%- username %></h2>',
    'here is the link again. <%- link %> to complete your registration.',
    '<p>The <%- appname %> Team</p>'
  ].join(''),
  linkText: 'Click here'
};

// forgot password template
exports.emailForgotPassword = {
  subject: 'Reset your password',
  text: [
    '<h2>Hey <%- username %></h2>',
    '<%- link %> to reset your password.',
    '<p>The <%- appname %> Team</p>'
  ].join(''),
  linkText: 'Click here'
};
exports.emailType = 'nodemailer-smtp-transport';
exports.emailSettings = {
    host: "smtp.qq.com",
    secureConnection: true, // use SSL
    port: 465,
    secure:true,
    auth: {
        user: '312748735@qq.com',
        pass: ''          //qq独立密码
    }
};
exports.twofactor = false;

 //or if you want to use MongoDB
 exports.db = {
   url: 'mongodb://localhost/',
   name: 'test',
   collection: 'users'  // collection name for MongoDB
 };
