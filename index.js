const fetchData = async() => {
    const response = await axios.get("http://www.omdbapi.com/", {
        params: {
            apikey: "5117b03d",
            i: "tt0848228",
        },
    });

    console.log(response.data);
};

fetchData();
