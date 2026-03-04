import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { ChevronLeft, Bell, Calendar, Info, Wind } from 'lucide-react-native';

export default function NotificationsScreen() {
  const router = useRouter();

  const notifications = [
    {
      id: 1,
      title: 'Egzersiz Zamanı',
      message: 'Öğle arası nefes egzersizinizi unutmayın!',
      time: '12:00',
      icon: <Wind size={20} color="hsl(158, 50%, 50%)" />,
      type: 'exercise'
    },
    {
      id: 2,
      title: 'Haftalık İlerleme',
      message: 'Bu hafta egzersizlerinizin %90\'ını tamamladınız. Harika!',
      time: 'Dün',
      icon: <Info size={20} color="hsl(158, 50%, 50%)" />,
      type: 'info'
    },
    {
      id: 3,
      title: 'Yeni Blog Yazısı',
      message: 'KOAH Hastaları İçin Beslenme Tavsiyeleri yayında.',
      time: '2 gün önce',
      icon: <Calendar size={20} color="hsl(158, 50%, 50%)" />,
      type: 'blog'
    }
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-row items-center px-6 py-4 border-b border-border">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <ChevronLeft size={24} color="hsl(158, 50%, 50%)" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-foreground">Bildirimler</Text>
      </View>

      <ScrollView className="flex-1 px-6 pt-6">
        {notifications.map((notif) => (
          <TouchableOpacity 
            key={notif.id}
            className="flex-row items-center bg-card p-4 rounded-2xl mb-4 shadow-sm border border-border"
          >
            <View className="bg-primary/10 p-3 rounded-xl mr-4">
              {notif.icon}
            </View>
            <View className="flex-1">
              <View className="flex-row justify-between items-center mb-1">
                <Text className="text-base font-bold text-foreground">{notif.title}</Text>
                <Text className="text-xs text-muted-foreground">{notif.time}</Text>
              </View>
              <Text className="text-sm text-muted-foreground leading-5">{notif.message}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <TouchableOpacity className="mt-8 mb-12">
          <Text className="text-primary text-center font-bold">Tümünü Okundu Olarak İşaretle</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
