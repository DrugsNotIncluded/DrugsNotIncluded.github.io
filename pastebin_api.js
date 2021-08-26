import {postRequest,keyValueURLEncode} from './libs/methods.js';

let details = {
	'api_dev_key':'NLlhwOjBdRWLLG_4e42chRcUXtNruVL5',
	'api_user_name':'CoffeeDoll',
	'api_user_password':'yhn125125arm'
};

let detailsURLEncoded = keyValueURLEncode(details);
let cors_proxy = 'https://fierce-river-56744.herokuapp.com/';
let url = 'https://pastebin.com/api/api_login.php';
let params = {method:'POST',
	      mode:'cors',
	      cache:'no-cache',
	      credentials:'same-origin',
	      headers: {
		  'Content-Type':'application/x-www-form-urlencoded',
		  'Access-Control-Allow-Origin':'*'
	      },
	      redirect:'follow',
	      referrerPolicy:'no-referrer'};

postRequest(url = url,
	    data = detailsURLEncoded,
	    cors_proxy = cors_proxy,
	    params = params)
    .then((data) => {console.log(data);});
