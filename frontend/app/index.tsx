import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { User, Settings, Bell, ChevronRight, PlayCircle, BookOpen, Wind, Activity } from 'lucide-react-native';

export default function HomeScreen() {
  const router = useRouter();

  const menuItems = [
    {
      title: 'Bilgilendirme Formu',
      icon: <BookOpen size={24} color="#2D6A4F" />,
      route: '/bilgilendirme',
      description: 'Program hakkında detaylı bilgi'
    },
    {
      title: 'Isınma Hareketleri',
      icon: <Activity size={24} color="#2D6A4F" />,
      route: '/exercise-list',
      description: 'Egzersiz öncesi hazırlık'
    },
    {
      title: 'Nefes Egzersizleri',
      icon: <Wind size={24} color="#2D6A4F" />,
      route: '/exercise-list',
      description: 'KOAH için özel teknikler'
    }
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4">
        <View>
          <Text className="text-2xl font-bold text-foreground">KOAH EGZERSİZ</Text>
          <Text className="text-muted-foreground">Bugünkü egzersize hazır mıyız?</Text>
        </View>
        <View className="flex-row gap-4">
          <TouchableOpacity onPress={() => router.push('/admin')}>
            <Settings size={22} color="#4A7C59" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Bell size={22} color="#4A7C59" />
          </TouchableOpacity>
          <TouchableOpacity>
            <User size={22} color="#4A7C59" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-6 pt-4" showsVerticalScrollIndicator={false}>
        {/* Progress Card */}
        <View className="bg-primary/10 p-6 rounded-[24px] mb-8 flex-row items-center justify-between border border-primary/20">
          <View className="flex-1">
            <Text className="text-primary font-semibold mb-1">Günlük İlerleme</Text>
            <Text className="text-2xl font-bold text-foreground mb-2">%65 Tamamlandı</Text>
            <View className="h-2 bg-secondary rounded-full overflow-hidden">
              <View className="h-full bg-primary" style={{ width: '65%' }} />
            </View>
          </View>
          <View className="ml-4 bg-white/50 p-3 rounded-full">
            <PlayCircle size={32} color="#2D6A4F" />
          </View>
        </View>

        {/* Menu Items */}
        <Text className="text-lg font-bold text-foreground mb-4">Hızlı Erişim</Text>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => router.push(item.route)}
            className="bg-card p-4 rounded-[20px] mb-4 flex-row items-center shadow-sm border border-border"
          >
            <View className="bg-primary/10 p-3 rounded-xl mr-4">
              {item.icon}
            </View>
            <View className="flex-1">
              <Text className="text-lg font-semibold text-foreground">{item.title}</Text>
              <Text className="text-sm text-muted-foreground">{item.description}</Text>
            </View>
            <ChevronRight size={20} color="#94A3B8" />
          </TouchableOpacity>
        ))}

        {/* Info Box */}
        <View className="bg-secondary/50 p-6 rounded-[24px] mt-4 mb-8">
          <Text className="text-primary font-bold mb-2">Günün Tavsiyesi</Text>
          <Text className="text-foreground leading-5">
            Egzersiz yaparken nefesinizi tutmamaya özen gösterin. Yorulduğunuzda dinlenin.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
