import React from 'react';
import {StyleSheet, Button, Text, Image, View, SafeAreaView, SectionList} from 'react-native';
import {sectionListData} from '../data/sectionListData';
import logo from '../img/pipi.jpg';

function Item({item}) {
  return (
    <View style={styles.item}>
      <Image  style={styles.imgContainer} source={logo} />
      <View style={styles.profile}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
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
    backgroundColor: '#fff',
    padding: 10,
  },
  item: {
    backgroundColor: '#e0e0d2',
    //minHeigh: '100px',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    //flex: 1,
    //flexDirection: 'column',
  },
  header: {
    fontSize: 32,
    padding: 10,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  description: {
    fontSize: 16,
    color: 'black',
  },
  imgContainer: {
    width: '100%',
    height: 200,
    margin: 0,
    padding: 0,
  },
  profile: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    //flex: 1,
  },
});

export default ListSubject;
