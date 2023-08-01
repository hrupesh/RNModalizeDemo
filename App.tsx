import {useRef} from 'react';
import {
  Image,
  LogBox,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Modalize} from 'react-native-modalize';

const DATA = [
  {
    id: '1',
    title: 'First Item',
    imgUrl: 'https://picsum.photos/800',
  },
  {
    id: '2',
    title: 'Second Item',
    imgUrl: 'https://picsum.photos/801',
  },
  {
    id: '3',
    title: 'Third Item',
    imgUrl: 'https://picsum.photos/802',
  },
  {
    id: '4',
    title: 'Fourth Item',
    imgUrl: 'https://picsum.photos/803',
  },
  {
    id: '5',
    title: 'Fifth Item',
    imgUrl: 'https://picsum.photos/804',
  },
  {
    id: '6',
    title: 'Sixth Item',
    imgUrl: 'https://picsum.photos/805',
  },
  {
    id: '7',
    title: 'Seventh Item',
    imgUrl: 'https://picsum.photos/806',
  },
  {
    id: '8',
    title: 'Eighth Item',
    imgUrl: 'https://picsum.photos/807',
  },
  {
    id: '9',
    title: 'Ninth Item',
    imgUrl: 'https://picsum.photos/808',
  },
  {
    id: '10',
    title: 'Tenth Item',
    imgUrl: 'https://picsum.photos/809',
  },
];

const App = () => {
  const modalRef = useRef<Modalize>(null);
  const openModal = () => modalRef?.current?.open();

  const flatlistModalRef = useRef<Modalize>(null);
  const openFlatListModal = () => flatlistModalRef?.current?.open();

  const renderItem = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
      }}>
      <Image
        source={{uri: item?.imgUrl}}
        style={{
          height: 100,
          width: 100,
          borderRadius: 20,
          marginHorizontal: 16,
        }}
      />
      <Text style={{fontWeight: '700', fontSize: 24, letterSpacing: 1.4}}>
        {item?.title}
      </Text>
    </View>
  );

  LogBox.ignoreAllLogs();

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Text onPress={openModal}>{'Open Text Modal'}</Text>
        <Text onPress={openFlatListModal}>{'Open FlatList Modal'}</Text>
        <Modalize
          ref={flatlistModalRef}
          modalTopOffset={80}
          alwaysOpen={140}
          flatListProps={{
            data: DATA,
            keyExtractor: item => item.id,
            showsVerticalScrollIndicator: false,
            renderItem,
          }}
        />
        <Modalize
          ref={modalRef}
          modalHeight={600}
          snapPoint={300}
          closeSnapPointStraightEnabled={false}
          scrollViewProps={{showsVerticalScrollIndicator: false}}>
          <View style={{padding: 20}}>
            <Text style={{fontSize: 22, fontWeight: 'bold', lineHeight: 34}}>
              {'This is a modal'}
            </Text>
            <Text>
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et euismod nisl. Nulla facilisi. Aenean et mi volutpat, iaculis libero non, luctus quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur euismod dapibus metus, eget egestas quam ullamcorper eu.'
              }
              {'\n\n'}
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et euismod nisl. Nulla facilisi. Aenean et mi volutpat, iaculis libero non, luctus quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur euismod dapibus metus, eget egestas quam ullamcorper eu.'
              }
            </Text>
          </View>
        </Modalize>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
});

export default App;
