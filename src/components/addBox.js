import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./addBoxStyle"



function AddBox(props){
    const [text, onChangeText] = useState(undefined);
    const [isEnable, setIsEnable] = useState(false);
    
    

    function update(){
        if(text != null && text != ""){
            props.updateList(text);
    /*         console.log("pushed");
            console.log(props.list);  */     
            onChangeText("");   
            props.updateCounter(true);            
        }
    }

    useEffect(()=>{
        if(text != null && text != ""){
            setIsEnable(true);
        }else{
            setIsEnable(false);
        }
    },[text])
    
    

    return(
        <View style={styles.container}> 
            <TextInput style={styles.input_style}
                placeholder="To do ..."
                value={text}
                onChangeText={onChangeText}
                
            />  
            <View style={styles.button_view}>
                <TouchableOpacity                     
                    onPress={update}
                    
                    disabled={!isEnable}
                    style={isEnable ? styles.button_style_enabled : styles.button_style} 
                    >                   
                    <Text style={isEnable ? styles.button_text_style_enabled: styles.button_text_style}> Add </Text>
                </TouchableOpacity>
               
            </View>
            
        </View>
    )
}

export default AddBox;