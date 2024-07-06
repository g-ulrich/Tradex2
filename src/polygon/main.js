import { DateTime } from 'luxon';
import { ipcRenderer } from "electron";
import axios from 'axios';

export default class Polygon{
    constructor(){
        this.baseUrl = 'https://api.polygon.io';
        this.pollCount = [];
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

    _updatePollCount(){
        console.log( this.pollCount);
        /*
            Can make api request 5 times every minute on free.
        */
        if (this.pollCount.length > 0){
            var first = this.pollCount[0];
            var last = this.pollCount[this.pollCount.length - 1];
            const elapsedSeconds = Math.floor((last.time - first.time) / 1000);
            if (elapsedSeconds > 60) {
                this.pollCount = [];
            }
        }
        this.pollCount.push({id: this.pollCount.length, time: DateTime.now()});
    }

    _canProceed(){
        if (this.pollCount.length < 5 && this._isKey()){
            return true;
        }else{
            return false;
        }
    }

    async getMarketStatus(){
        if (this._canProceed()) {
            const url = `${this.baseUrl}/v1/marketstatus/now?apiKey=${this.key}`;
            const response = await axios.get(url, {})
                .then(response => {
                    this._updatePollCount();
                    return response.data;
                })
                .catch(error => {
                    console.error(`getMarketStatus() - ${error}`);
                    throw error;
                });
            return response;
        } 
    }

    async getNews(ticker) {
        if (this._canProceed()) {
            const url = `${this.baseUrl}/v2/reference/news`;
            const params = new URLSearchParams({limit: 5, apiKey: this.key,}).toString();
            const symbol = ticker ? `&ticker=${ticker}` : '';
            const response = await axios.get(`${url}?${params}${symbol}`, {})
                .then(response => {
                    this._updatePollCount();
                    return response.data.results;
                })
                .catch(error => {
                    console.error(`getNews() - ${error}`);
                    throw error;
            });
            return response;
        } 
      }

}