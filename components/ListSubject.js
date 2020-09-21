import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, SectionList} from 'react-native';
import {sectionListData} from '../data/sectionListData';

function Item({item}) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
}

function Title({section}) {
  return <Text style={styles.header}>{section.title}</Text>;
}

function ListSubject() {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={sectionListData}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item item={item} />}
        renderSectionHeader={({section}) => <Title section={section} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004BA8',
    padding: 10,
  },
  item: {
    backgroundColor: '#3E78B2',
    padding: 10,
    marginVertical: 5,
  },
  header: {
    fontSize: 32,
    padding: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    fontSize: 16,
    color: 'white',
  },
});

export default ListSubject;
