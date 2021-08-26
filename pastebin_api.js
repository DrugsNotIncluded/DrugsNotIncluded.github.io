//import {postRequest,keyValueURLEncode} from './libs/methods.mjs';

'use strict';

async function postRequest(url='',
			   data = '',
			   cors_proxy='',
			   params = {}) {
    params.body = data;
    //cors-proxy
    let urlCors = cors_proxy + "/" + url;

    console.log(urlCors);
    console.log(data);
    console.log(params);
    //fetch
    const response = await fetch(urlCors, params);
    return await response.text();
}

function keyValueURLEncode(details) {
    let body = [];
    for (let property in details) {
	let encodedKey = encodeURIComponent(property);
	let encodedValue = encodeURIComponent(details[property]);
	body.push(encodedKey+"="+encodedValue);
    }
    body = body.join("&");
    return body;
}

//test

let details = {
	'api_dev_key':'NLlhwOjBdRWLLG_4e42chRcUXtNruVL5',
	'api_user_name':'CoffeeDoll',
	'api_user_password':'yhn125125arm'
};


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

postRequest('https://pastebin.com/api/api_login.php',
	    keyValueURLEncode(details),
	    'https://fierce-river-56744.herokuapp.com',
	    params)
    .then((data) => {console.log(data);});
