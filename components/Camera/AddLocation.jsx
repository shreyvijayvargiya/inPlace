import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Input, Button } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { addImageInFirebaseStore } from '../../modules/Api/imagesApi';
import { addLocation, fetchLocations } from '../../modules/Api/locationsApi';
import app from '../../modules/Firebase/firebase';


const AddLocation = ({ images, removePicture, navigation }) => {
    
    const { userMetaData, loggedInUserData } = useSelector(state => state.userReducer);
    const [loader, setLoader] = useState(false);
    const [data, setData] = useState({
        locationCoords: userMetaData.userLocation,
        title: '',
        description: '',
        userId: loggedInUserData.userId,
    });
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    const handleChange = (val, name) => {
        setData(prevState => ({
            ...prevState,
            [name]: val
        }));
    };


    const handleSubmit = async() => {
        setLoader(true)
        const locationData = {
            ...data,
            timeStamp: Date.now(),
        };
        addLocation(locationData);
        setLoader(false);
        navigation.navigate("Locations")
    };

    return (
        <View style={{ padding: 40 }}>
            {/* <ScrollView style={styles.previewImageContainer} horizontal>
                {images && images.length> 0 ? images.reverse().map(item => {
                    return (
                    <View key={item.id} style={{ position: 'relative' }}>
                        <Image source={{ uri: item.uri }} style={styles.previewImage} />
                        <TouchableOpacity onPress={() => removePicture(item.id)}>
                            <Icon 
                                name="cancel"
                                size={20}
                                color="#FF7B7B"
                                style={styles.deleteIcon}
                            />
                        </TouchableOpacity>
                    </View>
                    )
                }): null}
            </ScrollView> */}
            <Input
                placeholder='Title'
                value={data.title}
                name="title"
                ref={titleRef}
                onChangeText={(val) => handleChange(val, 'title')}
                containerStyle={{ alignSelf: 'center' }}
                inputContainerStyle={styles.input}
            />
            <Input
                placeholder='Description'
                value={data.description}
                name="description"
                ref={descriptionRef}
                containerStyle={{ alignSelf: 'center' }}
                onChangeText={(val) => handleChange(val, 'description')}
                inputContainerStyle={styles.input}
            />
            <Button  
                title="Add Location"
                buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)', padding: 14 }}
                containerStyle={styles.submitButton}
                titleStyle={{ color: 'white' }}
                onPress={handleSubmit}
                loading={loader}
            />
        </View>
    );
};

export default AddLocation;

const styles = StyleSheet.create({
    previewImageContainer: {
        width: Dimensions.get("window").width * 0.8,
        alignSelf: 'center',
        height: 100,
    },  
    deleteIcon: {
        position: 'relative',
        right: 0,
        top: 0,
    },
    previewImage: {
        width: 60,
        height: 60,
        borderRadius: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: '#252525'
    },
    input: {
        width: Dimensions.get("window").width * 0.8,
        margin: 'auto',
        alignSelf: 'center',
        borderRadius: 4,
        borderWidth: 1,
        padding: 10,
    },  
    submitButton: {
        width: Dimensions.get("window").width * 0.8,
        alignSelf: 'center',
        borderRadius: 8,
    }
})