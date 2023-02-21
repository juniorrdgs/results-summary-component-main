fetch('data.json').then(response => {
    return response.json();
})
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            let strong = document.querySelectorAll('strong');
            let values = document.querySelectorAll('i');

            strong[i].innerHTML = `<img src="${data[i].icon}" alt="${data[i].category}" />${data[i].category}`;
            values[i].innerText = data[i].score;
        }
    });
