// expose our config directly to our application using module.exports
module.exports = {

  'facebookAuth': {
    'clientID': '284309812093395',
    'clientSecret': '34beb03d5436b50bf5673822ccca85av11',// Place your cliect secret here
    'callbackURL': 'http://localhost:3000/auth/facebook/callback', // Change URL to your app
    'profileFields': ['id', 'email', 'name'] // Add permissions as needed. Check FB API docs for what permissions are available
  },

    'googleAuth' : {
        'clientID'      : '983811139992-0te2aqh7b4lnas9v2r0nmgs238alcjdl.apps.googleusercontent.com',
        'clientSecret'  : 'SyArtocwI-PGFaWGEFhHruMyou',// Place your cliect secret here
        'callbackURL'   : 'http://localhost:3000/auth/google/callback'
    }

};