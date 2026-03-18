import { View, Text, Image } from 'react-native'; 

import styles from './styles';

import imgPreta from '../../../assets/camisaPreta.png'; 
import imgListrada from '../../../assets/camisaListrada.png'; 
import imgBranca from '../../../assets/camisaBranca.png'; 



import Card from './mensagens';

function Atividade02 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>
        <Card
            titulo={'Camisa Preta'}
            descricao={'Camisa Preta Corinthans'}
            preco={'R$:300,00'} 
            img={imgPreta}
        /> 
        <Card
            titulo={'Camisa Listrada'}
            descricao={'Camisa Listrada Corinthians'}
            preco={'R$:349,00'}
            img={imgListrada}

        />
        <Card
            titulo={'Camisa Branca'}
            descricao={'Camisa Branca Corinthians'}
            preco={'R$:400,00'}
            img={imgBranca}

        />   

        </View>
    );
}

export default Atividade02;