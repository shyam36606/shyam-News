document.addEventListener("DOMContentLoaded", function () {
    // Your API key from NewsAPI
    const apiKey = 'e4ad5c8d1e1947bf971432dc797f2858';  // Replace with your actual NewsAPI key

    // URL to fetch news related to Ranchi
    const url = `https://newsapi.org/v2/everything?q=ranchi&apiKey=${apiKey}&language=en`;

    // Fetch the news data
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const articles = data.articles;

         
            if (articles.length > 0) {
                let newsContent = '';

  
                articles.forEach(article => {
                    newsContent += `
                        <div class="news-article">
                            <img src="${article.urlToImage ? article.urlToImage : 'https://via.placeholder.com/150x100'}" alt="News Image">
                            <div>
                                <h3>${article.title}</h3>
                                <p>${article.description ? article.description : 'No description available.'}</p>
                                <a href="${article.url}" target="_blank">Read more</a>
                            </div>
                        </div>
                    `;
                });


                document.getElementById('local-news').innerHTML = newsContent;
            } else {
             
                document.getElementById('local-news').innerHTML = `<p>No news available for Ranchi at the moment.</p>`;
            }
        })
        .catch(error => {
            console.error("Error fetching the news:", error);
            document.getElementById('local-news').innerHTML = `<p>Sorry, there was an error fetching the news.</p>`;
        });
});


