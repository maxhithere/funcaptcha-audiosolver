let sr = require('speech_recognition');
let axios = require('axios');
let string = require('string');
let ascii = require("string-ascii")
let k;

function get_token(host, pkey, proxy=null) {
		if (proxy == null) {
			return axios.post(`https://client-api.arkoselabs.com/fc/gt2/public_key/${pkey}`, data={'bda': '','public_key': pkey,'site': host,'userbrowser': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36','rnd': `0.${Math.random("12334565789")}`}).json()['token'];
		} else {
			return axios.post('https://client-api.arkoselabs.com/fc/gt2/public_key/{pkey}', proxies={'all://': proxy}, data={'bda': '','public_key': pkey,'site': host,'userbrowser': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36','rnd': `0.${Math.random("12334565789")}`}).json()['token'];
		}

	function recognizeAudio(audiofilename) {
		let recognize = sr.Recognizer();
		let s = sr.AudioFile(audiofilename + '.wav');
		let	data = recognize.record(s);
		let	raw = recognize.recognize_google(data);
		let	answer = '';

			for (i in raw) {
				if (typeof i == 'number') {
					answer += i;
			return answer;
				}

	function solveCaptcha(token, proxy=null) {
		let session_token = token.split('|')[0];
		let getcaptchaAudio;

		if (proxy == null) {
			getcaptchaAudio = axios.get(`https://client-api.arkoselabs.com/fc/get_audio/?session_token=${session_token}&analytics_tier=40&r=us-east-1&game=1&language=en`);
		} else {
			getcaptchaAudio = axios.get(`https://client-api.arkoselabs.com/fc/get_audio/?session_token=${session_token}&analytics_tier=40&r=us-east-1&game=1&language=en`, proxies={'all://': proxy});
		let audiornd = ''.join(Math.random(string.ascii_uppercase + Math.random("123456789"), k = 7))
		
		
		
		}
		let attemptSolve = axios.post('https://client-api.arkoselabs.com/fc/audio/', proxies=proxy,
		headers = {
			'authority': 'client-api.arkoselabs.com',
			'accept': '*/*',
			'cache-control': 'no-cache',
			'x-newrelic-timestamp': Date.now(),
			'x-requested-with': 'XMLHttpRequest',
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36',
			'content-type': 'application/x-www-form-urlencoded',
			'origin': 'https://client-api.arkoselabs.com',
			'sec-fetch-site': 'same-origin',
			'sec-fetch-mode': 'cors',
			'sec-fetch-dest': 'empty',
			'accept-language': 'en-US,en;q=0.9'
		},
		data = {
			'session_token': session_token,
			'language': 'en',
			'r': 'us-east-1',
			'audio_type': '2',
			'response': audiornd,
			'analytics_tier': '40'
		});
		try {
			if (attemptSolve.json()['response'] == 'correct') {
				return attemptSolve.json();
			} else if (attemptSolve.json()['response'] !== 'correct') {
				return false;
			} else {
				return false;
		} 
		} catch(err) {
			return err, false;
	
			}

	} 

			}

		

	}

	}


	
