import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import onboardingcss from './onboardingcss';

const { width, height } = Dimensions.get('window');
const colors = { primary: '#282534', white: '#ED1B24' };

const Slide = ({ file }:any) => {
  return (
    <View style={{ alignItems: 'center', position: 'relative' }}>
      <Image
        source={{ uri: `https://marvel-backend2.onrender.com/api/onboarding/onboardingfile/${file.filename}` }}
        style={{ height: '100%', width, marginTop: -10, resizeMode: 'contain' }}
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,10000)']}
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 150 }}
      />
      <View style={{ position: 'absolute', zIndex: 105, marginTop: -400 }}>
        <Image
          source={require('../asset/imge/2.png')}
          style={{ width: 700, height: 900, resizeMode: 'contain' }}
        />
      </View>
      <View style={{ position: 'absolute', zIndex: 100, marginTop: '130%' }}>
        <Text style={onboardingcss.title}>{file?.text}</Text>
      </View>
    </View>
  );
};

const Onboarding = ({ navigation }:any) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const fetchUploadedFiles = async () => {
    try {
      const response = await axios.get(
        'https://marvel-backend2.onrender.com/api/onboarding/onboardingfileget'
      );
      setUploadedFiles(response.data);
    } catch (err) {
      console.log('Error fetching uploaded files:', err);
    }
  };

  useEffect(() => {
    fetchUploadedFiles();
  }, []);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef<any>();

  const updateCurrentSlideIndex = ({ nativeEvent }:any) => {
    const contentOffsetX = nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex < uploadedFiles.length) {
      const offset = nextSlideIndex * width;
      ref.current.scrollToOffset({ offset });
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            zIndex: 110,
          }}>
          {uploadedFiles.map((_, index) => (
            <View
              key={index}
              style={[
                onboardingcss.indicator,
                currentSlideIndex === index && {
                  backgroundColor: colors.white,
                  width: 15,
                },
              ]}
            />
          ))}
        </View>
        <View style={{ marginBottom: 20 }}>
          {currentSlideIndex === uploadedFiles.length - 1 ? (
            <View style={{ height: 130 }}>
              <TouchableOpacity
                style={[
                    onboardingcss.btn1,
                  {
                    backgroundColor: '#ED1B24',
                    marginBottom: 20,
                  },
                ]}
                onPress={() => navigation.navigate('LoginRegisterScreen', { screen: 'Singup' })}
              >
                <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#FFFFFF' }}>
                  Signup
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                    onboardingcss.btn1,
                  {
                    borderWidth: 2,
                    borderColor: '#ED1B24',
                    backgroundColor: 'black',
                  },
                ]}
                onPress={() => navigation.navigate('LoginRegisterScreen', { screen: 'Login' })}
              >
                <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#FFFFFF' }}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: 15 }} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={onboardingcss.btn}
              >
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#FFFFFF' }}>
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <StatusBar backgroundColor={colors.primary} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={uploadedFiles}
        pagingEnabled
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Slide file={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

export default Onboarding;
