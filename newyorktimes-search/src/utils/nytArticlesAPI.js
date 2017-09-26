// // import axios from "axios";
// axios = require("axios");

// // // This variable will be pre-programmed with our authentication key
// // // (the one we received when we registered)
// // const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// // // These variables will hold the results we get from the user's inputs via HTML
// // var searchTerm = "";
// // const limitResults = 5;
// // var startYear = 0;
// // var endYear = 0;

// // // queryURLBase is the start of our API endpoint. The searchTerm will be appended to this when
// // // the user hits the search button
// // var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
// //   authKey + "&q=News";

// // // Counter to keep track of article numbers as they come in
// // var articleCounter = 0;

// // var queryURL = queryURLBase;

// // console.log(axios({
// //   method:'get',
// //   url:queryURL,
// //   responseType:'json'
// // }).then(function(NYTData) {
// // 	// console.log(NYTData.data.response.docs[0]);
// // 	let res = NYTData.data.response.docs;
// // 	let found = [];
// // 	for (let i = 0; i < limitResults && i < res.length; i++) {
// // 		found.push({
// // 			title: res[i].headline.main,
// // 			url: res[i].web_url
// // 		});
// // 	}
// // 	console.log(found);
// // 	return(found);
// // }));

// console.log(searchNYT({topic:"News",startYear:2016,endYear:2017}));

// function searchNYT (params) {
// 	// This variable will be pre-programmed with our authentication key
// 	// (the one we received when we registered)
// 	const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// 	// These variables will hold the results we get from the user's inputs via HTML
// 	let searchTerm = params.topic;
// 	const limitResults = 5;
// 	let startYear = params.startYear;
// 	let endYear = params.endYear;

// 	var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${authKey}&q=${searchTerm}&begin_date=${startYear}0101&end_date=${endYear}0101`;
// 	console.log(queryURL);

// 	let found = [];

// 	axios({
// 	  method:'get',
// 	  url:queryURL,
// 	  responseType:'json'
// 	}).then(function(NYTData) {
// 		// console.log(NYTData.data.response.docs[0]);
// 		let res = NYTData.data.response.docs;
		
// 		for (let i = 0; i < limitResults && i < res.length; i++) {
// 			found.push({
// 				title: res[i].headline.main,
// 				url: res[i].web_url
// 			});
// 		}
// 		// console.log(found);
		
// 	});

// 	// return(found);
// }

// // function generateQuery(params) {
// // 	// This variable will be pre-programmed with our authentication key
// // 	// (the one we received when we registered)
// // 	const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// // 	// These variables will hold the results we get from the user's inputs via HTML
// // 	let searchTerm = params.topic;
// // 	const limitResults = 5;
// // 	let startYear = params.startYear;
// // 	let endYear = params.endYear;

// // 	var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${authKey}&q=${searchTerm}&begin_date=${startYear}0101&end_date=${endYear}0101`;
// // 	console.log(queryURL);

// // 	return queryURL;
// // }