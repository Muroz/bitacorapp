
import * as firebase from "firebase";

class Firebase {

    /**
     * Initialises Firebase
     */
    static initialize() {

        const config = {
            apiKey: "AIzaSyAQUlWbJaZEuEUIntULiqNULcEhj7rscVE",
            authDomain: "bitacorapp-bace1.firebaseapp.com",
            databaseURL: "https://bitacorapp-bace1.firebaseio.com",
            projectId: "bitacorapp-bace1",
            storageBucket: "bitacorapp-bace1.appspot.com",
          };
          firebase.initializeApp(config);
    }

}

module.exports = Firebase;