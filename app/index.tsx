import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={style.container}>
      <View style={style.panel}>
        <Text style={style.textWhite}>Hello World!!</Text>
      </View>
      <View style={style.panel}>
        <View style={style.lingkaran}>
          <Text style={style.textWhite}>MY</Text>
        </View>
        <Text style={style.textWhite}>Hello World!!</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 16,
  },
  panel: {
    backgroundColor: '#25292e',
    padding: 24,
    borderRadius: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  textWhite: {
    fontSize: 20,
    color: '#fff',
  },
  lingkaran: {
    backgroundColor: 'teal',
    width: 70,
    height: 70,
    borderRadius: 35,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
