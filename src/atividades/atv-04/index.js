import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Atividade04() {

    const [nome, setNome] = useState('');
    const [ sobrenome, setSobrenome] = useState(''); 
    const [nomecompleto, setNomecompleto] = useState(''); 

    function handleExibeMensagem() {
        setNome(' ');
        setSobrenome(' ');
        setNomecompleto(`${nome} ${sobrenome}` );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>

            <Text style={styles.txt}>{nomecompleto}</Text>

            <TextInput
                onChangeText={setNome}
                value={nome}
                placeholder='nome'
                maxLength={10}
                style={styles.input}
            />

            <TextInput
                value={sobrenome} 
                onChangeText={setSobrenome}
                placeholder='sobrenome'
                style={styles.input}
            />

            <TouchableOpacity 
                style={styles.botao} 
                onPress={() => handleExibeMensagem()}
            >
                <Text style={styles.txtBotao}>exibir nome completo</Text>
            </TouchableOpacity> 

        </View>
    );
}


