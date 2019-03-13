# RNDatetimePickerBug
GitHub repository to show the BUG number #223 in react-native-modal-datetime-picker library.

Environment:

    "react": "16.8.3"
    "react-native": "0.59.0"
    "react-native-modal": "^9.0.0"
    "react-native-modal-datetime-picker": "^6.0.0"


# BUG:
  Loading dependency graph, done.
  error: bundling failed: Error: Unable to resolve module ./animations from node_modules\react-native-modal\src\index.js: The module ./animations could not be found from \node_modules\react-native-modal\src\index.js. Indeed, none of these files exist: \node_modules\react-native-modal\src\animations

The error is presented because react-native-modal-datetime-picker is using "react-native-modal": "6.2.0".

# To Reproduce
1 Clone the repository and run npm install
2 Run react-native run-android and see the two buttons with no action when they are pressed.
3 Run npm install  --save react-native-modal-datetime-picker
3 Uncomment commented code in App.js file
3 Run react-native run-android and now the two buttons show the modals.
4 Run npm install  --save react-native-modal
5 Run react-native run-android and the Bug is presented.
