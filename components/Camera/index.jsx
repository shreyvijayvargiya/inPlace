import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { Camera } from 'expo-camera';
import { v4 as uuidv4 } from 'uuid';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import _ from 'lodash';
import { fetchUserLocation } from '../../modules/Hooks/fetchUserLocation';
import AddLocation from './AddLocation';
import RBSheet from "react-native-raw-bottom-sheet";
import ImagePicker from 'expo-image-picker'; 

const CameraComponent = ({ navigation }) => {

  // Run API to fetch single marker details using its latitude and longitude
  
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [images, setImages] = useState([]);
  let cameraRef;
  let bottomSheetRef;
  
  useEffect(async() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  };

  const clickPictures = async() => {
    let imagesData = [...images]
    if(cameraRef){
      const snap = await cameraRef.takePictureAsync({ base64: true });
      const id = uuidv4();
      imagesData.push({ id: id, uri: snap.uri, base64: snap.base64 });
      setImages(imagesData)
    }
  };


  const submitPictures = () => {
    bottomSheetRef.open()
  };

  const removePicture = (id) => {
    const remainingImages = images.filter(item => {
      return item.id !== id
    });
    setImages(remainingImages);
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={ref => ( cameraRef = ref )} />
      <View style={styles.footer}>
        <ScrollView style={styles.previewImageContainer} horizontal>
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
        </ScrollView>
        <View style={images && images.length >0 ? styles.flexContainer: styles.flexContainerWithoutImages}>
          {images && images.length > 0 &&  <View />}
          {images && images.length > 0 && <View />}
          <View style={styles.addMarkerButtonContainer}>
            <TouchableOpacity style={styles.addMarkerButton} onPress={() => clickPictures()} />
          </View>
          {images && images.length > 0 && <View style={styles.submitButton}>
            <TouchableOpacity style={{ borderColor: '#187700', borderWidth: 1, borderRadius: 4, padding:8 }} onPress={submitPictures}>
              <Text style={{ color: 'white' }} >Submit</Text>
            </TouchableOpacity>
          </View>}
        </View>
      </View>
      <RBSheet
        ref={ref => {
          bottomSheetRef = ref;
        }}
        height={500}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: "center",
            alignItems: "center",
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
          }
          }}
        >
          <AddLocation images={images} removePicture={() => removePicture(item.id)} navigation={navigation} />
        </RBSheet>
    </View>
  );
};
export default CameraComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    borderBottomColor: 'gray',
    height: Dimensions.get("window").height * .75
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  footer: {
    height: Dimensions.get("window").height * .25,
    backgroundColor: 'black',
    borderTopWidth: 1,
    borderTopColor: '#252525',
  },
  addMarkerButtonContainer: {
    borderRadius: 100,
    height: 60,
    width: 60,
    padding: 10,
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    alignSelf: 'center',
  },
  addMarkerButton: {
    height: 40,
    width: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: '#252525',
    backgroundColor: 'white',
    borderRadius: 100,
  },
  previewImageContainer: {
    width: Dimensions.get("window").width,
    borderBottomColor: '#252525',
    borderBottomWidth: 1,
  },  
  deleteIcon: {
    position: 'relative',
    right: 0,
    top: 0,
  },
  flexContainer : {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 28,
    width: Dimensions.get("window").width,
  },
  flexContainerWithoutImages: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 28,
    width: Dimensions.get("window").width,
  },
  previewImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#252525'
  },
  submitButton: {
    position: 'relative',
  }
});