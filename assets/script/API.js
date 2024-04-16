// Replace 'YOUR_API_KEY' and 'YOUR_SEARCH_ENGINE_ID' with your actual API key and search engine ID
const apiKey = 'AIzaSyD6SAJ7cjdQap33vPxPOVMOmJHuokZzDIg';
const searchEngineId = '90d59b8d214ef4388';
// const query = 'Engineers';

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');


// Function to fetch job listings from the Google Custom Search API
function fetchJobListings(query) {
  const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${query}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayResults(data);
    })
    .catch(error => {
      console.error('Error fetching search results:', error);
    });
}

// Function to display search results on the page
function displayResults(data) {
  // Clear previous results
  resultsDiv.innerHTML = '';

  if (data.items && data.items.length > 0) {
    data.items.forEach(item => {
      // Create a div for each search result
      const resultDiv = document.createElement('div');
      resultDiv.classList.add('result');

      // Create HTML elements to display the job title and URL
      const titleElement = document.createElement('h2');
      titleElement.textContent = item.title;

      const linkElement = document.createElement('a');
      linkElement.href = item.link;
      linkElement.textContent = item.link;

      // Append elements to the result div
      resultDiv.appendChild(titleElement);
      resultDiv.appendChild(linkElement);

      // Append the result div to the results container
      resultsDiv.appendChild(resultDiv);
    });
  } else {
    // Display a message if there are no search results
    resultsDiv.textContent = 'No job listings found.';
  }
}

// Event listener for form submission
searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const query = searchInput.value.trim();

  if (query !== '') {
    fetchJobListings(query);
  }
  
});
