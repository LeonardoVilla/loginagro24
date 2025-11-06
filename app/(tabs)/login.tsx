import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import { supabase } from "../../src/supabaseClient";
import Toast from 'react-native-toast-message';
import { useState } from 'react';

export default function Login(){
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const autenticar = async () =>{
        Toast.show({
            type: 'success',
            text1: 'Sucesso',
            text2: 'Login efetuado com Sucesso! ' + email,
        })
    }

    return(
        <View style={ style.container}>

            <Text style={ style.titulo}>
                Login
            </Text>

            <TextInput style={ style.caixaText }
                placeholder='Digite seu E-mail'
                value={email}
                onChangeText={setEmail}
            />

            <TextInput style={ style.caixaText }
                placeholder='Digite sua senha'
                value={senha}
                onChangeText={setSenha}
            />

            <View style={ style.botao}>
                <Button
                    title='Login'
                    onPress={autenticar}
                />
            </View>

            <Toast />
        </View>
    )
}//fechando a função principal

////////////////////////////////////////
const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#D297B7',
        justifyContent: 'center',
        padding: 20,
    },
    titulo:{
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'#fff',
        marginBottom: 15,
    },
    caixaText:{
        backgroundColor: '#fff',
        color:'#000',
        padding: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#c8d537ff',
        marginBottom:10,
    },
    botao:{
        borderRadius:10,
        overflow:'hidden',
    }
});