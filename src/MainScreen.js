import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native'
import React, {useState} from 'react'
import styles from './StyleMainScreen';


const MainScreen = () => {
    const [value, setValue] = useState('0');
    const [bracket, setBracketOpen] = useState(false);

    const handlePress = (val) => {
        if (val == 'AC'){
            setValue('0');
        }
        else if (val == '='){
            try{
                if((value.match(/\(/g) || []).length == (value.match(/\)/g) || []).length){
                    if (value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/' || value.slice(-1) == '.' || value.slice(-1) == '%'){
                        setValue(`${eval(value.replace('()', '(0)').slice(0, -1))}`);
                    } 
                    else {
                        setValue(`${eval(value.replace('()', '(0)'))}`);
                    }
                }
                //  else {
                //     console.log('unequalbrackets');
                // }
            }
            catch(e){
                setValue('Format Error');
            }
        }
        else if (val == 'back'){
            setValue(value.slice(0, -1));
        }
        else if (val == '()'){
            if (value == '0'){
                setValue('(');
                setBracketOpen(true);
            } 
            else if (value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/' || value.slice(-1) == '.' || value.slice(-1) == '%'){
                setValue(value + '(');
                setBracketOpen(true);
            }
            else {
                if (bracket){
                    setValue(value + ')');
                    setBracketOpen(false);
                } else {
                    setValue(value + '(');
                    setBracketOpen(true);
                }
            }
        }
        else if (value == 'Format Error'){
            setValue(val);
        }
        else {
            if (value == '0'){
                if (isNaN(val)){
                    setValue(value + val);
                } else {
                    setValue(val);
                }
            } 
            else if(isNaN(val)){
                if (value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/' || value.slice(-1) == '.' || value.slice(-1) == '%'){
                    setValue(value.slice(0, -1) + val);
                } else 
                setValue(value + val);
            }
            else {
                setValue(value + val);
            }
        }
    }
  return (
    <View style={styles.calculationDisplay}>
        <ScrollView ref={ref => {this.scrollView = ref}} style={styles.scrollDisplay} onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})} showsVerticalScrollIndicator={false}>
            <Text style={styles.calculation}>{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
        </ScrollView>
        

        <View style={styles.keypad}>
            <View style={styles.row}>
                <Pressable onPress={()=>handlePress('AC')}>
                    <View style={styles.buttonOuterU}>
                        <Text style={styles.buttonTextOuter}>AC</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('()')}>
                    <View style={styles.buttonOuter}>
                        <Text style={styles.buttonTextOuter}>()</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('%')}>
                    <View style={styles.buttonOuter}>
                        <Text style={styles.buttonTextOuter}>%</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('/')}>
                    <View style={styles.buttonOuter}>
                        <Text style={styles.buttonTextOuter}>/</Text>
                    </View>
                </Pressable>
            </View>
            <View style={styles.row}>
                <Pressable onPress={()=>handlePress('7')}>
                    <View style={styles.button1}>
                        <Text style={styles.buttonText}>7</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('8')}>
                    <View style={styles.button1}>
                        <Text style={styles.buttonText}>8</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('9')}>
                    <View style={styles.button1}>
                        <Text style={styles.buttonText}>9</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('*')}>
                    <View style={styles.buttonOuter}>
                        <Text style={styles.buttonTextOuter}>*</Text>
                    </View>
                </Pressable>
            </View>
            <View style={styles.row}>
                <Pressable onPress={()=>handlePress('4')}>
                    <View style={styles.button1}>
                        <Text style={styles.buttonText}>4</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('5')}>
                    <View style={styles.button1}>
                        <Text style={styles.buttonText}>5</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('6')}>
                    <View style={styles.button1}>
                        <Text style={styles.buttonText}>6</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('-')}>
                    <View style={styles.buttonOuter}>
                        <Text style={styles.buttonTextOuter}>-</Text>
                    </View>
                </Pressable>
            </View>
            <View style={styles.row}>
                <Pressable onPress={()=>handlePress('1')}>
                    <View style={styles.button1}>
                        <Text style={styles.buttonText}>1</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('2')}>
                    <View style={styles.button1}>
                        <Text style={styles.buttonText}>2</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('3')}>
                    <View style={styles.button1}>
                        <Text style={styles.buttonText}>3</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('+')}>
                    <View style={styles.buttonOuter}>
                        <Text style={styles.buttonTextOuter}>+</Text>
                    </View>
                </Pressable>
            </View>
            <View style={styles.row}>
                <Pressable onPress={()=>handlePress('0')}>
                    <View style={styles.button1}>
                        <Text style={styles.buttonText}>0</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('.')}>
                    <View style={styles.button1}>
                        <Text style={styles.buttonText}>.</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('back')}>
                    <View style={styles.button1}>
                        <Text style={styles.buttonText}>&lt;</Text>
                    </View>
                </Pressable>
                <Pressable onPress={()=>handlePress('=')}>
                    <View style={styles.buttonOuterU}>
                        <Text style={styles.buttonTextOuter}>=</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    </View>
  )
}


export default MainScreen