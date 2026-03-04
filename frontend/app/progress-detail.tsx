import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { ChevronLeft, CheckCircle2, Circle } from 'lucide-react-native';

export default function ProgressDetailScreen() {
  const router = useRouter();

  const completedExercises = [
    { id: 1, title: 'Nefes Egzersizi (Ayakta)', time: '09:00' },
    { id: 2, title: 'Isınma Hareketleri', time: '09:15' },
  ];

  const remainingExercises = [
    { id: 3, title: 'Nefes Egzersizi (Oturarak)', duration: '5 dk' },
    { id: 4, title: 'Gevşeme Egzersizleri', duration: '5 dk' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-row items-center px-6 py-4 border-b border-border">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <ChevronLeft size={24} color="hsl(158, 50%, 50%)" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-foreground">Günlük İlerleme</Text>
      </View>

      <ScrollView className="flex-1 px-6 pt-6">
        <View className="bg-primary/10 p-6 rounded-[24px] mb-8 border border-primary/20">
          <Text className="text-primary font-semibold mb-2">Genel Durum</Text>
          <Text className="text-3xl font-bold text-foreground mb-4">%65 Tamamlandı</Text>
          <View className="h-3 bg-secondary rounded-full overflow-hidden">
            <View className="h-full bg-primary" style={{ width: '65%' }} />
          </View>
          <Text className="text-muted-foreground mt-4 text-sm">
            Bugün planlanan 4 egzersizden 2 tanesini tamamladınız. Harika gidiyorsunuz!
          </Text>
        </View>

        <View className="mb-8">
          <Text className="text-lg font-bold text-foreground mb-4">Tamamlananlar</Text>
          {completedExercises.map((ex) => (
            <View key={ex.id} className="flex-row items-center bg-card p-4 rounded-2xl mb-3 border border-border">
              <CheckCircle2 size={24} color="hsl(158, 50%, 50%)" className="mr-4" />
              <View>
                <Text className="font-semibold text-foreground">{ex.title}</Text>
                <Text className="text-xs text-muted-foreground">Saat: {ex.time}</Text>
              </View>
            </View>
          ))}
        </View>

        <View className="mb-8">
          <Text className="text-lg font-bold text-foreground mb-4">Kalanlar</Text>
          {remainingExercises.map((ex) => (
            <TouchableOpacity 
              key={ex.id} 
              onPress={() => router.push('/exercise-list')}
              className="flex-row items-center bg-card p-4 rounded-2xl mb-3 border border-border"
            >
              <Circle size={24} color="#94A3B8" className="mr-4" />
              <View>
                <Text className="font-semibold text-foreground">{ex.title}</Text>
                <Text className="text-xs text-muted-foreground">Süre: {ex.duration}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
