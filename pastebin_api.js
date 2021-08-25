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
	return await response.json()
}

let api_dev_key = 'NLlhwOjBdRWLLG_4e42chRcUXtNruVL5';

class Pastebin {
    constructor(api_dev_key, api_user_name=null, api_user_password=null) {
	
		this.pastebin_api_endpoint = 'https://pastebin.com/api/api_post.php';
		this.pastebin_login_endpoint = 'https://pastebin.com/api/api_login.php';
		this.api_user_name = api_user_name;
		this.api_user_password = api_user_password;
		this.api_dev_key = api_dev_key;
		this.api_user_key = '';
    }

	request = `api_dev_key=${api_dev_key}&api_user_name=${api_user_name}&api_user_password=${api_user_password}`
	api_user_key = postRequest(this.request, this.pastebin_login_endpoint)

    createPaste(paste=null) {
		postRequest(`api_option=paste&api_dev_key=${api_dev_key}&api_user_key=${this.api_user_key}&api_paste_code=${paste}`,
	 	this.pastebin_api_endpoint).then((data) => {return data});
    }
	
}

//tests
let paste = `Meow meow? MEOW MEOWWWW MEOOOOWWWWWWWWW`
let pastebin = new Pastebin(api_dev_key=api_dev_key, api_user_name='CoffeeDoll', api_user_password='yhn125125arm');
response = pastebin.createPaste(paste=paste)