import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { usePreloadedQuery } from "react-relay/hooks";

import { CoursesQuery } from "../pages/Courses";
import colors from "../theme/colors";
import { splitString } from "../utils/courses";

function CoursesList(props: any) {
  const data = usePreloadedQuery<any>(CoursesQuery, props.preloadedQuery);

  return (
    <View style={styles.wrapper}>
      {(data?.user?.courses?.edges || []).map((todo: any) => (
        <TouchableOpacity key={todo.node.id} style={styles.card} onPress={() => props.navigation.navigate('Course', { id: todo.node.id })}>
          <View style={styles.courseWrapper}>
            <Image
              style={styles.courseLogo}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
            <View>
              <Text style={styles.title}>{todo.node.title}</Text>
              <Text style={styles.subtitle}>2 words at a time</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 16,
    backgroundColor: 'white',
    height: '100%',
  },
  courseWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#90A4AE'
  },
  courseLogo: {
    width: 50,
    height: 50,
    marginRight: 16,
    borderRadius: 50
  },
  title: {
    fontSize: 16,
    marginBottom: 4,
    color: '#000'
  },
  subtitle: {
    fontSize: 12,
    color: '#90A4AE'
  },
  card: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ffffff',
    padding: 16,
    marginTop: 16,
  }
})

export default CoursesList;
