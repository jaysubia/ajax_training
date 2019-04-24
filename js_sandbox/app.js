document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object

  const xhr = new XMLHttpRequest();

  // Open
  // First parameter is the type of request
  // Second parameter is the file or address we are reading
  // the third parameter tells it to be asynchronous

  xhr.open('GET', 'data.txt', true);
  console.log('READYSTATE', xhr.readyState);
  // Optional - used for spinners/loaders
  xhr.onprogress = function () {
    console.log('READYSTATE', xhr.readyState);
  }

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);
      // this line will output whats in my file onto the index file rendered
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  xhr.onerror = function () {
    console.log('request errors');
  }

  xhr.send();



  // readyState Values
  // 0: request not initialized 
  // 1: server connection established
  // 2: request received 
  // 3: processing request 
  // 4: request finished and response is ready


  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}