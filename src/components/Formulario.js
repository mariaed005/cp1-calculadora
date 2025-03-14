import { useState } from "react"
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";

export default function TelaInicial(){

const Formulario = ({onCalcular}) =>{

    const [nomeProduto, setNomeProduto] = useState('');
    const [valorOriginal, setValorOriginal] = useState('');
    const [valorPorcentagem, setValorPorcentagem] = useState('');

   const validacao = () =>{ if(!nomeProduto || !valorOriginal || !valorAumento){
       Alert.alert("Erro! Preencha todos os campos")
       return
    }}

    const valor = parseFloat(valorOriginal);
    const porcentagem = parseFloat(valorPorcentagem);

    const valorAumento = (valor * porcentagem)/ 100;
    const valorFinal = valor + valorAumento;
    onCalcular({valor, valorAumento, valorFinal, porcentagem}); 


    return(
        <View>
            <Image style={styles.imagem} source={require('../../assets/calculadora.png')}/>
            <Text style={styles.nomes}>Nome Produto:</Text>
            <TextInput style={styles.input} value={nomeProduto} onChangeText={setNomeProduto}>Escreva o nome</TextInput>
            <Text style={styles.nomes}>Valor Original:</Text>
            <TextInput style={styles.input} value={valorOriginal} keyboardType='numeric' onChangeText={setValorOriginal}>Escreva o valor</TextInput>
            <Text style={styles.nomes}>Porcentagem:</Text>
            <TextInput style={styles.input} value={valorPorcentagem} keyboardType='numeric' onChangeText={setValorPorcentagem}>Escreva a porcentagem</TextInput>                
         </View>
    )

    const styles = StyleSheet.create(
        {
            nomes:{    
                flex:1,            
                justifyContent: 'center',
                alignItems:'center'                
            },
            input:{
                flex:1,
                justifyContent: 'center',
                alignItems:'center'
            },        
            imagem:{
                flex:1,
                width:20,
                justifyContent:'center'
            }
        }
        
    )
}

}
