var firebase = require('firebase');

var schedule = require('node-schedule');

firebase.initializeApp({
  databaseURL: 'https://test-thinhvoxuan.firebaseio.com',
  serviceAccount: {
    "type": "service_account",
    "project_id": "test-thinhvoxuan",
    "private_key_id": "dc411648e327d620318b188555481b1fe7733de5",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEugIBADANBgkqhkiG9w0BAQEFAASCBKQwggSgAgEAAoIBAQCC2T742yn+mQQ8\n9orSNoz7wIQtFQazUB2Yo+CHhVYiPqbJojsTTf9JpbFy777r3BWnjDrq0Ds/VwNx\nW40vAsOAae5ydIW2R4Ay/R70sB78YRaLpwTwZG8F3T9paQnhvdfofPAYl1+S2tM0\nAGgLKco8tCr1c9F15CTSvg/Cpq1TESJ+OatM07+qa9+gMzze4rzCJoDxadiWdTOw\n3GymID8EJwhJH4GfGP4v7fqhD0gObzOmNxYAjQSO2SLz7icRrBCJSm2eel1G4fxg\nxiFEcROoFLB5xknMulV619TQQp629aQCz8FbOSeLuFJWqMa9+TvS9f2GEg30NUia\nInxTxn0lAgMBAAECggEAVYPDmwIpBOJeGbWK7m2GYDXmbEw0j9YJMavQXuFudHz7\npgVnlGtCL5ChUxuKbDzuzgxgqPuj7PZiIqCRuaqVuIQCuTyb8o/yIeC5bXL5HToa\ncPSbzrvkrzF0cuCZ+7WFuMSGaZvsc16d73tghAMwz9Fzzex+dQzAYBak2DL0TbeS\nmm0EOznLOzJGu8STtrJNAmHqnWrk22ojmXmEwN90W3p0s57zESX/wg36DJkMJgfl\nTCfUv2bUjFDwe6KsE3M02d8RsraeB/+Q+b1I4VUNy8pEiQsX8kwRCHnZAOIP61iR\nvz5s6/LynIHn2zjWhIwEQGKHF8IrKtWtGmtHms08oQKBgQC/aS/rKrskk2Q811Qg\nbeR6R+xqkBsLSP1bqbm4lvU2nfx2pr7xmzhp6IBnW22h8AHvAr/SdBBfvbuCptaT\n13WOC8DbHFpOpjQYEQ0ixt17jZfUFOV8NHLkfCYM3RwsLCpeiDJICtTmFd3oPayt\nRUdAUUF9A0jx5N7pXuVub9KRaQKBgQCvAHSlFf4Z5cnXHmsNn3CyWbfzXvY4s3u1\n/D0jX0a8F2WUGjGdgS2ijsVVq3j9MObCnXI/7/JD3Qfpuxp7TQJDXfYkBm+L6E3G\ntKLq28MdyRfFM5aUvtYjyXnkt/c7AGsGB0nNGNq0QeqGtWj9WnwBa+V7AR6TK0xz\nWW6RQgsaXQJ/HehRlG0Y0J43C0qZ2ndRO8oBJqVdlGXTMH9UhYMQzXfh+qgTLa0T\nI3kwlvWyK5tUsgO79SYtaMg8hC2NWYxQ0eEEQTgs5B0UBq6jXsuzz5pQHtMlCEMp\nsIm1aE0kGcLM2/hr4tXObiT8h00brfclKueHVAEvZJxeOBibwKW4QQKBgGHESmY0\nHCpRsupoRvxsV6R79QWUxs+0jeeEjI9nWfgYxhnwbEmG8ny/cEVFL6mbmT+egEZy\nAZGiORp9+fRqeFo0cx97LPQnitP49I9qyN2qC4qTIIvm9XE2zM9Xa1peCGxsw/E9\n8mkD7kblsEriMycEJUcLwA4OAX7rtpaWI+fNAoGAEfALm9JrrhsUhOJI5+0A4zdk\nk5qOD8M9GZrQwkffzAMLDyp3LeKpUxKGWR2ej/oysmefgrf272oYHWYEKJFMm44N\nb+yVLp1jbN2JTx6ASXr3Dge+BOm+HasusCNywJi4ZQDscPBM4gYx2urV9kcKR8be\nedCCt2KT6Zgmx8l2D1I=\n-----END PRIVATE KEY-----\n",
    "client_email": "nodeserveraccount@test-thinhvoxuan.iam.gserviceaccount.com",
    "client_id": "118207291751742960669",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://accounts.google.com/o/oauth2/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/nodeserveraccount%40test-thinhvoxuan.iam.gserviceaccount.com"
  }
});


var db = firebase.database();
var refUser = db.ref("users");
var x = 0;
var j = schedule.scheduleJob('*/5 * * * * *', function(){
  var newUser = {
    'username': 'thinh ' + x,
    'id': x
  }
  refUser.push(newUser)
  x += 1;
  console.log('add new user: ', newUser)
})

refUser.on('child_added', function(postSnapshot) {
  console.log('snapshot: ', postSnapshot.val())
})