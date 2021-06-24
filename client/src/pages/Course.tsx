import React from 'react';

import { Button, Text, View } from 'react-native';

 import {
  RelayEnvironmentProvider,
  loadQuery,
  graphql,
} from "react-relay/hooks";
import CourseMain from '../components/CourseMain';
import RelayEnvironment from '../RelayEnvironment';

export const CourseQuery = graphql`
  query CourseQuery($id: ID!) {
    node(id: $id) {
      ... on Course {
        title,
        body
      }
    }
  }
`;

const Course: React.FC<any> = (props) => {
  const preloadedQuery = loadQuery(RelayEnvironment, CourseQuery, {
    id: props.route.params.id,
  });

  return (
    <View>
       <RelayEnvironmentProvider environment={RelayEnvironment}>
        <React.Suspense fallback={<Text>Loading...</Text>}>
          <CourseMain preloadedQuery={preloadedQuery} id={props.route.params.id} />
        </React.Suspense>
      </RelayEnvironmentProvider>
      <Button title='Courses' onPress={() => props.navigation.navigate('Courses')} />
    </View>

  )
};

export default Course;