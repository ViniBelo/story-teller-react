import styles from '@/styles'
import { Text } from 'react-native'

interface ITitle {
    title: string;
};

const Title = (props: ITitle) => {
    const title = props.title
    return (
        <Text style={styles.title}>{title}</Text>
    );
};

export default Title;