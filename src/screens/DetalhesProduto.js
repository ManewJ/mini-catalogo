import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function DetalhesProduto({ route, navigation }) {
  const { produto } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Hero */}
        <View style={styles.hero}>
          <Text style={styles.heroEmoji}>{produto.emoji}</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{produto.categoria}</Text>
          </View>
        </View>

        {/* Conteúdo */}
        <View style={styles.content}>
          <Text style={styles.nome}>{produto.nome}</Text>
          <Text style={styles.preco}>{produto.preco}</Text>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>Descrição</Text>
          <Text style={styles.descricao}>{produto.descricao}</Text>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>Benefícios</Text>
          {produto.beneficios.map((b, index) => (
            <View key={index} style={styles.beneficioRow}>
              <Text style={styles.check}>✓</Text>
              <Text style={styles.beneficioText}>{b}</Text>
            </View>
          ))}

          <TouchableOpacity
            style={styles.btnVoltar}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.btnVoltarText}>← Voltar ao Catálogo</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F0F1A' },
  hero: {
    alignItems: 'center', paddingVertical: 40,
    backgroundColor: '#1A1A2E',
  },
  heroEmoji: { fontSize: 80 },
  badge: {
    marginTop: 12, paddingHorizontal: 16, paddingVertical: 4,
    borderRadius: 20, backgroundColor: '#FF6B35',
  },
  badgeText: {
    color: '#FFF', fontSize: 12,
    fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1,
  },
  content: { padding: 24 },
  nome: { color: '#FFFFFF', fontSize: 26, fontWeight: 'bold', marginBottom: 8 },
  preco: { color: '#FF6B35', fontSize: 24, fontWeight: 'bold' },
  divider: { height: 1, backgroundColor: '#2A2A3E', marginVertical: 20 },
  sectionTitle: {
    color: '#888', fontSize: 12, textTransform: 'uppercase',
    letterSpacing: 1.5, marginBottom: 10, fontWeight: '600',
  },
  descricao: { color: '#CCCCCC', fontSize: 15, lineHeight: 24 },
  beneficioRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  check: { color: '#FF6B35', fontSize: 16, fontWeight: 'bold', marginRight: 10, width: 20 },
  beneficioText: { color: '#CCCCCC', fontSize: 15 },
  btnVoltar: {
    marginTop: 32, borderWidth: 1.5, borderColor: '#FF6B35',
    borderRadius: 10, paddingVertical: 14, alignItems: 'center',
  },
  btnVoltarText: { color: '#FF6B35', fontSize: 15, fontWeight: '600' },
});