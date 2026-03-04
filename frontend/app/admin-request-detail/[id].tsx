import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ChevronLeft, User, Mail, Calendar, MessageSquare, CheckCircle2 } from 'lucide-react-native';

export default function AdminRequestDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const request = {
    id,
    user: 'Ahmet Yılmaz',
    email: 'ahmet.yilmaz@example.com',
    type: 'Video İzleme Hatası',
    date: '14 Mart 2026, 14:20',
    description: 'Nefes egzersizi videosu yüklenirken takılıyor ve uygulama kapanıyor. İnternet bağlantım stabil olmasına rağmen sorun devam ediyor.',
    status: 'pending'
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-row items-center px-6 py-4 border-b border-border">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <ChevronLeft size={24} color="hsl(158, 50%, 50%)" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-foreground">Talep Detayı</Text>
      </View>

      <ScrollView className="flex-1 px-6 pt-6">
        <View className="bg-card p-6 rounded-[24px] mb-8 shadow-sm border border-border">
          <View className="flex-row items-center mb-6">
            <View className="w-16 h-16 bg-primary/10 rounded-full justify-center items-center mr-4">
              <User size={32} color="hsl(158, 50%, 50%)" />
            </View>
            <View>
              <Text className="text-xl font-bold text-foreground">{request.user}</Text>
              <Text className="text-muted-foreground">{request.email}</Text>
            </View>
          </View>

          <View className="h-px bg-border mb-6" />

          <View className="gap-6">
            <View>
              <Text className="text-xs font-bold text-muted-foreground uppercase mb-1">Talep Tipi</Text>
              <Text className="text-base font-semibold text-foreground">{request.type}</Text>
            </View>

            <View>
              <Text className="text-xs font-bold text-muted-foreground uppercase mb-1">Tarih</Text>
              <View className="flex-row items-center">
                <Calendar size={16} color="#94A3B8" className="mr-2" />
                <Text className="text-base text-foreground">{request.date}</Text>
              </View>
            </View>

            <View>
              <Text className="text-xs font-bold text-muted-foreground uppercase mb-1">Açıklama</Text>
              <View className="flex-row items-start">
                <MessageSquare size={16} color="#94A3B8" className="mr-2 mt-1" />
                <Text className="text-base text-foreground flex-1 leading-6">{request.description}</Text>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity 
          className="bg-primary p-4 rounded-2xl flex-row items-center justify-center mb-12 shadow-lg shadow-primary/30"
          onPress={() => {
            alert('Talep tamamlandı olarak işaretlendi.');
            router.back();
          }}
        >
          <CheckCircle2 size={20} color="white" className="mr-2" />
          <Text className="text-white font-bold text-lg">Tamamlandı Olarak İşaretle</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
