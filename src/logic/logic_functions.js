//import $ from "jquery";
var path = require("path");
const fs = require('fs');
const fileDialog = require('file-dialog')
import Store from "../store";
import key_file from "../keys/keys"
import {
    strict
} from "assert";

const firebase = require("firebase");

var firebaseConfig = key_file;

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

let logic_functions = {
    get_images() {
        db.collection("images").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                let data = doc.data()
                var output_data = {
                    "Id": data.id,
                    "Titel": data.titel,
                    "Aufnahmeort": data.Aufnahmeort,
                    "Aufnahmedatum": data.Aufnahmedatum,
                    "Image_URL": data.bild
                };
                Store.commit("getImages", output_data)


            });
        });


    },
    auth(input) {
        db.collection("credentials").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                let data = doc.data()
                if (String(data.credit) == input) {
                    Store.commit("setAuth", true)
                } else {
                    Store.commit("setAuth", false)
                }
            });
        });
    },
    select_images() {
        fileDialog({
                multiple: true,
                accept: 'image/*'
            })
            .then(files => {
                for (var index in files) {
                    const fd = new FormData();
                    fd.append("image", files[index], files[index].name)

                    console.log(fd)
                }
            })
    },
    upload_files(in_file) {
        // handles just one right now
        const fd = new FormData();
        fd.append("image", in_file, in_file.name)

        // Create a root reference
        var storageRef = firebase.storage().ref();
        var title = storageRef.child('mountains.jpg');
        var path = storageRef.child('images/mountains.jpg');
        console.log(fd)
        storageRef.put(fd).then(function (snapshot) {
            console.log('Uploaded a blob or file!');
        });
    },
    set_authCookie(input = 7) {
        var d = new Date();
        d.setTime(d.getTime() + (input*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = "auth=true" + ";" + expires + ";path=/";
        console.log("cookie set")
    },
    read_authCookie(cookie) {
        var name = cookie + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
    }
}

export default logic_functions