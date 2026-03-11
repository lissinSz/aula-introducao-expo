import { View, Text} from 'react-native';


import styles from './styles';

function Atividade01 () {
    return(
        <View style={styles.container} >
            <Text style={styles.titulo} >Exemplo 1</Text>
            <Text>
                Aula de React Native com Expo
            </Text>

            <Text>Um texto qualquer</Text>
        </View>
    );
}

export default Atividade01;
