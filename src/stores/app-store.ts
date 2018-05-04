import { observable, action } from "mobx";
import { AppState } from "../models/app-state";

class AppStore {
  @observable appState: AppState;

  constructor(){
    this.init();
  }

  @action init(){
    this.appState = AppState.LOGIN;
  }

  @action setAppState(appState: AppState): void{
    this.appState = appState;
  }
}

const appStore: AppStore = new AppStore();
export default appStore;