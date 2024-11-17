document.getElementById("search-btn").addEventListener("click", function () {
    const query = document.getElementById("search-field").value.trim();
    const resultDiv = document.getElementById("result");

    // Clear previous results
    resultDiv.innerHTML = "Loading...";

    // Make AJAX Request
    fetch(`superheroes.php?query=${encodeURIComponent(query)}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then((data) => {
            resultDiv.innerHTML = data;
        })
        .catch((error) => {
            resultDiv.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
        });
});
