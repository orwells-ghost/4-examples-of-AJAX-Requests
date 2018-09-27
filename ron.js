const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes', 
      xhrBtn = document.getElementById('xhr'),
      fetchBtn = document.getElementById('fetch'), 
      $jqueryBtn = $('#jquery'), 
      axiosBtn = document.getElementById('axios'),
      paraEl = document.getElementById('quote');

////////// XHR Functions
const xhrEventListener = xhrBtn.addEventListener('click', function() {
    xhrGetData();
});

const xhrGetData = function() {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let data = JSON.parse(xhr.responseText);
            updateEl(data[0]);
        }
    }

    xhr.open('GET', url);
    xhr.send();
}

////////// Fetch Functions
fetchBtn.addEventListener('click', function() {
    fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateEl)
    .catch(displayErrors)
});

const handleErrors = res => {
    if (!res.ok) {
        throw Error(res.status);
    }
    return res;
}

const parseJSON = res => res.json().then(parsedData => parsedData[0])

const displayErrors = error => console.log(error);

////////// jQuery Functions
$jqueryBtn.click(function() {
    $.getJSON(url)
    .done(data => updateEl(data[0]))
});

////////// Axios Functions
axiosBtn.addEventListener('click', () => axios.get(url).then((res) => updateEl(res.data[0])));

// Function to update paragraph element
const updateEl = (data) => { paraEl.textContent = data };