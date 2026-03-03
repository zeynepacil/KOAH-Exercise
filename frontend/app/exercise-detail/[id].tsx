import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ChevronLeft, Play, AlertCircle, Clock, Info } from 'lucide-react-native';

const EXERCISE_DATA = {
  '1': {
    title: 'Ayakta Nefes Egzersizi',
    duration: '5 Dakika',
    instructions: [
      'Dik durun ve omuzlarınızı gevşetin.',
      'Burnunuzdan yavaşça derin bir nefes alın (2 saniye).',
      'Dudaklarınızı ıslık çalacakmış gibi büzün.',
      'Aldığınız nefesi aldığınız sürenin iki katı sürede yavaşça ağzınızdan verin (4 saniye).',
      'Egzersiz boyunca karın kaslarınızı serbest bırakmaya özen gösterin.'
    ],
    warning: 'Baş dönmesi veya halsizlik hissederseniz egzersizi hemen durdurun ve dinlenin.'
  },
  '2': {
    title: 'Oturarak Nefes Egzersizi',
    duration: '5 Dakika',
    instructions: [
      'Bir sandalyeye dik ve rahat bir şekilde oturun.',
      'Sırtınızın desteklendiğinden emin olun.',
      'Burnunuzdan sakin ve derin bir nefes alın.',
      'Dudak büzme tekniği ile nefesinizi yavaşça geri verin.',
      'Egzersizi 5-10 kez tekrarlayın.'
    ],
    warning: 'Nefes darlığınız artarsa egzersizi sonlandırıp sakinleşmeye çalışın.'
  },
  '3': {
    title: 'Isınma Hareketleri',
    duration: '5 Dakika',
    instructions: [
      'Omuzlarınızı yavaşça geriye doğru dairesel hareketlerle döndürün.',
      'Kollarınızı yanlara doğru açıp kapayın.',
      'Boynunuzu nazikçe sağa ve sola eğin.',
      'Ayak bileklerinizi her iki yöne doğru çevirin.',
      'Hafif tempo yerinizde yürür gibi hareket edin.'
    ],
    warning: 'Eklemlerinizde ağrı hissederseniz hareketi zorlamayın.'
  }
};

export default function ExerciseDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const exercise = EXERCISE_DATA[id as keyof typeof EXERCISE_DATA] || EXERCISE_DATA['1'];

  return (
    <SafeAreaView className="flex-1 bg-background">
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4">
        <TouchableOpacity onPress={() => router.back()} className="p-2 rounded-full bg-white/80 shadow-sm">
          <ChevronLeft size={24} color="#4A7C59" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-foreground">Detay</Text>
        <View className="w-10" />
      </View>

      <ScrollView className="flex-1 px-6 pt-4" showsVerticalScrollIndicator={false}>
        {/* Image Placeholder */}
        <View className="w-full h-56 bg-primary/10 rounded-[32px] items-center justify-center mb-6 overflow-hidden border border-primary/20">
          <View className="bg-white/50 p-6 rounded-full">
            <Play size={48} color="#2D6A4F" fill="#2D6A4F" />
          </View>
          <Text className="mt-4 text-primary font-bold">Egzersiz Görseli / Videosu</Text>
        </View>

        <View className="flex-row items-center mb-6">
          <View className="bg-secondary p-3 rounded-2xl mr-4">
            <Clock size={24} color="#2D6A4F" />
          </View>
          <View>
            <Text className="text-2xl font-bold text-foreground">{exercise.title}</Text>
            <Text className="text-muted-foreground">{exercise.duration}</Text>
          </View>
        </View>

        {/* Instructions */}
        <View className="bg-card p-6 rounded-[24px] mb-6 shadow-sm border border-border">
          <View className="flex-row items-center mb-4">
            <Info size={20} color="#2D6A4F" className="mr-2" />
            <Text className="text-lg font-bold text-foreground">Nasıl Yapılır?</Text>
          </View>
          {exercise.instructions.map((step, index) => (
            <View key={index} className="flex-row mb-3">
              <Text className="text-primary font-bold mr-3">{index + 1}.</Text>
              <Text className="text-muted-foreground flex-1 leading-5">{step}</Text>
            </View>
          ))}
        </View>

        {/* Warning Message */}
        <View className="bg-destructive/10 p-6 rounded-[24px] mb-10 flex-row items-start border border-destructive/20">
          <AlertCircle size={24} color="#EF4444" className="mr-3" />
          <View className="flex-1">
            <Text className="text-destructive font-bold mb-1">Önemli Uyarı</Text>
            <Text className="text-destructive/80 leading-5 italic">
              {exercise.warning}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          className="bg-primary p-5 rounded-[24px] mb-12 items-center shadow-lg shadow-primary/30"
          onPress={() => console.log('Egzersiz Başlatıldı')}
        >
          <Text className="text-white font-bold text-xl">Egzersizi Başlat</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
