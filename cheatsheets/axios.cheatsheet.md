## GET request
```javascript

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

```

## POST Request

```javascript
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
})
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
  });
```

## Multiple concurrent requests

```javascript
    function getUserAccount() {
        return axios.get('/user/12345');
    }

    function getUserPermissions() {
        return axios.get('/user/12345/permissions');
    }

    axios.all([getUserAccount(), getUserPermissions()])
        .then(axios.spread(function (acct, perms) {
        // Both requests are now complete
    })); 
```

## POST request config

```javascript
// Send a POST request
    axios({
    method: 'post',
    url: '/user/12345',
    data: {
        firstName: 'Fred',
        lastName: 'Flintstone'
    }
    });
```

## GET request config

```javascript
    // GET request for remote image
    axios({
    method: 'get',
    url: 'http://bit.ly/2mTM3nY',
    responseType: 'stream'
    })
    .then(function(response) {
    response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    });
```

## Create instance

```javascript
var instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```