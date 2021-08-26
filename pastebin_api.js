'use strict';

import {postRequest,keyValueURLEncode} from './libs/methods.js';

//details
let details = {
	'api_dev_key':'NLlhwOjBdRWLLG_4e42chRcUXtNruVL5',
	'api_user_name':'CoffeeDoll',
	'api_user_password':'yhn125125arm'
};

class Pastebin {
    params = {method:'POST',
	      mode:'cors',
	      cache:'no-cache',
	      credentials:'same-origin',
	      headers: {
		  'Content-Type':'application/x-www-form-urlencoded',
		  'Access-Control-Allow-Origin':'*'
	      },
	      redirect:'follow',
	      referrerPolicy:'no-referrer'};
    
    constructor(api_dev_key='', api_user_name='', api_user_password='',cors_proxy='') {
	this.api_dev_key = api_dev_key;
	this.api_user_name = api_user_name;
	this.api_user_password = api_user_password;
	this.cors_proxy = cors_proxy;
    

	this.api_user_key = (async () => {
	    details = {'api_dev_key':this.api_dev_key,
		       'api_user_name':this.api_user_name,
		       'api_user_password':this.api_user_password};
	    return await postRequest('https://pastebin.com/api/api_login.php',
				     keyValueURLEncode(details),
				     this.cors_proxy,
				     this.params)
		.then((data) => {return data;});
	});
    }	
}


let paste = new Pastebin('NLlhwOjBdRWLLG_4e42chRcUXtNruVL5',
			 'Coffeedoll',
			 'yhn125125arm',
			 'https://fierce-river-56744.herokuapp.com');
