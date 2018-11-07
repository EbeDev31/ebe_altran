console.log("Start Ebe Twitter");

var Twit = require("twit")

var config = require("./config")
//console.log(config);
var T = new Twit(config);




function userSer(){

 process.stdin.resume();
  process.stdin.setEncoding('utf8');
  var util = require('util');

  process.stdin.on('data', function (text) {

   if (text === 'quit') {
     process.exit();
    }
    else{

    	var param ={ 
			q: text, 
			count: 5 

			
		};
		T.get('search/tweets', param, gotData);
    }
 });

}


 function gotData(err, data, response) {
	var ebeNeed=[];
	var tweets = data.statuses;
	if(tweets.length===0)
		{
			console.log("No Tweets Found");
		}

	else{
		for (var i = 0; i < tweets.length; i++) {
			ebeNeed.push(tweets[i].text);
			console.log(tweets[i].text)
		}
	}

	return ebeNeed;
};

userSer();

