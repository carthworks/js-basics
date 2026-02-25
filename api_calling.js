function fetchData() {
  const apiURL0 = 'https://mockfast.io/backend/apitemplate/get/YYND5Q0BFE';
  const apiURL = 'https://jsonplaceholder.typicode.com/posts/1';

  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const res = await fetch(apiURL);

        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        }

        const data = await res.json();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    }, 5000);
  });
}

fetchData()
  .then(data => console.log('Final data:', data))
  .catch(err => console.error(err.message))
  .finally(() => console.log('finally arrived'));