import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import {
  ChevronLeft,
  Video,
  FilePlus,
  UserPlus,
  ClipboardList,
  User,
  Settings,
  Bell,
  Activity,
  ChevronRight,
  Plus
} from 'lucide-react-native';

const ADMIN_CARDS = [
  {
    title: 'Yeni Video Ekle',
    description: 'Egzersiz videoları ekle',
    icon: <Video size={24} color="#2D6A4F" />,
    color: 'bg-primary/10'
  },
  {
    title: 'Yeni Blog Yazısı Ekle',
    description: 'Bilgilendirme içerikleri',
    icon: <FilePlus size={24} color="#2D6A4F" />,
    color: 'bg-secondary/50'
  },
  {
    title: 'Yeni Kullanıcı Ekle',
    description: 'Hasta kaydı oluştur',
    icon: <UserPlus size={24} color="#2D6A4F" />,
    color: 'bg-primary/10'
  },
  {
    title: 'Talepleri Listele',
    description: 'Destek ve randevu talepleri',
    icon: <ClipboardList size={24} color="#2D6A4F" />,
    color: 'bg-secondary/50'
  }
];

export default function AdminDashboard() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-background">
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-6 border-b border-border">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => router.back()} className="mr-4">
            <ChevronLeft size={24} color="#4A7C59" />
          </TouchableOpacity>
          <View>
            <Text className="text-2xl font-bold text-foreground">Yönetim Paneli</Text>
            <Text className="text-muted-foreground">Sistem Kontrol Merkezi</Text>
          </View>
        </View>
        <View className="flex-row gap-4">
          <TouchableOpacity className="p-2 rounded-full bg-secondary/30">
            <Bell size={20} color="#4A7C59" />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 rounded-full bg-secondary/30">
            <User size={20} color="#4A7C59" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-6 pt-6" showsVerticalScrollIndicator={false}>
        {/* Quick Stats */}
        <View className="flex-row gap-4 mb-8">
          <View className="flex-1 bg-primary/10 p-5 rounded-[24px] border border-primary/20">
            <Text className="text-primary font-bold text-lg">124</Text>
            <Text className="text-muted-foreground text-xs uppercase tracking-wider">Aktif Hasta</Text>
          </View>
          <View className="flex-1 bg-secondary/50 p-5 rounded-[24px] border border-secondary">
            <Text className="text-primary font-bold text-lg">45</Text>
            <Text className="text-muted-foreground text-xs uppercase tracking-wider">Bugünkü Egzersiz</Text>
          </View>
        </View>

        {/* Dashboard Grid */}
        <Text className="text-lg font-bold text-foreground mb-4 px-2">Hızlı İşlemler</Text>
        <View className="flex-row flex-wrap gap-4 mb-8">
          {ADMIN_CARDS.map((card, index) => (
            <TouchableOpacity
              key={index}
              style={{ width: '47%' }}
              className={`${card.color} p-6 rounded-[28px] shadow-sm border border-primary/5`}
            >
              <View className="bg-white/80 p-3 rounded-2xl self-start mb-4 shadow-sm">
                {card.icon}
              </View>
              <Text className="text-lg font-bold text-foreground mb-1 leading-tight">{card.title}</Text>
              <Text className="text-xs text-muted-foreground mb-4">{card.description}</Text>
              <View className="bg-primary/20 p-2 rounded-full self-end">
                <Plus size={16} color="#2D6A4F" />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Recent Activity */}
        <View className="bg-card p-6 rounded-[28px] mb-12 shadow-sm border border-border">
          <View className="flex-row items-center justify-between mb-6">
            <Text className="text-lg font-bold text-foreground">Son İstekler</Text>
            <TouchableOpacity>
              <Text className="text-primary font-bold">Tümünü Gör</Text>
            </TouchableOpacity>
          </View>

          {[1, 2, 3].map((item) => (
            <View key={item} className="flex-row items-center py-4 border-b border-border/50 last:border-0">
              <View className="w-10 h-10 rounded-full bg-secondary items-center justify-center mr-4">
                <User size={20} color="#4A7C59" />
              </View>
              <View className="flex-1">
                <Text className="font-bold text-foreground">Ahmet Yılmaz</Text>
                <Text className="text-xs text-muted-foreground">Program Değişikliği Talebi</Text>
              </View>
              <Text className="text-[10px] text-muted-foreground mr-3">14:20</Text>
              <ChevronRight size={16} color="#CBD5E1" />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
