import React, { Component } from "react";
import { Dimensions, StyleSheet, View, Image } from 'react-native';
import { Card, CardItem, Text } from 'native-base'
import Carousel from 'react-native-snap-carousel';

const sliderImagesInfo = [
    {
        info: 'Friendzride - For Nicer and Naughtier',
        image: require('./../assets/images/models/01.jpg')
    },
    {
        info: 'Earlier this morning, NYC',
        image: require('./../assets/images/models/02.jpg')
    },
    {
        info: 'White Pocket Sunset',
        image: require('./../assets/images/models/03.jpg')
    },
    {
        info: 'Acrocorinth, Greece',
        image: require('./../assets/images/models/04.jpg')
    },
    {
        info: 'The lone tree, majestic landscape of New Zealand',
        image: require('./../assets/images/models/05.jpg')
    },
    {
        info: 'Middle Earth, Germany',
        image: require('./../assets/images/models/06.jpg')
    }
];

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
function wp (percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const sliderWidth = viewportWidth;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);
const itemWidth = slideWidth + itemHorizontalMargin * 2;

export default class AppSlider extends Component {
    _renderItem({item}) {
        return (
            <Card style={styles.card}>
                <CardItem cardBody>
                  <Image source={item.image} style={{height: 400, width: null, flex: 1}}/>
                </CardItem>
                <CardItem cardBody style={styles.info}>
                  <Text note>{item.info}</Text>
                </CardItem>
            </Card>
        );
    }
    
    render() {
        return(
            <View style={styles.carouselHold}>
                <Carousel
                    layout={'stack'} layoutCardOffset={18}
                    ref={(c) => { this._carousel = c; }}
                    data={sliderImagesInfo}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    loop={true}
                    autoplay={true}
                    autoplayDelay={500}
                    autoplayInterval={3000}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    carouselHold: {
        marginTop: -40,
        marginBottom: 5,
    },
    card: {
        borderRadius: 12,
        overflow: 'hidden'
    },
    info: {
        paddingTop: 10,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center'
    }
});
