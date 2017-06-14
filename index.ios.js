/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import NavigationBar from './js/common/NavigationBar';

export default class imc1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'home'
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        selectedTitleStyle={{color:'red'}}
                        renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_polular.png')} />}
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        <View style={styles.page1}>
                            <NavigationBar
                              title={'第一页'}
                            />
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'profile'}
                        title="Profile"
                        selectedTitleStyle={{color:'red'}}
                        renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_my.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_my.png')} />}
                        onPress={() => this.setState({ selectedTab: 'profile' })}>
                        <View style={styles.page2}></View>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    page1:{
        flex:1,
        backgroundColor:'red',
    },
    page2:{
        flex:1,
        backgroundColor:'yellow',
        justifyContent:'center'
    },
    image:{
        width:22,
        height:22,
    }
});

AppRegistry.registerComponent('imc1', () => imc1);
