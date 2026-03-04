import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { ChevronLeft, User, Clock, CheckCircle2, XCircle } from 'lucide-react-native';

export default function AdminRequestsScreen() {
  const router = useRouter();

  const requests = [
    { id: 1, user: 'Ahmet Yılmaz', type: 'Video Talebi', status: 'pending', date: '2 saat önce' },
    { id: 2, user: 'Ayşe Demir', type: 'Destek Talebi', status: 'completed', date: '5 saat önce' },
    { id: 3, user: 'Mehmet Kaya', type: 'Yeni Kayıt', status: 'pending', date: '1 gün önce' },
    { id: 4, user: 'Fatma Aksoy', type: 'Video Talebi', status: 'pending', date: '2 gün önce' },
    { id: 5, user: 'Can Özkan', type: 'Destek Talebi', status: 'completed', date: '3 gün önce' },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle2 size={20} color="hsl(158, 50%, 50%)" />;
      case 'pending': return <Clock size={20} color="#D97706" />;
      default: return <XCircle size={20} color="#EF4444" />;
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-row items-center px-6 py-4 border-b border-border">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <ChevronLeft size={24} color="hsl(158, 50%, 50%)" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-foreground">Tüm Talepler</Text>
      </View>

      <ScrollView className="flex-1 px-6 pt-6">
        {requests.map((req) => (
          <TouchableOpacity 
            key={req.id}
            onPress={() => router.push(`/admin-request-detail/${req.id}`)}
            className="bg-card p-4 rounded-2xl mb-4 shadow-sm border border-border flex-row items-center justify-between"
          >
            <View className="flex-row items-center flex-1">
              <View className="bg-primary/10 p-3 rounded-full mr-4">
                <User size={20} color="hsl(158, 50%, 50%)" />
              </View>
              <View className="flex-1">
                <Text className="font-bold text-foreground">{req.user}</Text>
                <Text className="text-xs text-muted-foreground">{req.type} • {req.date}</Text>
              </View>
            </View>
            <View className="flex-row items-center">
              <View className={`px-2 py-1 rounded-full mr-2 ${req.status === 'completed' ? 'bg-primary/10' : 'bg-amber-100'}`}>
                <Text className={`text-[10px] font-bold ${req.status === 'completed' ? 'text-primary' : 'text-amber-700'}`}>
                  {req.status === 'completed' ? 'TAMAMLANDI' : 'BEKLEMEDE'}
                </Text>
              </View>
              {getStatusIcon(req.status)}
            </View>
          </TouchableOpacity>
        ))}
        <View className="h-10" />
      </ScrollView>
    </SafeAreaView>
  );
}
