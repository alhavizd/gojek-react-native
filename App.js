import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Button, SearchBar, ThemeProvider } from 'react-native-elements';

export default class App extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <ThemeProvider>
        <View style={ styles.container }>
          <View style={ styles.content }>
          <SearchBar placeholder="Type Here..." onChangeText={this.updateSearch} value={search} lightTheme showLoading searchIcon />
          </View>
          <View style={ styles.navbar }>
            <View style={ styles.navitem }>
              <Image style={ styles.navicon } source={require('./app/assets/icons/home-active.png')} />
              <Text style={ styles.navtext }>Home</Text>
            </View>
            <View style={ styles.navitem }>
              <Image style={ styles.navicon } source={require('./app/assets/icons/order.png')} />
              <Text style={ styles.navtext }>Order</Text>
            </View>
            <View style={ styles.navitem }>
              <Image style={ styles.navicon } source={require('./app/assets/icons/help.png')} />
              <Text style={ styles.navtext }>Chat</Text>
            </View>
            <View style={ styles.navitem }>
              <Image style={ styles.navicon } source={require('./app/assets/icons/inbox.png')} />
              <Text style={ styles.navtext }>Inbox</Text>
            </View>
            <View style={ styles.navitem }>
              <Image style={ styles.navicon } source={require('./app/assets/icons/account.png')} />
              <Text style={ styles.navtext }>Account</Text>
            </View>
          </View>
        </View>
      </ThemeProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  navbar: {
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  navitem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navicon: {
    height: 25,
    width: 25
  },
  navtext: {
    fontSize: 10,
    color: '#545454',
    marginTop: 4
  },
  content: {
    flex: 1,
    backgroundColor: 'pink'
  }
})
