
async function postRequest(url='', data='') {
	const response = await fetch(url, {
		method: 'POST',
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
			'Content-Type':'application/x-www-form-urlencoded'
		},
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
		body: data
	});
	return await response.json();
}

let details = {
	'api_dev_key':'NLlhwOjBdRWLLG_4e42chRcUXtNruVL5',
	'api_user_name':'CoffeeDoll',
	'api_user_password':'yhn125125arm'
};
let body = [];

for (let property in details) {
	let encodedKey = encodeURIComponent(property);
	let encodedValue = encodeURIComponent(details[property]);
	body.push(encodedKey+"="+encodedValue);
}
body = body.join("&")

postRequest("https://pastebin.com/api/api_login.php",body)
.then((data) => {console.log(data);});