import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import singupcss from '../Singup/singupcss'
import axios from 'axios'

const Login = ({navigation}:any) => {
  const [email, setemail] = useState<any>('')
  const [password, setpassword] = useState<any>('')
    const [emailerror, setemailerror] = useState(false)
  const [passworderror, setpassworderror] = useState(false);
  const [hideNumbers, setHideNumbers] = useState(false);
  const [hideText, setHideText] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const handleToggleHideNumbers = () => {
      setHideNumbers(!hideNumbers);
      setHideText(!hideText);
  };
  const handlePasswordChange = (text: string) => {
      setpassword(text);
      setpassworderror(text.trim() === '')
  };
  const handleEmailChange = (text: string) => {
      setemail(text);
      setemailerror(text.trim() === '' || !/\S+@\S+\.\S+/.test(text))
  };
//   const handleFacebookLogin = (LoginManager:any) => {
//     LoginManager.logInWithPermissions(['public_profile', 'email']).then(
//       (result:any) => {
//         if (result.isCancelled) {
//           console.log('Facebook login is cancelled');
//         } else {
//           AccessToken.getCurrentAccessToken().then((data:any) => {
//             const accessToken = data.accessToken.toString();
//             const graphRequestParams = {
//               parameters: {
//                 fields: {
//                   string: 'id,name,email,picture.type(large)',
//                 },
//               },
//             };
//             const graphRequest = new GraphRequest(
//               '/me',
//               { accessToken, ...graphRequestParams },
//               (error:any, fbUser:any) => {
//                 if (error) {
//                   console.log('Error fetching Facebook user data:', error);
//                 } else {
//                   console.log('Facebook user:', fbUser);
//                   // Perform any additional actions with the user data
//                 }
//               }
//             );
//             new GraphRequestManager().addRequest(graphRequest).start();
//           });
//         }
//       },
//       (error:any) => {
//         console.log('Facebook login error:', error);
//       }
//     );
//   };
  

  const errors = () => {
      if (emailerror == email || passworderror == password) {
          setpassworderror(true)
          setemailerror(true)
      } else {
      }
  }

  const Login = async () => {
    if (!email || !password) {
        throw new Error('Please provide name, fin, and email');
          }
  
  
      try {
        const response = await axios.post(
          'https://marvel-backend2.onrender.com/api/user/sign-in',
          {
            
            email,
            password
          });
          setemail('')
          setpassword('')
        console.log(response.data.user);
        if ( emailerror == email || passworderror == password ) {
            setpassworderror(true)
            setemailerror(true)
          } else {}
          setIsLoading(true);
          setTimeout(() => {
           setIsLoading(false);
         }, 3000);
         navigation.navigate('PlansScreen', { screen: 'PalnsPage1' })
        
      } catch (error:any) {
        console.error(error);
      }
  
  }
const Singup = ()=>{
  navigation.navigate('Singup')
  console.log('salam');
  
}
  return (
      <View style={singupcss.view}>
          <View style={singupcss.imgview}>
              <Image
                  style={singupcss.img}
                  source={require('../../asset/imge/2.png')}
              />
          </View>
          <View>
              <TextInput
                  style={[singupcss.input, { marginBottom: 20 }, emailerror && singupcss.errorInput]}
                  onChangeText={handleEmailChange}
                  value={email}
                  placeholder="Enter your Email ID"
                  placeholderTextColor="gray"
              />
              <View>
                  <TouchableOpacity onPress={handleToggleHideNumbers} style={singupcss.toggle}>
                      {hideNumbers
                          ? <FontAwesomeIcon icon={faEye} style={singupcss.icon2} size={20} />
                          : <FontAwesomeIcon icon={faEyeSlash} style={singupcss.icon2} size={20} />
                      }
                  </TouchableOpacity>
                  <TextInput
                      style={[singupcss.input, passworderror && singupcss.errorInput]}
                      onChangeText={handlePasswordChange}
                      value={hideText ? password.replace(/./g, '*') : password}
                      placeholder="Password"
                      placeholderTextColor="gray"
                  />
              </View>
              <TouchableOpacity
                  style={singupcss.touc}
                  onPress={() => Login()}>
                  <Text style={singupcss.text}>
                      Login
                  </Text>
              </TouchableOpacity>
          </View>
          <View style={singupcss.textbig}>
              <Text style={singupcss.text2}> or </Text>
              <Text style={singupcss.text1}> Continue With </Text>
          </View>
          <View style={singupcss.touchview}>
              <TouchableOpacity style={singupcss.toucicon} >
                  <FontAwesomeIcon
                      icon={faFacebook}
                      style={singupcss.icon}
                      size={50}
                  />
                  <Text style={singupcss.text3}>FaceBook</Text>
              </TouchableOpacity>
              <TouchableOpacity style={singupcss.toucicon}>
                  <FontAwesomeIcon
                      icon={faGoogle}
                      style={singupcss.icon1}
                      size={50}
                  />
                  <Text style={singupcss.text3}>Google</Text>
              </TouchableOpacity>
          </View>
          <View style={singupcss.fouter}>
              <Text style={singupcss.text4}>Already have an account?</Text>
              <TouchableOpacity onPress={() => Singup()}>
                  <Text style={singupcss.text5}>Singup</Text>
              </TouchableOpacity>
          </View>
      </View>
  )
}

export default Login