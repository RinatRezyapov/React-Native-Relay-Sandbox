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
      resolve: ({ id }) => {
        return users.filter(v => v.id === id)?.[0]?.name || 'Name is undefined'
      }
    },
    email: {
      type: GraphQLString,
      resolve: ({ id }) => users.filter(v => v.id === id)?.[0]?.email 
    },
    courses: {
      type: CoursesConnection,
      resolve: ({id}, {after, before, first, last}) => {
        return connectionFromArray([...getCourses(id)], {after, before, first, last})
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
    return users.filter(v => v.id === id)[0]
  }
}


export {UserQuery}
