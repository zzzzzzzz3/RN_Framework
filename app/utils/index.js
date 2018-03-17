export {default as HttpRequest} from "./HttpRequest";

export { NavigationActions } from 'react-navigation'

export { default as Storage } from './StorageUtil'

export const delay = time => new Promise(resolve => setTimeout(resolve, time));

export const createAction = type => payload => ({ type, payload });
