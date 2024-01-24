const admin = require('firebase-admin');
const serviceAccount = require('./digital-door-f3ef2-firebase-adminsdk-p6wmb-d69cfab31d[1].json');

// const firebaseConfig = {
//   apiKey: "AIzaSyDXI9YW8HuEkn_KVUrU-LC5m1HwN1QEgO8",
//   authDomain: "jsom-c23a1.firebaseapp.com",
//   databaseURL: "https://jsom-c23a1-default-rtdb.firebaseio.com",
//   projectId: "jsom-c23a1",
//   storageBucket: "jsom-c23a1.appspot.com",
//   messagingSenderId: "737204936841",
//   appId: "1:737204936841:web:7f455db2a0301887bba658",
//   measurementId: "G-5KM5VJC4Q4"
// };


// // Initialize the Firebase Admin SDK
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

// const firestore = admin.firestore();
// const collectionRef = firestore.collection('pid');

// Real-time listener for Firestore collection changes
// collectionRef.onSnapshot(
//   (snapshot) => {
//     snapshot.docChanges().forEach((change) => {
//       const documentData = change.doc.data();
//       const documentId = change.doc.id
//     });
//   },
//   (error) => {
//     console.error('Error in real-time listener:', error);
//   }
// );

// Function to fetch data from Firestore
const toFetchDataFromDb = (callback) => {

  const data= [{"Member2":"tiglioner","Water_Tax":"2500","Property_Tax":"0","Members":"apoorvJain, paragJain,seemaJain","Property Tax":"UnPaid","Water Tax":"UnPaid","Garbage Tax":"Paid","Name":"Aarav bhai ji Patelf from AITR","Member3":"RamJoshi","Latitude":"25.4486","Address":"777 Brockton Avenue, Abington MA 2351","Member1":"AdityaVinch","Longitude":"78.5685°","Garbage_Tax":"0"},{"Latitude":"22.722224","Water_Tax":"0","Member2":"AshishKumarSingh","Member1":"SeemaJain","Property_Tax":"0","Property Tax":"Unpaid","Address":"374 William S Canning Blvd, Fall River MA 2721","Garbage_Tax":"150","Water Tax":"Paid","Longitude":"75.870719","Garbage Tax":"Unpaid","Members":"apoorvJain, paragJain,seemaJain, devJain","Name":"Meera Joshi","Member3":"ParagJain"},{"Garbage Tax":"Paid","Member1":"AdityaVinchhi","Members":"apoorvJain, paragJain,seemaJain","Water Tax":"Unpaid","Latitude":"22.700439","Water_Tax":"890","Name":"Diya Kapoor","Garbage_Tax":"0","Member2":"ParagJain","Member3":"AshishKumarSingh","Property_Tax":"3500","Property Tax":"Unpaid","Longitude":"75.863411","Address":"1201 Rt 300, Newburgh NY 12550"}]
  
  callback(data);
  // collectionRef.get().then((snapshot) => {
  //   const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  //   callback(data);
  // });
};

toFetchDataFromDb((data) => {
  console.log('Data fetched from Firestore:', data);
});

const filterGarbage = (callback, category, toCompare) => {
  collectionRef
    .where(category, '==', toCompare)
    .get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      callback(data);
    })
    .catch((error) => {
      console.error('Error filtering data:', error);
    });
};

module.exports = {
  toFetchDataFromDb,
  filterGarbage,
};
