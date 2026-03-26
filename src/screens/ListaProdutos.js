import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { produtos } from '../data/produtos';

export default function ListaProdutos({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('DetalhesProduto', { produto: item })}
      activeOpacity={0.85}
    >
      <View style={styles.cardLeft}>
        <Text style={styles.emoji}>{item.emoji}</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.categoria}>{item.categoria}</Text>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.preco}>{item.preco}</Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Produtos em Destaque</Text>
        <Text style={styles.headerSub}>{produtos.length} itens disponíveis</Text>
      </View>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F0F1A' },
  header: {
    paddingHorizontal: 20, paddingTop: 20, paddingBottom: 12,
    borderBottomWidth: 1, borderBottomColor: '#2A2A3E',
  },
  headerTitle: { color: '#FFFFFF', fontSize: 22, fontWeight: 'bold' },
  headerSub: { color: '#888', fontSize: 13, marginTop: 2 },
  list: { padding: 16 },
  card: {
    backgroundColor: '#1A1A2E', borderRadius: 12,
    borderLeftWidth: 4, borderLeftColor: '#FF6B35',
    flexDirection: 'row', alignItems: 'center',
    padding: 16, marginBottom: 12, elevation: 4,
  },
  cardLeft: {
    width: 50, height: 50, borderRadius: 25,
    backgroundColor: '#0F0F1A',
    justifyContent: 'center', alignItems: 'center', marginRight: 14,
  },
  emoji: { fontSize: 24 },
  cardContent: { flex: 1 },
  categoria: {
    color: '#888', fontSize: 11,
    textTransform: 'uppercase', letterSpacing: 1, marginBottom: 2,
  },
  nome: { color: '#FFFFFF', fontSize: 16, fontWeight: '600', marginBottom: 4 },
  preco: { color: '#FF6B35', fontSize: 15, fontWeight: 'bold' },
  arrow: { color: '#555', fontSize: 28 },
});