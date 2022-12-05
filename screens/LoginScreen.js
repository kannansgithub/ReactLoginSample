import
{
  SafeAreaView,
  View,
  Text,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import LoginImg from '../assets/images/Login.png';
import { useState } from 'react';
const LoginScreen = () =>
{
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [rightIcon, setRightIcon] = useState('visibility');
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const handlePasswordVisibility = () =>
  {
    if (rightIcon === 'visibility')
    {
      setRightIcon('visibility-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'visibility-off')
    {
      setRightIcon('visibility');
      setPasswordVisibility(!passwordVisibility);
    }
  }
  const SubmitLogin = () =>
  {
    if (!userName || !password)
    {
      alert('Invalid data for login');
    } else
    {
      axios.get(`https://sparkredeem.com/SparkAttendance/SparkDialAPI/employeeLogin.php?login_id=${userName}&login_pin=${password}`)
        .then(response =>
        {
          const responseData = response?.data?.Response;
          if (responseData?.Success === "1")
          {
            alert('Login Success');
          } else
          {
            alert(responseData?.Message);
          }
        })
        .catch(error =>
        {
          alert(error);
        });
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', flexDirection: "column", alignContent: "space-between" }}>

      <View style={{ flex: 3, alignContent: "center", justifyContent: "center" }}>
        <Image source={LoginImg} style={{
          resizeMode: "center",
          height: 400,
          with: 300
        }} />
      </View>

      <View style={{ flex: 2, alignItems: 'center', paddingHorizontal: 35 }}>
        <InputField
          label={'EMPLOYEE ID'}
          icon={
            <MaterialIcons
              name="person-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          onChangeText={(userName) => setUserName(userName)}
        />

        <InputField
          label={'ENTER PIN'}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          onChangeText={(password) => setPassword(password)}
          inputType="password"
          rightIcon={
            <MaterialIcons
              name={rightIcon}
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          passwordVisibility={passwordVisibility}
          fieldButtonFunction={handlePasswordVisibility}
        />

        <CustomButton label={"Login"} onPress={SubmitLogin} />
      </View>
      <View style={{ flex: 1, alignItems: 'center', paddingHorizontal: 25 }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text style={{ fontSize: 20, color: "#e76442" }}>Part of the Team.</Text>
          <Text style={{ fontSize: 20, color: "#1e74b9" }}>Part of the Dream</Text>
        </View>
      </View>
    </SafeAreaView >
  )
}

export default LoginScreen;