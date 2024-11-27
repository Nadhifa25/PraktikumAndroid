import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';

type Props = {
  id: number;
  sumberGambar: string;
  judul: string;
  keterangan: string;
};

const PlaceholderImage = require('@/assets/images/08.jpeg');

export default function Card({ id, sumberGambar, judul, keterangan }: Props) {
  const imageSource = sumberGambar ? { uri: sumberGambar } : PlaceholderImage;
  return (
    <View style={style.panel}>
      <Image style={style.image} source={'imageSource'}></Image>
      <View>
        <Text style={style.textWhite}>{judul}</Text>
        <Text style={style.textWhiteKecil}>{keterangan}</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  panel: {
    backgroundColor: '#25292e',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    flexDirection: 'row', // Membuat gambar dan teks berjajar horizontal
    alignItems: 'center',
  },
  textWhite: {
    fontSize: 16,
    color: '#fff',
    // fontWeight: 'bold', // Menonjolkan judul
    // marginBottom: 4,
  },
  textWhiteKecil: {
    fontSize: 12,
    color: '#fff',
  },
  image: {
    width: 80,
    height: 60,
    // borderRadius: 8, // Membuat sudut sedikit melengkung
    // marginRight: 16,
    marginEnd: 24,
  },
});
