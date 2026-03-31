import { useState } from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';

import styles from './styles';

function Exemplo03() {

    const [numero, setNumero] = useState(0);

    function handleIncrementa() {
        setNumero(numero + 1);
    }
    function handleDiminui() {
        setNumero(numero - 1);
    }


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>
            <Text style={styles.texto}>Variáveis e State</Text>

            <Text style={styles.valor}>{numero}</Text>
                 <View>
                
      
            <TouchableOpacity style={styles.botao} onPress={handleIncrementa}>
                <Text style={styles.txtBotao}>+1</Text>
            </TouchableOpacity>
   
            <TouchableOpacity style={styles.botao} onPress={handleDiminui}>
                <Text style={styles.txtBotao}>-1</Text>
                
            </TouchableOpacity>            
               </View>
        </View>

        
    );
}

export default Exemplo03;