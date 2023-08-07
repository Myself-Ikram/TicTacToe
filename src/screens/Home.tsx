import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native';
import { FlatList } from 'react-native';
import Icons from '../components/Icons';
export default function Home() {
  const [isGreen,setIsGreen] = useState(true);
  const [foundWinner,setFoundWinner] = useState("");
  const [gameState, setGameState] = useState(new  Array(9).fill("empty",0,9))

  const resetGame= () =>{
    setIsGreen(true);
    setFoundWinner("");
    setGameState(new Array(9).fill("empty",0,9));
  }
  const checkWinner = () =>{
    if(gameState[0] != "empty" && gameState[0] === gameState[1] && gameState[1] === gameState[2]){
      setFoundWinner(gameState[0] + " won 🎉")
    }
    else if(gameState[3] != "empty" && gameState[3] === gameState[4] && gameState[4] === gameState[5]){
      setFoundWinner(gameState[3] + " won 🎉")
    }
    else if(gameState[6] != "empty" && gameState[6] === gameState[7] && gameState[7] === gameState[8]){
      setFoundWinner(gameState[6] + " won 🎉")
    }
    else if(gameState[0] != "empty" && gameState[0] === gameState[3] && gameState[3] === gameState[6]){
      setFoundWinner(gameState[0] + " won 🎉")
    }
    else if(gameState[1] != "empty" && gameState[1] === gameState[4] && gameState[4] === gameState[7]){
      setFoundWinner(gameState[1] + " won 🎉")
    }
    else if(gameState[2] != "empty" && gameState[2] === gameState[5] && gameState[5] === gameState[8]){
      setFoundWinner(gameState[2] + " won 🎉")
    }
    else if(gameState[0] != "empty" && gameState[0] === gameState[4] && gameState[4] === gameState[8]){
      setFoundWinner(gameState[0] + " won 🎉")
    }
    else if(gameState[2] != "empty" && gameState[2] === gameState[4] && gameState[4] === gameState[6]){
      setFoundWinner(gameState[2] + " won 🎉")
    }
    if(foundWinner){
      resetGame()
    }
  }
  const onChangeItem = (item : number) =>{
    if(gameState[item] === "empty"){
      gameState[item] = isGreen ? "Green" : "Yellow";
      setIsGreen(!isGreen)
    }
    else{
      console.log("Already Mark");
      
    }
    checkWinner()

  }
  return (
    <SafeAreaView style={{backgroundColor:"black",alignContent:"center",flex:1}}>
      {foundWinner? (
        <View style={[styles.btnHeading,styles.btnColor]}>
          <Text style={styles.headerText}>{foundWinner}</Text>
        </View>
      ):(
        <View style={[styles.btnHeading,isGreen? styles.playerGreen : styles.playerYellow]}>
          <Text style={styles.headerText}>{isGreen? "Green": "Yellow"}</Text>
        </View>
      )}
      <View style={styles.body}>
      <FlatList
      data={gameState}
      numColumns={3}
      renderItem={({index,item})=>(
        <Pressable onPress={()=>(onChangeItem(index))}>
          <Icons name={item} />
        </Pressable>
      )}
      />
      </View>
      <View style={{flex:1}}>
        <Pressable style={[styles.btnColor,styles.btnHeading]} onPress={resetGame}><Text style={styles.headerText}>{foundWinner? "Tap Here" : "Reset"}</Text></Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  btnHeading:{
    alignItems:"center",
    margin:15,
    borderRadius:20,
    flex:1,
    justifyContent:"center"
  },
  btnColor:{
    backgroundColor:"#4a69bd"
  },
  playerGreen:{
    backgroundColor:"#1abc9c",
  },
  playerYellow:{
    backgroundColor:"#f39c12",
  },
  headerText:{
    fontSize:30,
    color:"white"
  },
  body:{
    alignItems:"center",
    paddingTop:30,
    flex:2,
  },
})