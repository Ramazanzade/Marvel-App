import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const Splash = ({ navigation }: any) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchUploadedFiles = async () => {
    try {
      const response = await axios.get(
        'https://marvel-backend2.onrender.com/api/splas/splasfileget'
      );
      setUploadedFiles(response.data);
    } catch (err) {
      console.log('Error fetching uploaded files:', err);
    }
  };

  useEffect(() => {
    fetchUploadedFiles();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (currentIndex < uploadedFiles.length) {
      setTimeout(() => {
        navigation.navigate('OnboardingScreen')
        console.log('Navigating to onboarding screen');
      }, 4000);
    } else {
    
    }
  }, [currentIndex, uploadedFiles]);

  if (uploadedFiles.length === 0 || currentIndex >= uploadedFiles.length) {
    return (
      <View style={styles.container}>
        {/* Placeholder for when there are no uploaded files */}
      </View>
    );
  }

  const file = uploadedFiles[currentIndex];

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://marvel-backend2.onrender.com/api/splas/splasfile/${file.filename}`,
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    backgroundColor: 'black',
  },
});

export default Splash;
