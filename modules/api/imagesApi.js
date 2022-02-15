import firebase from 'firebase/compat/app'

export const addImageInFirebaseStore = async(images) => {
    const uploadedImagesUrl = images.map(async(element) => {
        const storageRef = await firebase.storage();
        const storageDb = await storageRef.ref("locationImages");
        // const uri = await FileSystem.readAsStringAsync(element.uri, { encoding: 'base64' });
        const uri = (element.base64).replaceAll('/', '');
        const uploadImagePath = await storageDb.child(element.id).put(uri, 'base64', { contentType:' image/jpg'} );
        const uploadedImageUrl = await firebase.storage().ref(uploadImagePath.metadata.fullPath).getDownloadURL();
        return uploadedImagesUrl;
    });
    return uploadedImagesUrl;
};
