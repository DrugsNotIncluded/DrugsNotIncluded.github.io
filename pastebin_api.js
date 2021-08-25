//const fetch = require("node-fetch");


async function postRequest(request, server) {
	const response = await fetch(server, {
		method:'POST',
		mode:'no-cors',
		cache:'no-cache',
		credentials:'same-origin',
		headers: {
			'Content-Type':'application/x-www-form-urlencoded'
		},
		redirect:'follow',
		referrerPolicy:'no-referrer',
		body: request
	});
	return await response
}

let api_dev_key = 'NLlhwOjBdRWLLG_4e42chRcUXtNruVL5';

postRequest("test","https://httpbin.org/post")
.then((response) => {return response.json();})
.then((data) => {console.log(data);});