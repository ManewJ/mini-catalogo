import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function Perfil() {
  const info = [
    { label: 'Nome', valor: 'Carlos Manoel Justino' },
    { label: 'Profissão', valor: 'Personal Trainer' },
    { label: 'Especialidade', valor: 'Treinamento Personalizado Consultoria-online' },
    { label: 'Curso', valor: 'Sistemas para Internet' },
  ];

  const stats = [
    { icon: '🏃', label: 'Corrida', valor: 'Endurance' },
    { icon: '🏊', label: 'Triatlon', valor: 'Multisport' },
    { icon: '💪', label: 'Musculação', valor: 'Hipertrofia' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Avatar */}
        <View style={styles.avatarSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarEmoji}>👤</Text>
          </View>
          <Text style={styles.nomeHeader}>Carlos Manoel Justino</Text>
          <Text style={styles.subtitulo}>Personal Trainer · Dev em formação</Text>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          {stats.map((s, i) => (
            <View key={i} style={styles.statCard}>
              <Text style={styles.statIcon}>{s.icon}</Text>
              <Text style={styles.statValor}>{s.valor}</Text>
              <Text style={styles.statLabel}>{s.label}</Text>
            </View>
          ))}
        </View>

        {/* Informações */}
        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Informações</Text>
          {info.map((item, i) => (
            <View key={i} style={styles.infoRow}>
              <Text style={styles.infoLabel}>{item.label}</Text>
              <Text style={styles.infoValor}>{item.valor}</Text>
            </View>
          ))}
        </View>

        {/* Sobre o app */}
        <View style={styles.appCard}>
          <Text style={styles.appCardTitle}>📱 Sobre o App</Text>
          <Text style={styles.appCardText}>
            Mini Catálogo Fitness — desenvolvido com React Native + Expo.{'\n'}
            Disciplina: Programação para Dispositivos Móveis.
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F0F1A' },
  avatarSection: {
    alignItems: 'center', paddingTop: 32, paddingBottom: 24,
    borderBottomWidth: 1, borderBottomColor: '#2A2A3E',
  },
  avatar: {
    width: 90, height: 90, borderRadius: 45,
    backgroundColor: '#1A1A2E', borderWidth: 3, borderColor: '#FF6B35',
    justifyContent: 'center', alignItems: 'center', marginBottom: 12,
  },
  avatarEmoji: { fontSize: 40 },
  nomeHeader: { color: '#FFFFFF', fontSize: 22, fontWeight: 'bold' },
  subtitulo: { color: '#FF6B35', fontSize: 13, marginTop: 4 },
  statsRow: {
    flexDirection: 'row', justifyContent: 'space-around',
    padding: 20, borderBottomWidth: 1, borderBottomColor: '#2A2A3E',
  },
  statCard: {
    alignItems: 'center', backgroundColor: '#1A1A2E',
    borderRadius: 12, padding: 14, width: '30%',
  },
  statIcon: { fontSize: 24, marginBottom: 4 },
  statValor: { color: '#FF6B35', fontSize: 12, fontWeight: 'bold' },
  statLabel: { color: '#888', fontSize: 11, marginTop: 2 },
  infoSection: { padding: 20 },
  sectionTitle: {
    color: '#888', fontSize: 12, textTransform: 'uppercase',
    letterSpacing: 1.5, marginBottom: 14, fontWeight: '600',
  },
  infoRow: {
    flexDirection: 'row', justifyContent: 'space-between',
    paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#2A2A3E',
  },
  infoLabel: { color: '#888', fontSize: 14 },
  infoValor: { color: '#FFFFFF', fontSize: 14, fontWeight: '500', maxWidth: '60%', textAlign: 'right' },
  appCard: {
    margin: 20, backgroundColor: '#1A1A2E', borderRadius: 12,
    padding: 16, borderLeftWidth: 4, borderLeftColor: '#FF6B35', marginBottom: 32,
  },
  appCardTitle: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 15, marginBottom: 8 },
  appCardText: { color: '#888', fontSize: 13, lineHeight: 20 },
});