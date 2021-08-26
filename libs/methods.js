'use strict';

async function postRequest(url='',
			   data = '',
			   cors_proxy='',
			   params = {}) {
    params.body = data;
    //cors-proxy
    let urlCors = cors_proxy + "/" + url;

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
export {postRequest, keyValueURLEncode};
