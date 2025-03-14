import { useState } from "react"
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";

const Formulario = ({onCalcular}) =>{

    const [nomeProduto, setNomeProduto] = useState('');
    const [valorOriginal, setValorOriginal] = useState('');
    const [valorPorcentagem, setValorPorcentagem] = useState;

   const validacao = () =>{ if(!nomeProduto || !valorOriginal || !valorAumento){
       Alert.alert("Erro! Preencha todos os campos")
       return
    }}

    const valor = (setValorOriginal);
    const porcentagem = (setValorPorcentagem);

    const valorAumento = (valor * porcentagem)/ 100;
    const valorFinal = valor + valorAumento;

    const calcular = () => {}
    


    return(
        <View>
            
            <Text>Valor Original</Text>
            <TextInput value="{setValorOriginal}"></TextInput>
            <Text>porcentagem</Text>
            <TextInput></TextInput>

            


        </View>
    )

    const styles = StyleSheet.create(
        
    )
}


