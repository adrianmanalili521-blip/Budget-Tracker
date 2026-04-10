import { Image } from "react-native";

function NotFoundView () {
    return (
        <Image source={require('../assets/images/gorrila_meme.jpg')} style={{flex: 1, height: '100%', width: '100%'}}/>
    );
}

export default NotFoundView;