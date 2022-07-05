const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
exports.streetmixRedirect = functions.https.onRequest((req, res) => {
  res.redirect("https://github.3dstreet.org/#https://streetmix.net" + req.path);
});
