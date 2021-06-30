async function fetchGraphQL(text: string, variables: any) {
  return fetch('http://192.168.1.206:3001/graphql', {
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