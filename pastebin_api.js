//import {postRequest,keyValueURLEncode} from './libs/methods.mjs';

'use strict';

async function postRequest(url='',
			   data = '',
			   cors_proxy='',
			   params = {method:'',
				     mode:'',
				     cache:'',
				     credentials:'',
				     headers:{},
				     redirect:'',
				     referrerPolicy:''}) {
    params.body = data;
    //cors-proxy
    if (cors_proxy == true && cors_proxy[-1] == '/') {url = cors_proxy + "&" + url;}
    if (cors_proxy == true && cors_proxy[-1] != '/') {url = cors_proxy + "/&" + url;}

    //fetch
    const response = await fetch(url, params);
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

let data = keyValueURLEncode(details);
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
	    data = data,
	    cors_proxy = cors_proxy,
	    params = params)
    .then((data) => {console.log(data);});
