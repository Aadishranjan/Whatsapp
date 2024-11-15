import { TouchableOpacity, Text } from 'react-native';

const Button = ({ title, onPress }) => {
  return(
    <TouchableOpacity onPress={onPress} style={{
      backgroundColor: '#f44419',
      paddingHorizontal: 130,
      paddingVertical: 13,
      borderRadius: 10
    }}>
    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#fff' }}>{title}</Text>
    </TouchableOpacity>
    )
}

export default Button;