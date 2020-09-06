import React, {Component} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';

class App extends Component {
    state = {
        count: 0,
    };

    onPress = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text>Click me</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{flexDirection: 'row'}}>
                        You clicked {this.state.count} times
                    </Text>
                </View>
                <View style={{width: '50%', height: '30%', alignItems:'center'}}>
                    <TouchableOpacity
                        style={
                            {
                             ...styles.button,
                                backgroundColor: '#0000FF',
                                alignItems: 'center'
                            }
                        }
                        onPress={this.onPress}
                    >
                        <Text>ВКЛЮЧИТЬ ГИМН УКРАИНЫ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#fdff37',
        //marginLeft: '30%'
    },
    button: {
        // alignItems: 'flex-end',
        backgroundColor: '#ddaf40',
        padding: 10,
        marginBottom: 10,
    },
});

export default App;
