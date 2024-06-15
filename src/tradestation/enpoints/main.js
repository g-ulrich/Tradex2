import TSEndpoints from './endpoints';
// import Cookies from 'js-cookie';
import {currentESTDatetime} from '../../util';
import {Accounts} from './accounts';
import {MarketData} from './marketData';
import {Orders} from './orders';
import {Symbols} from './symbols';
import { ipcRenderer } from "electron";

export class TS {
  constructor() {
    this.endpoints = new TSEndpoints();
    this.refreshToken();
    this.token = null;
    // Nested Classes
    this.account = null;
    this.marketData = null;
    this.order = null;
    this.symbol = null;
  }

  info(msg=""){
    console.log(`${currentESTDatetime()} TS [INFO] - ${msg}`)
  }

  error(msg=""){
    console.error(`${currentESTDatetime()} TS [ERROR] - ${msg}`)
  }

  refreshClasses(accessToken){
    this.info(`TS Classes (token: ${typeof accessToken === 'string' ? 'success': 'failure'}, length: ${accessToken?.length}, Token: ${accessToken?.slice(0, 5)}...${accessToken?.slice(-5)})`);
    if (this.account === null) {
      this.account = new Accounts(accessToken);
      this.marketData = new MarketData(accessToken);
      this.order = new Orders(accessToken);
      this.symbol = new Symbols(accessToken);
    } else {
      this.account.accessToken = accessToken;
      this.marketData.accessToken = accessToken;
      this.order.accessToken = accessToken;
      this.symbol.accessToken = accessToken;
    }
  }

  async refreshToken(){
    ipcRenderer.send('getRefreshToken');
    ipcRenderer.on('sendRefreshToken', (event, arg) => {
       this.token = arg.ts;
      this.refreshClasses(this.token?.access_token)
    });
  }
}

export default TS;
