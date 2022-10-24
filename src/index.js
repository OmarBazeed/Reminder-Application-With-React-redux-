import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./components/app";
import './index.css';


import { Provider } from "react-redux";
import { legacy_createStore  as createStore} from "redux";
import reducer from "./rootReducers/reducer";

// This For Using  bootstrap In Your Project After Setupping bootstrap In The Terminal By --> npm i --save bootstrap , Then We Have To Use This Link 
import 'bootstrap/dist/css/bootstrap.css';


const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <>
        <Provider store={store}>
          <App />
        </Provider>
    </>
)

