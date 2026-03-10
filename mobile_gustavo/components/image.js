import {View, Image, StyleSheet} from 'react-native'

export default function Images(){
    return(
        <View style={styles.view_img}>
            <Image style={styles.imagem} source={require("../sources/john.webp")}/>
            <Image style={styles.imagem} source={require("../sources/John_Hood_down.webp")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    imagem: {
    width: 150,
    height: 150,
  },

  view_img: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
  }
});


