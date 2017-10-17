import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import * as moment from 'moment';

@Injectable()
export class GreybackProvider {
	rootUrl: string = 'http://firstburleson.server3.greyback.net/';
	headers: any = new Headers;
	opts: any;


	constructor(public http: Http) {
		console.log('Hello GreybackProvider Provider');
		this.headers.append('Accept', 'application/json');
		this.headers.append('Content-Type', 'application/json');
		this.headers.append('Authorization', "Basic " + btoa('patrickkemp:Three3leaf'));
		this.opts = new RequestOptions({ headers: this.headers });
	}

	getNews() {
		return this.http.get(this.rootUrl + '/ajax/plugin/news/news_articles/json/limit:4/category:3').map(result => result.json());
	}

	getCommunity() {
		//return this.http.get(this.rootUrl + '/ajax/plugin/news/news_articles/json/limit:10/category:2').map(result => result.json());
		return this.http.get(this.rootUrl + '/ajax/plugin/community/community_posts/latest/department:2').map(result => result.json());
	}

	getSeries() {
		return this.http.get(this.rootUrl + '/ajax/plugin/message/message_series/json/category:1').map(result => result.json());
	}

	getSeriesById(seriesId: number) {
		return this.http.get(this.rootUrl + '/ajax/plugin/message/message_messages/json/series:' + seriesId).map(result => result.json());
	}

	getLatestSermon() {
		return this.http.get(this.rootUrl + '/ajax/plugin/message/message_messages/json/limit:1/category:1').map(result => result.json());
	}

	getEvents() {
		return this.http.get(this.rootUrl + '/ajax/plugin/news/news_articles/json/limit:10/category:3').map(result => result.json());
	}

	getStaff() {
		return this.http.get(this.rootUrl + '/ajax/plugin/staff/staff_departments/json/department:2').map(result => result.json())
	}

	getCalendars() {
		return this.http.get('https://secure.accessacs.com/api_accessacs_mobile/v2/10413/calendars', this.opts).map(result => result.json());
	}

	getCalendar(pageIndex) {
		let today = moment().format('YYYY/MM/DD');
		//let end = moment().add(30,'days').format('YYYY/MM/DD');

		//58c08c0d-776d-4762-8180-0df5fcf1ae74
		return this.http.get('https://secure.accessacs.com/api_accessacs_mobile/v2/10413/events?&startdate='+today+'&pageIndex='+pageIndex+'&pageSize=50&calendarids=58c08c0d-776d-4762-8180-0df5fcf1ae74', this.opts).map(result => result.json());
		//return this.http.get('http://localhost:8100/assets/data.json', this.opts).map(result => result.json());
	}

	getEvent(eventId: string) {
		//console.log(eventId);
		return this.http.get('https://secure.accessacs.com/api_accessacs_mobile/v2/10413/events/' + eventId, this.opts).map(result => result.json());
	}

}
