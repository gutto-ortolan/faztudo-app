import React from "react";
import Providers from "./src/navigation";

import firebaseConfig from "./src/services/FirebaseConfig";
import * as firebase from "firebase";

export default function App() {
  firebase.initializeApp(firebaseConfig);
  return <Providers />;
}
