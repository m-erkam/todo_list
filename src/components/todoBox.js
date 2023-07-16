import React, {useState, useRef} from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import styles from "./todoStyle"

function Box(props){
    const [isPressed, setIsPressed] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const timeRef = useRef(null);

    function startHandle(){
        setIsPressed(true);
        timeRef.current = setTimeout(()=>{
            props.setCounter(false);
            setIsVisible(false);
        }, 1000);
    }

    function finishHandle(){
        setIsPressed(false);
        clearTimeout(timeRef.current);
    }

    return(
        <View>
            {isVisible && <View style={styles.container}>
                <TouchableWithoutFeedback
                    onPressIn={startHandle}
                    onPressOut={finishHandle} >
                    <Text style={styles.text_style}>  {props.todo}</Text>
                </TouchableWithoutFeedback>
                
            </View>}
        </View>
        

    ) 
}

export default Box;