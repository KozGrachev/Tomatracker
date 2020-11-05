function fetchRequest(query, options) {
  // accept an extension and options for POST requests
  const apiUrl = 'http://localhost:3001';
  console.log("HELLO FROM FETCH");
  return fetch(apiUrl + query, options)
    .then(res => res.status >= 400 ? Promise.reject() : res)
    .then(res => res.status !== 204 ? res.json() : res)
    .catch(err => console.error("error fetching from API:", err));
};

export function getTasks() {
  return fetchRequest('/tasks');
}


