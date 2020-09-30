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
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

//const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

function Item({item}) {
  return (
    // <View style={styles.item}>
    //   <Image style={styles.imgContainer} source={logo} />
    //   <View style={{paddingHorizontal: 15, marginTop: 10, marginBottom: 15}}>
    //     <View style={styles.profile}>
    //       <View style={styles.infor}>
    //         <Text style={styles.title}>{item.name}</Text>
    //         <Text style={styles.description}>{item.description}</Text>
    //       </View>
    //       <View style={styles.iconContainer}>
    //         <TouchableOpacity
    //           style={styles.iconHolder}
    //           onPress={() => Alert.alert('You liked it!')}>
    //           <Image style={styles.emotionIcon} source={like} />
    //         </TouchableOpacity>
    //         <TouchableOpacity
    //           style={styles.iconHolder}
    //           onPress={() => Alert.alert('You disliked it!')}>
    //           <Image style={styles.emotionIcon} source={dislike} />
    //         </TouchableOpacity>
    //       </View>
    //     </View>
    //     <TouchableOpacity
    //       style={styles.readMoreHolder}
    //       onPress={() => Alert.alert('Read More')}>
    //       <Text style={styles.readMore}>Read More...</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
    <Card style={styles.item}>
      <Card.Cover source={logo} />
      <Card.Content>
        <View style={styles.profile}>
          <View style={styles.infor}>
            <Title style={styles.title}>{item.name}</Title>
            <Paragraph style={styles.description}>{item.description}</Paragraph>
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
      </Card.Content>
    </Card>
  );
}

function TitleLabel({section}) {
  return <Text style={styles.header}>{section.title}</Text>;
}

function ListSubject() {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={sectionListData}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item item={item} />}
        renderSectionHeader={({section}) => <TitleLabel section={section} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1FAEE',
    padding: 10,
  },
  item: {
    //backgroundColor: '#A8DADC',
    marginVertical: 7,
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  header: {
    fontSize: 32,
    padding: 10,
    fontWeight: 'bold',
    color: '#1D3557',
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1D3557',
  },
  description: {
    fontSize: 16,
    color: '#1D3557',
  },
  imgContainer: {
    width: '100%',
    height: 150,
    margin: 0,
    padding: 0,
  },
  profile: {
    flexDirection: 'row',
  },
  emotionIcon: {
    width: 30,
    height: 30,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconHolder: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: '#1D3557',
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
    borderColor: '#1D3557',
    backgroundColor: '#F1FAEE',
  },
  readMore: {
    color: '#1D3557',
  },
});

export default ListSubject;
