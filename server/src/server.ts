import * as express from 'express';
import * as cors from 'cors';
import { schema } from '../data/schema';
import { graphqlHTTP } from 'express-graphql';

const SERVER_PORT = 3001;



const app = express()
  .use(cors())
  .use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
  }))
  .listen(SERVER_PORT, console.log(`Server is listenig to ${SERVER_PORT} port`))