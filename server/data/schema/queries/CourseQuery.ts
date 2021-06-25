
import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';
import { globalIdField, nodeDefinitions, fromGlobalId } from 'graphql-relay';


const courses = [
  { id: '1', authorId: '2', title: 'Fasting words', body: `Fasting is the willful refrainment from eating and drinking. In a physiological context, fasting may refer to the metabolic status of a person who has not eaten overnight, or to the metabolic state achieved after complete digestion and absorption of a meal. Several metabolic adjustments occur during fasting. Some diagnostic tests are used to determine a fasting state. For example, a person is assumed to be fasting once 8–12 hours have elapsed since the last meal. Metabolic changes of the fasting state begin after absorption of a meal (typically 3–5 hours after eating).

  A diagnostic fast refers to prolonged fasting from 1 to 100 hours (depending on age) conducted under observation to facilitate the investigation of a health complication, usually hypoglycemia. Many people may also fast as part of a medical procedure or a check-up, such as preceding a colonoscopy or surgery. Fasting may also be part of a religious ritual, often associated with specifically scheduled fast days, as determined by the religion.`, created: new Date(Date.now() - (3600 * 1000 * 24)).getDate() },
  { id: '2', authorId: '1', title: 'Relay Description Words', body:  `Relay is designed for high performance at any scale. Relay keeps management of data-fetching easy, whether your app has tens, hundreds, or thousands of components. And thanks to Relay’s incremental compiler, it keeps your iteration speed fast even as your app grows.
  Relay is data-fetching turned declarative. Components declare their data dependencies, without worrying about how to fetch them. Relay guarantees that the data each component needs is fetched and available. This keeps components decoupled and promotes reuse.
  With Relay, components and their data dependencies can be quickly modified without modifying other parts of the system. That means you won't accidentally break other components as you refactor or make changes to your app.
  Relay's compiler aggregates and optimizes the data requirements for your entire app, so that they can be efficiently fetched in a single GraphQL request.
  Relay handles the heavy lifting to ensure the data declared by your components is fetched in the most efficient way. For example, by deduplicating identical fields, and precomputing information used at runtime, among other optimizations.
  Relay automatically keeps all of your components up to date when data that affects them changes, and efficiently updates them only when strictly necessary. This means no unnecessary re-renders.
  Relay also supports executing GraphQL Mutations, optionally with optimistic updates, and updates to local data, while ensuring that visible data on the screen is always kept up to date.
  The simplest way to fetch query data is to directly call loadQuery.
  Later, you can read the data from the store in a functional React component by calling the usePreloadedQuery hook.
  Relay encourages you to call loadQuery in response to an event, such as when a user presses on a link to navigate to a particular page or presses a button. See the guided tour section on Queries for more.`, created: new Date(Date.now() - (3600 * 1000 * 24)).getDate() },
  { id: '3', authorId: '1', title: 'React Native Words', body: `React primitives render to native platform UI, meaning your app uses the same native platform APIs other apps do.

  Many platforms, one React. Create platform-specific versions of components so a single codebase can share code across platforms. With React Native, one team can maintain two platforms and share a common technology—React.`, created: new Date(Date.now() - (3600 * 1000 * 48)).getDate() }
]

export const getCourses = (userId: string) => courses.filter(v => v.authorId === userId);
export const getCourse = (id: string) => courses.filter(v => v.id === id)?.[0];


const {nodeInterface, nodeField} = nodeDefinitions(
  (globalId: string) => {
    const {type, id} = fromGlobalId(globalId);

    return getCourse(id);
  },
  (obj) => {
    return GraphQLCourse;
    
  }
)
const GraphQLCourse = new GraphQLObjectType({
  name: 'Course',
  fields: {
    id: globalIdField('Course'),
    authorId: {
      type: GraphQLString,
      resolve: ({ id }) => courses.filter(v => v.id === id)?.[0].authorId,
    },
    title: {
      type: GraphQLString,
      resolve: ({ id }) => courses.filter(v => v.id === id)?.[0].title,
    },
    body: {
      type: GraphQLString,
      resolve: ({ id }) => courses.filter(v => v.id === id)?.[0].body,
    },
    created: {
      type: GraphQLInt,
      resolve: ({ id }) => courses.filter(v => v.id === id)?.[0].created,
    },
  },
  interfaces: [nodeInterface],
});

const CourseQuery = {
  type: GraphQLCourse,
  args: {
    id: { type: GraphQLString },
  },
  resolve: (root, { id }) => {
    return courses.filter(v => v.id === id)?.[0];
  }
}

export { GraphQLCourse, CourseQuery, courses, nodeField, nodeInterface };