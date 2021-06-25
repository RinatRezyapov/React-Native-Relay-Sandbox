import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { usePreloadedQuery } from "react-relay/hooks";

import { CoursesQuery } from "../pages/Courses";
import colors from "../theme/colors";

function CoursesList(props: any) {
  const data = usePreloadedQuery<any>(CoursesQuery, props.preloadedQuery);

  return (
    <View style={styles.wrapper}>
      {data.user.courses.edges.map((todo: any) => (
        <TouchableOpacity key={todo.node.id} style={styles.card} onPress={() => props.navigation.navigate('Course', { id: todo.node.id })}>
          <View style={styles.courseWrapper}>
          <Image
            style={styles.courseLogo}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <View>
          <Text style={styles.text}>{todo.node.title}</Text>
          <Text style={styles.text}>{`0 / ${todo.node.body.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ').split(' ').length}`}</Text>
          </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    backgroundColor: colors.primary,
    height: '100%',
  },
  courseWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  courseLogo: {
    width: 50,
    height: 50,
    marginRight: 16,
    borderRadius: 50
  },
  text: {
    fontSize: 16,
    color: '#ffffff'
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
