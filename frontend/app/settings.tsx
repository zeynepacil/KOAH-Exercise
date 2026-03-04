import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { useRouter } from 'expo-router';
import { ChevronLeft, Bell, Lock, CircleHelp, ShieldCheck, ChevronRight, LayoutDashboard } from 'lucide-react-native';
import { useState } from 'react';

export default function SettingsScreen() {
  const router = useRouter();
  const [notifications, setNotifications] = useState(true);
  const [reminders, setReminders] = useState(true);

  const settingItems = [
    { id: 1, title: 'Güvenlik', icon: <Lock size={20} color="#94A3B8" /> },
    { id: 2, title: 'Yardım & Destek', icon: <CircleHelp size={20} color="#94A3B8" /> },
    { id: 3, title: 'Gizlilik Politikası', icon: <ShieldCheck size={20} color="#94A3B8" /> },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-row items-center px-6 py-4 border-b border-border">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <ChevronLeft size={24} color="hsl(158, 50%, 50%)" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-foreground">Ayarlar</Text>
      </View>

      <ScrollView className="flex-1 px-6 pt-6">
        <Text className="text-lg font-bold text-foreground mb-4">Bildirim Ayarları</Text>
        <View className="bg-card p-6 rounded-[24px] mb-8 shadow-sm border border-border">
          <View className="flex-row items-center justify-between mb-6">
            <View className="flex-row items-center">
              <Bell size={20} color="#94A3B8" className="mr-4" />
              <Text className="font-semibold text-foreground">Anlık Bildirimler</Text>
            </View>
            <Switch 
              value={notifications} 
              onValueChange={setNotifications}
              trackColor={{ false: '#CBD5E1', true: 'hsl(158, 50%, 50%)' }}
            />
          </View>
          
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Bell size={20} color="#94A3B8" className="mr-4" />
              <Text className="font-semibold text-foreground">Egzersiz Hatırlatıcıları</Text>
            </View>
            <Switch 
              value={reminders} 
              onValueChange={setReminders}
              trackColor={{ false: '#CBD5E1', true: 'hsl(158, 50%, 50%)' }}
            />
          </View>
        </View>

        <Text className="text-lg font-bold text-foreground mb-4">Uygulama</Text>
        <View className="bg-card p-6 rounded-[24px] mb-8 shadow-sm border border-border">
          {settingItems.map((item) => (
            <TouchableOpacity 
              key={item.id}
              className="flex-row items-center justify-between py-4 border-b border-border last:border-b-0"
            >
              <View className="flex-row items-center">
                <View className="mr-4">{item.icon}</View>
                <Text className="font-semibold text-foreground">{item.title}</Text>
              </View>
              <ChevronRight size={20} color="#94A3B8" />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity 
          onPress={() => router.push('/admin')}
          className="flex-row items-center justify-between p-6 bg-primary/10 rounded-[24px] border border-primary/20 mb-12"
        >
          <View className="flex-row items-center">
            <LayoutDashboard size={20} color="hsl(158, 50%, 50%)" className="mr-4" />
            <Text className="font-bold text-primary">Yönetici Paneli</Text>
          </View>
          <ChevronRight size={20} color="hsl(158, 50%, 50%)" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
