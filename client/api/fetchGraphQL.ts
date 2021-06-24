async function fetchGraphQL(text: string, variables: any) {

  // Fetch data from GitHub's GraphQL API:
  return fetch('http://10.0.2.2:3001/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  }).then(response => response.json())
}

export default fetchGraphQL;