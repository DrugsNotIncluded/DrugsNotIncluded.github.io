
async function postRequest(url='', data='') {
	const response = await fetch(url, {
		method: 'POST',
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
			'Content-Type':'application/x-www-form-urlencoded',
			'Access-Control-Allow-Origin':'*'
		},
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
		body: data
	});
	const reader = response.body.getReader();
	return new ReadableStream({
		start(controller) {
			return pump();
			function pump() {
				return reader.read().then(({done, value}) => {
					if (done) {
						controller.close();
						return;
					}
					controller.enqueue(value);
					return pump();
				})
			}
		}
	})
	.then(stream => new Response(stream))
	.then(response => response.blob())
	.then(blob => URL.createObjectURL(blob))
	.then(url => console.log(url))
	.catch(err => console.error(err));
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

postRequest("https://fierce-river-56744.herokuapp.com/?https://pastebin.com/api/api_login.php",body)
.then((data) => {console.log(data);});