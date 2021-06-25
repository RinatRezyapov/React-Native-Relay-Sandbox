import React from 'react';

import { Text } from 'react-native';

 import {
  RelayEnvironmentProvider,
  loadQuery,
  graphql,
} from "react-relay/hooks";

import CoursesList from '../components/CoursesList';
import RelayEnvironment from '../RelayEnvironment';

export const CoursesQuery = graphql`
  query CourseseQuery($id: String) {
    user(id: $id) {
      id,
      name, 
      email,
      courses {
        edges {
          node {
            id,
            title,
            body
          }
        }
      }
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, CoursesQuery, {
  id: "1",
});

const Courses: React.FC<any> = (props) => {


  return (
     <RelayEnvironmentProvider environment={RelayEnvironment}>
      <React.Suspense fallback={<Text>Loading...</Text>}>
        <CoursesList preloadedQuery={preloadedQuery} navigation={props.navigation} />
      </React.Suspense>
    </RelayEnvironmentProvider>
  )
};

export default Courses;