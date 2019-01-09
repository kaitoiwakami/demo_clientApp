import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menuList}>
          <Text style={{fontWidth: 'bold', fontSize: 30, color: '#DDD', marginLeft: 20}}>OneMenu</Text>
          <TouchableOpacity 
          style={styles.menuName}
          onPress={() => this.navigateToHome()}
          >
            <Text style={{color: '#EEE', fontWeight: 'bold', fontSize: 20}}>ホーム</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.menuName}
          onPress={() => this.navigateToCheckSales()}
          >
            <Text style={{color: '#EEE', fontWeight: 'bold', fontSize: 20}}>売上確認</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.menuName}
          onPress={() => this.navigateToEditMenu()}
          >
            <Text style={{color: '#EEE', fontWeight: 'bold', fontSize: 20}}>メニュー編集</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.menuName}
          onPress={() => this.navigateToCheckOrder()}
          >
            <Text style={{color: '#EEE', fontWeight: 'bold', fontSize: 20}}>注文確認</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.menuName}
          onPress={() => this.navigateToHelp()}
          >
            <Text style={{color: '#EEE', fontWeight: 'bold', fontSize: 20}}>ヘルプセンター</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.menuName}
          onPress={() => this.navigateToSettings()}
          >
            <Text style={{color: '#EEE', fontWeight: 'bold', fontSize: 20}}>設定</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <Text style={{fontSize: 30, fontWidth: 'bold'}}>ホーム</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 20}}>
              <Image style={{width: 20, height: 20, marginRight: 20}} source={require('../assets/images/setting.png')}/>
              <Image style={{width: 20, height: 20}} source={require('../assets/images/notification.png')}/>
            </View>
            <Text style={{fontSize: 15, fontWidth: 'bold'}}>ABCイタリアン 高田馬場店</Text>
          </View>
        </View>
      </View>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#DDD',
  },
  menuList: {
    flexDirection: 'column',
    backgroundColor: '#43425D',
    paddingTop: 30,
    width: 200,
  },
  menuName: {
    width: 200,
    height: 70,
    backgroundColor: '#43425D',
    justifyContent: 'center',
    paddingLeft: 30,
    marginTop: 20,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 75,
    backgroundColor: '#EEE',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 10,
  },
});
