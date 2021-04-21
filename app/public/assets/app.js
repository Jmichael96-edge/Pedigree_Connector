window.onload = () => {
    // fetching job routes
    fetch('/api/fetch_routes', { method: 'GET' })
    .then((data) => data.json())
    .then((json) => {
        console.log(json);
    })
    .catch((err) => {
        console.log(err);
    });
}