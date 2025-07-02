import { useState } from "react";
import { StyleSheet, TextInput, View, Alert } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen(){
    const [enteredNumber,setEnteredNumber]=useState('');

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText)
    }
    function resetInputHandler(){
        setEnteredNumber('');
    }
    function confirmInputHandler(){
        const chosenNumber=parseInt(enteredNumber);
        if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99){
            //show alert
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99.',
                [{text:'Okay', style:'destructive,', onPress:resetInputHandler}]
            );
            return;
        }
        console.log('Valid number!');
    }

    return(
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
};

export default StartGameScreen;

const styles=StyleSheet.create({
    inputContainer:{
        //justifyContent:'center',
        alignItems:'center',
        marginTop:100,
        marginHorizontal:24,
        padding:16,
        backgroundColor:'#3b021f',
        borderRadius:8,
        elevation:8,  //Android shadow styling

        //iOS shadow styling
        shadowColor:'black',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowRadius:6,
        shadowOpacity:0.25,  
    },
    numberInput:{
        fontSize:28,
        width:50,
        borderBottomWidth:2,
        borderBottomColor:'#ddb52f',
        color:'#ddb52f',
        fontWeight:'bold',
        marginVertical:8,
        textAlign:'center'    
    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex:1
    }
    
})