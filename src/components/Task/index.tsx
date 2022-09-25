import { Text, TouchableOpacity, View } from 'react-native';
import Checkbox from 'expo-checkbox';

import { EvilIcons } from '@expo/vector-icons'
import { styles } from './styles';

type Props = {
    name: string;
    checked: boolean;
    onDelete: () => void;
    onComplete: () => void;
}


export function Task({ name, onDelete, onComplete, checked }: Props) {
    return (
        <View style={styles.container}>
            <Checkbox
                style={styles.checkbox}
                color={checked ? '#5E60CE' : '#4EA8DE'}
                value={checked}
                onValueChange={onComplete}
            />

            <Text
                style={checked ? (styles.name, styles.nameRisked) : styles.name}
            >
                {name}
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={onDelete}
            >
                <EvilIcons
                    name="trash"
                    size={24}
                    color='white'
                >

                </EvilIcons >
            </TouchableOpacity>
        </View>
    );
}