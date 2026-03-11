

const host = 'http://localhost:8000/api/';
const endpoint = 'employees';

async function getEmployees() {
    const url = host + endpoint;
    const response = await fetch(url)
    const result = await response.json()
    return result
}

export { getEmployees }
