import React, {useState} from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import Box from "./components/todoBox"
import AddBox from "./components/addBox";


function App(){
    const [todoList, setTodoList] = useState([]);
    const [counter, setCounter] = useState(0);

    const render = ({item}) => <Box todo={item} counter={counter} setCounter={updateCounter}/>
    
    const updateList = (item) => {
        todoList.push(item);
        setTodoList(todoList);
    }

    const updateCounter = (inc) => {
        let temp;
        if(inc){
            temp = counter + 1;
        }else{
            temp = counter - 1;
        }
    
        setCounter(temp);
    }

    const renderSeperator = () => {
        return <View style = {styles.seperator_style} />
    }

    return(
        <View style={styles.container}>
            <View style = {styles.content_container}>
                <Text style={styles.text_style}> To Do List</Text>
                <Text style={styles.counter_style}> {counter}</Text>
            </View>
            <View style={styles.list_style}>
                <FlatList
                    data={todoList}
                    renderItem={render}
                    ItemSeparatorComponent={renderSeperator}
                />
            </View>
            
            <View >
                <AddBox 
                list={todoList}
                updateList={updateList}
                counter={counter}
                updateCounter={updateCounter}
                />
            </View>
        </View>
    )
}

export default App;

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#0C090A", 
        flex:1,
    },
    content_container:{
        padding:20,
        flexDirection:"row",
        borderBottomWidth:1,
        borderBottomColor:"white",
    },
    counter_style:{

        fontSize:30,
        color:"orange"
    },
    text_style:{
        color:"orange",
        fontSize:30,
        fontWeight:"bold",
        flex:1,
    },
    list_style:{
        paddingTop:5,
        flex:1,
    },
    seperator_style:{
        height:5,
        backgroundColor:"#0C090A",

    }
})