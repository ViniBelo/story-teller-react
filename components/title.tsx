import styles from '@/styles'
import { Text } from 'react-native'

// ITitle interface defines the props for the Title component
interface ITitle {
    title: string;
};

// Title component has the screen's title
const Title = (props: ITitle) => {
    const title = props.title
    return (
        <Text style={styles.title}>{title}</Text>
    );
};

export default Title;