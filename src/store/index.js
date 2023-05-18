import { createStore } from "redux";
import Remember from "./reducers/reducers";

export const store = createStore(Remember);