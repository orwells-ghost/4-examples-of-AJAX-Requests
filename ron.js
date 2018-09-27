const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes', 
      xhrBtn = document.getElementById('xhr'),
      fetchBtn = document.getElementById('fetch'), 
      $jqueryBtn = $('#jquery'), 
      axiosBtn = document.getElementById('#axios'),
      paraEl = document.getElementById('quote');


////////// XHR Functions
const xhrEventListener = xhrBtn.addEventListener('click', function(){
    xhrGetData();
});

const xhrGetData = function(){
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            let data = JSON.parse(xhr.responseText);
            paraEl.textContent = data[0];
        }
    }

    xhr.open('GET', url);
    xhr.send();
}