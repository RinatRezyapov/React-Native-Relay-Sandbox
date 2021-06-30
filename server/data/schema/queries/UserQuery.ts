import { GraphQLString, GraphQLObjectType } from 'graphql';
import { globalIdField, connectionDefinitions, connectionFromArray, nodeDefinitions, fromGlobalId } from 'graphql-relay';
import { GraphQLCourse, courses, getCourses, getCourse } from './CourseQuery';

const users = [
  {id: '1', name: 'Rinat Rezyapov', email: 'rinat.rezyapov@gmail.com'},
  {id: '2', name: 'Brandon Flowers', email: 'brandon.flowers@gmail.com'},
]

const getUser = (id: string) => users.filter(v => v.id === id)?.[0];

const {
  connectionType: CoursesConnection,
  edgeType: GraphQLCourseEdge,
} = connectionDefinitions({
  name: 'Course',
  nodeType: GraphQLCourse,
})

const GraphQLUser = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: globalIdField('User'),
    name: {
      type: GraphQLString,
      resolve: (user) => user.name
    },
    email: {
      type: GraphQLString,
      resolve: (user) => user.email
    },
    courses: {
      type: CoursesConnection,
      resolve: (user, {after, before, first, last}) => {
        return connectionFromArray([...user.courses], {after, before, first, last})
      }
    }
  },
})


const UserQuery = {
  type: GraphQLUser,
  args: {
    id: { type: GraphQLString },
  },
  resolve: (root, { id }) => {
    const Pool = require('pg').Pool
    const pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'recognize',
      password: 'admin',
      port: 5432,
    })

    return  pool.query('SELECT * FROM users ORDER BY id ASC').then(response => {
      const user = response.rows.filter(row => row.id.toString() === id)[0];
      return ({
        ...user,
        courses: getCourses(id)
      })
    });
  }
}


export {UserQuery}
