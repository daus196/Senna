import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding:20,
    
  },
  ImgCapa: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderColor: "#202020",
    borderWidth: 3,
    marginBottom: 50,
  },
  boxParagrafo:{
    padding:20,
    backgroundColor:'#00009',
    borderRadius:20,
    width:340
  },
  texto:{
    color:'#fff',
    fontSize:22,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:10
  },
  texto2:{
    color:'#fff',
    fontSize:16,
    textAlign:'center'
  }
});

export default styles;
