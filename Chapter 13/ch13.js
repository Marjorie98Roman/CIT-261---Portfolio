const url = 'https:example.com/data';
fetch(url)
.then((response) => {
if(response.ok) {
return response;
}

throw Error(response.statusText);
})
.then( response => // do something with response )
.catch( error => console.log('There was an error!') )

fetch(url)
.then( response => response.redirect(newURL));

.then( // do something else )
.catch( error => console.log('There was an error: ', error))

fetch(url)
.then( response => response.text() ); // transforms the text stream into a JavaScript string
.then( text => console.log(text) )
.catch( error => console.log('There was an error: ', error))

fetch(url)
.then( response => response.blob() ); // transforms the data into a blob object
.then( blob => console.log(blob.type) )
.catch( error => console.log('There was an error: ', error))

fetch(url)
.then( response => response.json() ); // transforms the JSON data into a JavaScript object
.then( data => console.log(Object.entries(data)) )
.catch( error => console.log('There was an error: ', error))

const response = new Response( 'Hello!', {
    ok: true,
    status: 200,
    statusText: 'OK',
    type: 'cors',
    url: '/api'
});

const request = new Request('https://example.com/data', {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    cache: 'no-cache'
});

fetch(request)
.then( // do something with the response )
.catch( // handle any errors)
    
fetch('https://example.com/data', {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    cache: 'no-cache'
})
.then( // do something with the response )
.catch( // handle any errors)
    
const headers = new Headers({ 'Content-Type': 'text/plain','Accept-Charset' : 'utf-8', 'Accept-Encoding':'gzip,deflate'})

const url = 'https:example.com/data';
const headers = new Headers({ 'Content-Type': 'text/plain','Accept-Charset' : 'utf-8', 'Accept-Encoding':'gzip,deflate'})
const request = (url,{
    headers: headers
})
fetch(request)
.then( function(response) {
    if(response.ok) {
        return response;
    }
throw Error(response.statusText);
})
.then( response => // do something with response )
.catch( error => console.log('There was an error!') )

































