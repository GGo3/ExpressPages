const btnEl = document.querySelector('.input-btn');

btnEl.addEventListener('click', (event) => {
    const inputEl = document.querySelector('.input');
    console.log(inputEl.value);
    document.location.replace(`/${inputEl.value}`);
});


