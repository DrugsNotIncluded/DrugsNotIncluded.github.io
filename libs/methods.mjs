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

export {postRequest, keyValueURLEncode}
