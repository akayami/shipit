"use strict";

let endpoints = {
	sandbox: 'https://wsbeta.fedex.com/xml',
	live: 'https://ws.fedex.com/xml'
};

describe('Tests fedex sandbox', () => {
	it('Needs to accept url overwrite', (done) => {
		const {
			UpsClient,
			FedexClient,
			UspsClient,
			DhlClient,
			LasershipClient,
			OnTracClient,
			UpsMiClient,
			DhlGmClient,
			CanadaPostClient,
			AmazonClient,
			PrestigeClient
		} = require('../lib/main');


		let client = new FedexClient({
			key: 'KHiT1YlGBqFK8Zgh',
			password: 'objqv5zt2ZTSUCufldSCgFfCt',
			account: '510087240',
			meter: '118861884',
			endpoint: endpoints.sandbox
		});


		client.requestData({trackingNumber: '123456789012'}, (err, result) => {
			console.log(err, result);
			done(err, result);
		});
	}).timeout(15000);

	it('Needs to accept url overwrite', (done) => {
		const {
			UpsClient,
			FedexClient,
			UspsClient,
			DhlClient,
			LasershipClient,
			OnTracClient,
			UpsMiClient,
			DhlGmClient,
			CanadaPostClient,
			AmazonClient,
			PrestigeClient
		} = require('../lib/main');


		let client = new FedexClient({
			key: 'KHiT1YlGBqFK8Zgh',
			password: 'objqv5zt2ZTSUCufldSCgFfCt',
			account: '510087240',
			meter: '118861884',
			endpoint: endpoints.sandbox
		});


		client.requestData({trackingNumber: '111111111111'}, (err, result) => {
			console.log(err, result);
			done(err, result);
		});
	}).timeout(15000)
});