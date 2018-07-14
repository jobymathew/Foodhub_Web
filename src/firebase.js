import firebase from "firebase";
// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
    apiKey: "AIzaSyCVKt70FBBBwW6YWp4q2tTflMC6ZImTDA0",
    authDomain: "foodhubweb.firebaseapp.com",
    databaseURL: "https://foodhubweb.firebaseio.com/",
    storageBucket: "gs://foodhubweb.appspot.com",
  };

  var fire = firebase.initializeApp(config);
export default fire;


// database instance
export const database = firebase.database()

// given a ref, this function will fetch the data from firebase
export async function fetchData(ref) {
  if (ref == null) { return }
  const snapshot = await ref.once('value')
  return snapshot != null ? snapshot.val() : undefined
}

export function fireTreeToArray(byId) {
  return byId != null ? Object.keys(byId).map(id => ({ id, ...byId[id] })) : undefined
}

// paths for firebase real time database
export const paths = {
  vendors: () => `/vendortest`,
  vendorById: (id: string) => `/vendortest/${id}`,
  users: () => `/user`,
  userById: (id: string) => `/user/${id}`,
}

// refs to firebase real time database
export const refs = {
  vendors: () => database.ref(paths.vendors()),
  vendorById: (id: string) => database.ref(paths.vendorById(id)),
  users: () => database.ref(paths.users()),
  userById: (id: string) => database.ref(paths.userById(id)),
}

// utility functions to fetch data from firebase real time database
export const firebaseData = {
  vendors: () => fetchData(refs.vendors()),
  vendorById: (id: string) => fetchData(refs.vendorById(id)),
  users: () => fetchData(refs.users()),
  userById: (id: string) => fetchData(refs.userById(id)),
}