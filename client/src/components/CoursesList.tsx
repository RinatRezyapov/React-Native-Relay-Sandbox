import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { usePreloadedQuery } from "react-relay/hooks";

import { RepositoryNameQuery } from "../pages/Courses";

function CoursesList(props: any) {
  const data = usePreloadedQuery<any>(RepositoryNameQuery, props.preloadedQuery);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{data.user.name}</Text>
      <Text style={styles.text}>{data.user.email}</Text>
      {data.user.courses.edges.map((todo: any) => (
        <TouchableOpacity key={todo.node.id} style={styles.card} onPress={() => props.navigation.navigate('Course', { id: todo.node.id })}>
          <Text style={styles.text}>{todo.node.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    backgroundColor: '#3eb489',
    height: '100%',
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
