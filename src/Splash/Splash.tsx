import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Splash = ({navigation}:any) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('OnboardingScreen')
            console.log('kjasn');
            

        }, 4000);
    }, []);

    return (
        <View style={styles.container}>
            {/* <Image
                source={require('../asset/imge/1.png')}
                style={styles.image}
            /> */}
            <Image
                source={require('../asset/imge/2.png')}
                style={styles.image}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        backgroundColor:'black'
    },
});
export default Splash