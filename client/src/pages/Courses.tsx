import React from 'react';

import { Text } from 'react-native';

 import {
  RelayEnvironmentProvider,
  loadQuery,
  graphql,
} from "react-relay/hooks";

import CoursesList from '../components/CoursesList';
import RelayEnvironment from '../RelayEnvironment';

export const RepositoryNameQuery = graphql`
  query CoursesRepositoryNameQuery($id: String) {
    user(id: $id) {
      id,
      name, 
      email,
      courses {
        edges {
          node {
            id,
            title
          }
        }
      }
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, RepositoryNameQuery, {
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