import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
  Image,
  View,
  SafeAreaView,
  SectionList,
} from 'react-native';
import {sectionListData} from '../data/sectionListData';
import logo from '../img/pipi.jpg';
import like from '../img/like.png';
import dislike from '../img/dislike.png';

function Item({item}) {
  return (
    <View style={styles.item}>
      <Image style={styles.imgContainer} source={logo} />
      <View style={{paddingHorizontal: 5}}>
        <View style={styles.profile}>
          <View style={styles.infor}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              style={styles.iconHolder}
              onPress={() => Alert.alert('You liked it!')}>
              <Image style={styles.emotionIcon} source={like} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconHolder}
              onPress={() => Alert.alert('You disliked it!')}>
              <Image style={styles.emotionIcon} source={dislike} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.readMoreHolder}
          onPress={() => Alert.alert('Read More')}>
          <Text style={styles.readMore}>Read More...</Text>
        </TouchableOpacity>
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
    backgroundColor: '#eee',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 7,
    borderWidth: 1,
    borderRadius: 10,
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
    height: 150,
    margin: 0,
    padding: 0,
  },
  profile: {
    paddingVertical: 5,
    flexDirection: 'row',
  },
  emotionIcon: {
    width: 30,
    height: 30,
  },
  iconContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  iconHolder: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'black',
  },
  infor: {
    flex: 3,
  },
  readMoreHolder: {
    marginTop: 5,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'blue',
  },
  readMore: {
    color: 'blue',
  },
});

export default ListSubject;
