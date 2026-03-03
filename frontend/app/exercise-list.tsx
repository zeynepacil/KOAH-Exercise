import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { ChevronLeft, ChevronRight, Clock, Wind, Activity } from 'lucide-react-native';

const EXERCISES = [
  {
    id: '1',
    title: 'Nefes Egzersizleri',
    duration: '5 dakika',
    description: 'Ayakta yapılan solunum teknikleri',
    icon: <Wind size={20} color="#2D6A4F" />,
    type: 'Breath',
  },
  {
    id: '2',
    title: 'Nefes Egzersizleri',
    duration: '5 dakika',
    description: 'Oturarak yapılan solunum teknikleri',
    icon: <Wind size={20} color="#2D6A4F" />,
    type: 'Breath',
  },
  {
    id: '3',
    title: 'Isınma Hareketleri',
    duration: '5 dakika',
    description: 'Egzersiz öncesi kas hazırlığı',
    icon: <Activity size={20} color="#2D6A4F" />,
    type: 'Warmup',
  },
];

export default function ExerciseListScreen() {
  const router = useRouter();

  const renderItem = ({ item }: { item: typeof EXERCISES[0] }) => (
    <TouchableOpacity
      onPress={() => router.push(`/exercise-detail/${item.id}`)}
      className="bg-card p-5 rounded-[24px] mb-4 flex-row items-center shadow-sm border border-border"
    >
      <View className="bg-primary/10 p-4 rounded-2xl mr-4">
        {item.icon}
      </View>
      <View className="flex-1">
        <Text className="text-lg font-bold text-foreground mb-1">{item.title}</Text>
        <Text className="text-sm text-muted-foreground mb-2">{item.description}</Text>
        <View className="flex-row items-center">
          <Clock size={14} color="#94A3B8" />
          <Text className="text-xs text-muted-foreground ml-1">{item.duration}</Text>
        </View>
      </View>
      <ChevronRight size={20} color="#CBD5E1" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-background">
      {/* Header */}
      <View className="px-6 py-6">
        <TouchableOpacity onPress={() => router.back()} className="mb-4">
          <ChevronLeft size={24} color="#4A7C59" />
        </TouchableOpacity>
        <Text className="text-3xl font-bold text-foreground">Egzersizler</Text>
        <Text className="text-muted-foreground mt-1">Sizin için hazırlanan program</Text>
      </View>

      <FlatList
        data={EXERCISES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerClassName="px-6 pb-8"
        ListEmptyComponent={
          <View className="items-center justify-center py-20">
            <Text className="text-muted-foreground text-lg">Egzersiz bulunamadı.</Text>
          </View>
        }
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
