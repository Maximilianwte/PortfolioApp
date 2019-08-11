import $ from "jquery";
var path = require("path");
import Store from "../store";
import key_file from "../keys/keys"

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
}

export default logic_functions
