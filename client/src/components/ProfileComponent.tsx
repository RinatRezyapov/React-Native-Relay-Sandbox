import React, {useEffect, useMemo, useState} from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {usePreloadedQuery} from 'react-relay/hooks';
import {CourseQuery} from '../pages/Course';
import { ProfileQuery } from '../pages/Profile';
import colors from '../theme/colors';
import { splitString } from '../utils/courses';

function ProfileComponent(props: any) {

  const data = usePreloadedQuery<any>(ProfileQuery, props.preloadedQuery);

  console.log(data);
  return (
    <View style={styles.container}>
        <Image
          style={styles.profilePic}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <View>
          <Text style={styles.nameTitle}>{data.user.name}</Text>
          <View style={styles.titleValueWrapper}>
            <Text style={styles.title}>Words recognized</Text>
            <Text style={styles.subTitle}>200</Text>  
          </View>
          <View style={styles.titleValueWrapper}>
            <Text style={styles.title}>Longest sreak</Text>
            <Text style={styles.subTitle}>5</Text>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 16,
  },
  profilePic: {
    width: 90,
    height: 90,
    marginRight: 16,
    borderRadius: 50
  },
  nameTitle: {
    fontSize: 24,
    marginBottom: 16,
  },
  titleValueWrapper: {
    marginBottom: 8,
  },
  title: {
    fontSize: 12,
    color: '#90A4AE'
  },
  subTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.primary
  }
})

export default ProfileComponent;
