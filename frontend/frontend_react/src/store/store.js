import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import Executor from "./reducers/executor";
import Reference from "./reducers/reference";
import BypassSheet from "./reducers/bypassSheet";
import Product from "./reducers/product";
import Posts from "./reducers/posts";
import Auth from "./reducers/auth";
import ReferenceType from "./reducers/referenceType";
import Customer from "./reducers/customer";
import Order from "./reducers/order";
import Osint from "./reducers/osint";
import Pentest from "./reducers/pentest";

let reducers = combineReducers({
    executors: Executor,
    customers: Customer,
    orders: Order,
    osints: Osint,
    pentests: Pentest,
    reference: Reference,
    referenceType: ReferenceType,
    bypassSheet: BypassSheet,
    products: Product,
    posts: Posts,
    auth: Auth,
})

export let store = createStore(reducers, compose(applyMiddleware(thunk)))

