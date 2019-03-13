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
Just download the repository and run npm install
