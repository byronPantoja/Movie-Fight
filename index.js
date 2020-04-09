const fetchData = async searchTerm => {
    const response = await axios.get("http://www.omdbapi.com/", {
        params: {
            apikey: "5117b03d",
            s: searchTerm,
        },
    });

    console.log(response.data);
};

const input = document.querySelector("input");

const debounce = (func, delay = 1000) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
};

const onInput = debounce(event => {
    fetchData(event.target.value);
});
input.addEventListener('input', onInput, 500);
