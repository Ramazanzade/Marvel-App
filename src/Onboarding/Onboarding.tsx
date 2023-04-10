import { View, Text, Dimensions, Image, SafeAreaView, StatusBar, FlatList, TouchableOpacity, } from 'react-native'
import React, { useState, useRef } from 'react'
import stayle from './stayle';
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('window');
const colors = { primary: '#282534', white: '#ED1B24' };
const imges = [
    {
        id: 1,
        imge: require('../asset/imge/3.jpg'),
        title: 'All your favourite MARVEL Movies & Series at one place',
    },
    {
        id: 2,
        imge: require('../asset/imge/4.jpg'),
        title: 'Watch Online  or Download Offline',
    },
    {
        id: 3,
        imge: require('../asset/imge/5.jpg'),
        title: 'Lets get started with',
        subtitle: 'Banking made convenient with we Bank '
    },

    {
        id: 4,
        imge: require('../asset/imge/6.jpg'),
        title: 'Create profiles for diffrent members & get personalised recommendations',
    },

    {
        id: 5,
        imge: require('../asset/imge/7.jpg'),
        title: 'Plans according to your needs at affordable prices',
    },

    {
        id: 6,
        imge: require('../asset/imge/8.jpg'),
        title: 'Let’s Get Started !!!',
    },

]


const Slide = ({ item }: any) => {
    return (
        <View style={{ alignItems: 'center', position: 'relative' }}>
            <Image
                source={item?.imge}
                style={{ height: '100%', width, marginTop: -10, resizeMode: 'contain' }}
            />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,100)']}
                style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 150 }}
            />
            <View style={{ position: 'absolute', zIndex: 105, marginTop:-150 }} >
                <Image
                source={require('../asset/imge/2.png')}
                style={{  width:700, height:900 ,resizeMode: 'contain',}}
                />
            </View>
            <View style={{ position: 'absolute', zIndex: 100, marginTop:'130%' }}>
                <Text style={stayle.title}>{item?.title}</Text>
            </View>
        </View>
    );
};




const Onboarding = ({ navigation }: any) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const ref = useRef<any>();
    const updateCurrentSlideIndex = ({ e }: any) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goToNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex !== imges.length) {
            const offset = nextSlideIndex * width;
            ref?.current.scrollToOffset({ offset });
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    };
    const Footer = () => {
        return (
            <View
                style={{
                    height: height * 0.25,
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: 20,
                        zIndex:110,
                    }}>
                    {imges.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                stayle.indicator,
                                currentSlideIndex == index && {
                                    backgroundColor: colors.white,
                                    width: 15,

                                },
                            ]}
                        />
                    ))}
                </View>
                <View style={{ marginBottom: 20, }}>
                    {currentSlideIndex == imges.length - 1 ? (
                        <View style={{ height: 50, }}>
                            <TouchableOpacity
                                style={[stayle.btn, {
                                    backgroundColor: '#2567F9',
                                }]}
                                onPress={() => navigation.navigate('HomeScreen')}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#FFFFFF' }}>
                                    Başla
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: 15 }} />
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={goToNextSlide}
                                style={stayle.btn}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 15,
                                        color: '#FFFFFF'
                                    }}>
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
                data={imges}
                pagingEnabled
                renderItem={({ item }) => <Slide item={item} />}
            />
            <Footer />
        </SafeAreaView>
    );
};
export default Onboarding