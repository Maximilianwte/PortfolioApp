var admin = require("firebase-admin");
var firebase = require("firebase");
var serviceAccount = require("../config/FirebaseAdminkey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://helmsportfolio-e4ea8.firebaseio.com"
});

var config = {
  apiKey: "AIzaSyBOjSnCmTyh58g_htL6ONCIEU8hUw9nEF8",
  authDomain: "helmsportfolio-e4ea8.firebaseapp.com",
  databaseURL: "https://helmsportfolio-e4ea8.firebaseio.com",
  projectId: "helmsportfolio-e4ea8",
  storageBucket: "helmsportfolio-e4ea8.appspot.com",
  messagingSenderId: "485810987016"
};

firebase.initializeApp(config);

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();
// Create a storage reference from our storage service
var storageRef = storage.ref();

// Child references can also take paths delimited by '/'
var PreviewFolder = storageRef.child("images/previewfolder");
var MainFolder = storageRef.child("images/mainfolder");

module.exports = app => {};
