import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { ChevronLeft, User, Mail, Phone, Calendar, LogOut } from 'lucide-react-native';

export default function ProfileScreen() {
  const router = useRouter();

  const userInfo = {
    name: 'Ahmet Yılmaz',
    email: 'ahmet.yilmaz@example.com',
    phone: '0555 123 45 67',
    age: 64,
    diagnosis: 'KOAH Evre 2',
    joinDate: '12 Ocak 2026'
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-row items-center px-6 py-4 border-b border-border">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <ChevronLeft size={24} color="hsl(158, 50%, 50%)" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-foreground">Profil</Text>
      </View>

      <ScrollView className="flex-1 px-6 pt-6">
        <View className="items-center mb-8">
          <View className="w-32 h-32 bg-primary/20 rounded-full justify-center items-center mb-4 border-4 border-primary/10">
            <User size={64} color="hsl(158, 50%, 50%)" />
          </View>
          <Text className="text-2xl font-bold text-foreground">{userInfo.name}</Text>
          <Text className="text-muted-foreground">{userInfo.diagnosis}</Text>
        </View>

        <View className="bg-card p-6 rounded-[24px] mb-8 shadow-sm border border-border">
          <Text className="text-lg font-bold text-foreground mb-4">Kişisel Bilgiler</Text>
          
          <View className="flex-row items-center mb-4">
            <Mail size={20} color="#94A3B8" className="mr-4" />
            <View>
              <Text className="text-xs text-muted-foreground">E-posta</Text>
              <Text className="font-semibold text-foreground">{userInfo.email}</Text>
            </View>
          </View>

          <View className="flex-row items-center mb-4">
            <Phone size={20} color="#94A3B8" className="mr-4" />
            <View>
              <Text className="text-xs text-muted-foreground">Telefon</Text>
              <Text className="font-semibold text-foreground">{userInfo.phone}</Text>
            </View>
          </View>

          <View className="flex-row items-center mb-4">
            <Calendar size={20} color="#94A3B8" className="mr-4" />
            <View>
              <Text className="text-xs text-muted-foreground">Katılım Tarihi</Text>
              <Text className="font-semibold text-foreground">{userInfo.joinDate}</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity className="flex-row items-center justify-center p-4 bg-destructive/10 rounded-2xl mb-12">
          <LogOut size={20} color="#EF4444" className="mr-2" />
          <Text className="text-destructive font-bold">Çıkış Yap</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
