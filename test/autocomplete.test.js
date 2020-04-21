it('Shows an autoComplete', () => {
    createAutoComplete({
        root: document.querySelector('#target'),
        fetchData() {
            return [
                { Title: 'Avengers' },
                { Title: 'Avengers2' },
                { Title: 'Avengers3' },
                { Title: 'Avengers4' },
                { Title: 'Avengers5' },
                { Title: 'Avengers6' },
                { Title: 'Avengers7' },
            ];
        },
        renderOption(movie) {
            return movie.Title;
        },
    });
});
