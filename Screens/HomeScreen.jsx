import React, {useState} from 'react';
import {View, StatusBar, StyleSheet, Text, Dimensions} from 'react-native';
import theme from '../theme.json';
import {SvgUri} from 'react-native-svg';
import Entypo from 'react-native-vector-icons/Entypo';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Carousel, {Pagination} from 'react-native-snap-carousel';

function HomeScreen({navigation}) {
  const [satellites, setSatellites] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const _renderItem = ({item, index}) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingHorizontal: 20,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <SvgUri
            width="40"
            height="40"
            uri="https://raw.githubusercontent.com/cchirag/GitMath/master/Sat-1.svg"
            fill={theme.secondary}></SvgUri>
          <View style={{marginLeft: 10}}>
            <Text
              style={{
                color: theme.secondary,
                fontSize: 32,
                fontFamily: 'HelveticaNeue Medium',
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                color: theme.grey,
                fontSize: 12,
                fontFamily: 'HelveticaNeue Medium',
              }}>
              {item.isOnline ? 'ONLINE' : 'OFFLINE'}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const _pagination = () => {
    return (
      <Pagination
        dotsLength={satellites.length}
        activeDotIndex={activeSlide}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: theme.secondary,
        }}
        inactiveDotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: theme.grey,
        }}></Pagination>
    );
  };

  useState(() => {
    var isMounted = true;
    var unsubcribe;
    const fetchData = async () => {
      unsubcribe = firestore()
        .collection('satellites')
        .onSnapshot((snapShots) => {
          if (isMounted) {
            setSatellites([]);
          }
          snapShots.forEach((snapshot) => {
            if (snapshot.exists) {
              if (snapshot.data().createdBy === auth().currentUser.uid) {
                if (isMounted) {
                  setSatellites((prevState) => [...prevState, snapshot.data()]);
                }
              }
            }
          });
        });
    };
    fetchData();
    return () => {
      isMounted = false;
      unsubcribe();
    };
  }, []);

  return (
    console.log(satellites),
    (
      <View style={Styles.container}>
        <StatusBar backgroundColor={theme.primary}></StatusBar>
        <Entypo
          name="menu"
          size={30}
          color={theme.secondary}
          style={Styles.drawerIcon}></Entypo>
        <View style={Styles.headingContainer}>
          <Text style={Styles.xplorStatusText}>XPLOR STATUS</Text>
          <Text style={Styles.satelliteText}>Satellites</Text>
        </View>
        <Carousel
          data={satellites}
          renderItem={_renderItem}
          sliderWidth={Dimensions.get('screen').width}
          itemWidth={Dimensions.get('screen').width}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
        <Pagination
          dotsLength={satellites.length}
          activeDotIndex={activeSlide}
          dotContainerStyle={{
            height: 12,
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: theme.secondary,
          }}
          inactiveDotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: theme.grey,
          }}></Pagination>
        <View style={Styles.bottomContainer}>
        <Text style={Styles.stats}>Statistics</Text>
        </View>
      </View>
    )
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary,
    justifyContent: 'space-between',
  },
  bottomContainer: {
    width: '100%',
    height: 500,
    backgroundColor: theme.secondary,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  drawerIcon: {
    marginLeft: 20,
    marginTop: 5,
  },
  headingContainer: {
    marginLeft: 20,
  },
  xplorStatusText: {
    color: theme.grey,
    fontFamily: 'HelveticaNeue Medium',
  },
  satelliteText: {
    color: theme.secondary,
    fontSize: 32,
    fontFamily: 'HelveticaNeue Medium',
  },
  stats: {
    fontFamily: 'HelveticaNeue Thin',
    fontSize: 32,
    color: theme.primary,
    margin: 20,
  },
});

export default HomeScreen;
