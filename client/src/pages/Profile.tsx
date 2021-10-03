import React from 'react';

import { Text } from 'react-native';

 import {
  RelayEnvironmentProvider,
  loadQuery,
  graphql,
} from "react-relay/hooks";

import CoursesList from '../components/CoursesList';
import ProfileComponent from '../components/ProfileComponent';
import RelayEnvironment from '../RelayEnvironment';

export const ProfileQuery = graphql`
  query ProfileQuery($id: String) {
    user(id: $id) {
      id,
      name, 
      email,
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, ProfileQuery, {
  id: "3",
});

const Profile: React.FC<any> = (props) => {


  return (
     <RelayEnvironmentProvider environment={RelayEnvironment}>
      <React.Suspense fallback={<Text>Loading...</Text>}>
        <ProfileComponent preloadedQuery={preloadedQuery} navigation={props.navigation} />
      </React.Suspense>
    </RelayEnvironmentProvider>
  )
};

export default Profile;