import * as React from 'react';
import {useState, useEffect} from 'react';
import { Button, View, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ImagePicker from 'react-native-image-picker';
import Constants from 'expo-constants';

import CreateSimpleHelp from './components/CreateSimpleHelp'
import CreateRegularHelp from './components/CreateRegularHelp';
import CreateDonationButton from './components/CreateDonationButton';
import UploadPicCover from './components/UploadPicCover';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function Donations({ navigation }) {
    const [avatarSource, setAvatarSource] = useState(null);
    return (
      <View style={styles.donationsScreen}>
        <Image source={avatarSource} style={styles.uploadAvatar} />
        <Text>У Вас пока нет сборов.</Text>
        <Text>Начниете доброе дело.</Text>
        <Text></Text>
        <TouchableOpacity
            style={styles.createDonationButton}
            onPress={() => navigation.navigate('DonationType')}
        >
            <CreateDonationButton />
        </TouchableOpacity>
      </View>
    );
}

function DonationType({ navigation }) {
    return (
      <View style={styles.donationTypeScreen}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('TargetDonation')}
        >
              <CreateSimpleHelp />
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('RegularDonation')}
        >
            <CreateRegularHelp />
        </TouchableOpacity>



      </View>
    );
}

function TargetDonation({ navigation }) {
    return (
      <View style={styles.donationTypeScreen}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('TargetDonation')}
        >
              <UploadPicCover />
        </TouchableOpacity>
        <Button
          title="Загрузить обложку"
          onPress={() => navigation.navigate('Details')}
        />
        <Text>Название сбора</Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            placeholder="Название сбора"
        />
        <Text>Сумма, ₽</Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            placeholder="Сколько нужно собрать?"
        />
        <Text>Цель</Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            placeholder="Например, лечение человека"
        />
        <Text>Описание</Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            placeholder="На что пойдут деньги и как они кому-то помогут?"
        />
        <Text>Куда получать деньги?</Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            value="Счет VK Pay · 1234"
        />
        <Button
          title="Далее"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
}

function RegularDonation({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('TargetDonation')}
        >
              <UploadPicCover />
        </TouchableOpacity>
        <Text style={styles.textInputDescription} >
            Название сбора</Text>
        <TextInput
            style={styles.textInput}
            placeholder="Название сбора"
        />
          <Text style={styles.textInputDescription} >
              Сумма, ₽
          </Text>
        <TextInput
            style={styles.textInput}
            placeholder="Сколько нужно в месяц?"
        />
          <Text style={styles.textInputDescription}>
              Цель
          </Text>
        <TextInput
            style={styles.textInput}
            placeholder="Например, поддержка приюта"
        />
          <Text style={styles.textInputDescription}>
        Описание
          </Text>
        <TextInput
            multiline={true}
            numberOfLines={2}
            style={{...styles.textInput, height:70}}
            placeholder="На что пойдут деньги и как они кому-то помогут?"
        />
          <Text style={styles.textInputDescription}>
              Куда получать деньги?
          </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            value="Счет VK Pay · 1234"
        />
          <Text style={styles.textInputDescription}>
              Автор
          </Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            value="Матвей Правосудов"
        />
        <Button
          title="Далее"
          onPress={() => navigation.navigate('Details')}
        />
      </ScrollView>
      </SafeAreaView>
    );
}

function DetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Details')}
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
      </View>
    );
  }

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Donations">
        <Stack.Screen name="Donations" title="Пожертвования" component={Donations} />
        <Stack.Screen name="DonationType" component={DonationType} />
        <Stack.Screen name="TargetDonation" component={TargetDonation} />
        <Stack.Screen name="RegularDonation" component={RegularDonation} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#FFFFFF",
      padding: 10
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    },
    donationTypeScreen: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: 'center',
        justifyContent: 'center'
    },
    donationsScreen: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
      marginLeft: '2.5%',
        "backgroundColor": "#F2F3F5",
        "borderWidth": 0.5,
        "borderColor": "rgba(0, 0, 0, 0.12)",
        "borderStyle": "solid",
        "borderTopLeftRadius": 10,
        "borderTopRightRadius": 10,
        "borderBottomRightRadius": 10,
        "borderBottomLeftRadius": 10,
        "width": '95%',
        "height": 40,
        "paddingLeft": 15,
        marginBottom: 30,

    },
    textInputDescription:{
        alignSelf:'flex-start',
        marginLeft: '2.5%',
        marginBottom: 8,
        color:'#6D7885',
        //"fontFamily": "SF Pro Text",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontSize": 14,
        "lineHeight": 18,
        "letterSpacing": -0.154,
    },
    createDonationButton: {
        backgroundColor: "#4986CC",
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        padding: 0
    },
    uploadAvatar: {
        backgroundColor: "#DDDDDD",
        justifyContent: "center"
    },
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    scrollView: {
      backgroundColor: '#ffffff',
    }
  });

export default App;
