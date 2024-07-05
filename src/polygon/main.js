import { DateTime } from 'luxon';
import { ipcRenderer } from "electron";
import axios from 'axios';

export default class Polygon{
    constructor(){
        this.baseUrl = 'https://api.polygon.io';
        this.apiSecondsLimit = 12;
        this.lastPollTime = null;
        this.key = null;
        this._getKey();
    }

    _setKey(k){
        this.key = k;
    }

    async _getKey(){
        ipcRenderer.send('getPolygonToken');
        ipcRenderer.on('sendPolygonToken', (event, arg) => {
            this._setKey(arg.key);
        });
    }

    _isKey(){
        return this.key !== null ? true : false;
    }

    _isLimitReached(){
        if (this.lastPollTime !== null) {
            const now = new Date();
            const elapsedSeconds = Math.floor((now - this.lastPollTime) / 1000);
            console.log(elapsedSeconds);
            return elapsedSeconds <= this.apiSecondsLimit;
        } else {
            return false;
        }
    }

    async getNews(ticker) {
        if (!this._isLimitReached() && this._isKey()) {
            const url = `${this.baseUrl}/v2/reference/news`;
            const params = new URLSearchParams({
                limit: 5,
                apiKey: this.key,
                }).toString();
            const symbol = ticker ? `&ticker=${ticker}` : '';
            this.lastPollTime = DateTime.now();
            const response = await axios.get(`${url}?${params}${symbol}`, {})
            .then(response => response.data.results)
            .catch(error => {
            console.error(`getNews() - ${error}`);
            throw error;
            });
            return response;
        } else if (this._isLimitReached()){
            console.log("Waiting for news...");

            // setTimeout(()=>{
            //     this.getNews(ticker);
            // }, 1000*this.apiSecondsLimit);
        } 
      }

}