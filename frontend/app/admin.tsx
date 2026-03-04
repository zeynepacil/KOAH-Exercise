import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Modal, TextInput, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
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
  Plus,
  X
} from 'lucide-react-native';

export default function AdminDashboard() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<'video' | 'blog' | 'user' | null>(null);

  const openModal = (type: 'video' | 'blog' | 'user') => {
    setModalType(type);
    setModalVisible(true);
  };

  const handleSave = () => {
    Alert.alert('Başarılı', 'İşlem başarıyla kaydedildi.');
    setModalVisible(false);
  };

  const ADMIN_CARDS = [
    {
      title: 'Yeni Video Ekle',
      description: 'Egzersiz videoları ekle',
      icon: <Video size={24} color="hsl(158, 50%, 50%)" />,
      color: 'bg-primary/10',
      onPress: () => openModal('video')
    },
    {
      title: 'Yeni Blog Yazısı Ekle',
      description: 'Bilgilendirme içerikleri',
      icon: <FilePlus size={24} color="hsl(158, 50%, 50%)" />,
      color: 'bg-secondary/50',
      onPress: () => openModal('blog')
    },
    {
      title: 'Yeni Kullanıcı Ekle',
      description: 'Hasta kaydı oluştur',
      icon: <UserPlus size={24} color="hsl(158, 50%, 50%)" />,
      color: 'bg-primary/10',
      onPress: () => openModal('user')
    },
    {
      title: 'Talepleri Listele',
      description: 'Destek ve randevu talepleri',
      icon: <ClipboardList size={24} color="hsl(158, 50%, 50%)" />,
      color: 'bg-secondary/50',
      onPress: () => router.push('/admin-requests')
    }
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4 border-b border-border">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => router.back()} className="mr-4">
            <ChevronLeft size={24} color="hsl(158, 50%, 50%)" />
          </TouchableOpacity>
          <View>
            <Text className="text-2xl font-bold text-foreground">Yönetim Paneli</Text>
            <Text className="text-muted-foreground">Sistem Kontrol Merkezi</Text>
          </View>
        </View>
        <View className="flex-row gap-4">
          <TouchableOpacity onPress={() => router.push('/notifications')} className="p-2 rounded-full bg-secondary/30">
            <Bell size={20} color="hsl(158, 50%, 50%)" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/profile')} className="p-2 rounded-full bg-secondary/30">
            <User size={20} color="hsl(158, 50%, 50%)" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-6 pt-6" showsVerticalScrollIndicator={false}>
        {/* Quick Stats */}
        <View className="flex-row gap-4 mb-8">
          <View className="flex-1 bg-primary/10 p-5 rounded-[24px] border border-primary/20">
            <Text className="text-primary font-bold text-lg">124</Text>
            <Text className="text-muted-foreground text-[10px] uppercase font-bold tracking-wider">Aktif Hasta</Text>
          </View>
          <View className="flex-1 bg-secondary/50 p-5 rounded-[24px] border border-border">
            <Text className="text-foreground font-bold text-lg">45</Text>
            <Text className="text-muted-foreground text-[10px] uppercase font-bold tracking-wider">Bugünkü Egzersiz</Text>
          </View>
        </View>

        {/* Dashboard Grid */}
        <Text className="text-lg font-bold text-foreground mb-4 px-2">Hızlı İşlemler</Text>
        <View className="flex-row flex-wrap gap-4 mb-8">
          {ADMIN_CARDS.map((card, index) => (
            <TouchableOpacity
              key={index}
              style={{ width: '47%' }}
              onPress={card.onPress}
              className={`${card.color} p-6 rounded-[28px] shadow-sm border border-primary/5`}
            >
              <View className="bg-white/90 p-3 rounded-2xl self-start mb-4 shadow-sm">
                {card.icon}
              </View>
              <Text className="text-lg font-bold text-foreground mb-1 leading-tight">{card.title}</Text>
              <Text className="text-xs text-muted-foreground mb-4">{card.description}</Text>
              <View className="bg-primary/20 p-2 rounded-full self-end">
                <Plus size={16} color="hsl(158, 50%, 50%)" />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Recent Activity */}
        <View className="bg-card p-6 rounded-[28px] mb-12 shadow-sm border border-border">
          <View className="flex-row items-center justify-between mb-6">
            <Text className="text-lg font-bold text-foreground">Son İstekler</Text>
            <TouchableOpacity onPress={() => router.push('/admin-requests')}>
              <Text className="text-primary font-bold">Tümünü Gör</Text>
            </TouchableOpacity>
          </View>

          {[1, 2, 3].map((item) => (
            <TouchableOpacity 
              key={item} 
              onPress={() => router.push(`/admin-request-detail/${item}`)}
              className="flex-row items-center py-4 border-b border-border/50 last:border-0"
            >
              <View className="w-10 h-10 rounded-full bg-secondary items-center justify-center mr-4">
                <User size={20} color="hsl(158, 50%, 50%)" />
              </View>
              <View className="flex-1">
                <Text className="font-bold text-foreground">Ahmet Yılmaz</Text>
                <Text className="text-xs text-muted-foreground">Video İzleme Hatası Talebi</Text>
              </View>
              <Text className="text-[10px] text-muted-foreground mr-3">14:20</Text>
              <ChevronRight size={16} color="hsl(158, 50%, 50%)" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Forms Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-end bg-black/50">
          <View className="bg-white rounded-t-[32px] p-6 pb-12">
            <View className="flex-row justify-between items-center mb-6">
              <Text className="text-xl font-bold text-foreground">
                {modalType === 'video' && 'Yeni Video Ekle'}
                {modalType === 'blog' && 'Yeni Blog Yazısı Ekle'}
                {modalType === 'user' && 'Yeni Kullanıcı Ekle'}
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(false)} className="p-2 bg-secondary rounded-full">
                <X size={20} color="hsl(158, 50%, 50%)" />
              </TouchableOpacity>
            </View>

            <ScrollView>
              {modalType === 'video' && (
                <View className="gap-4">
                  <View>
                    <Text className="text-sm font-bold text-muted-foreground mb-2">Video Başlığı</Text>
                    <TextInput className="bg-secondary p-4 rounded-2xl border border-border" placeholder="Örn: Derin Nefes Tekniği" />
                  </View>
                  <View>
                    <Text className="text-sm font-bold text-muted-foreground mb-2">Süre</Text>
                    <TextInput className="bg-secondary p-4 rounded-2xl border border-border" placeholder="Örn: 5 Dakika" />
                  </View>
                  <View>
                    <Text className="text-sm font-bold text-muted-foreground mb-2">Açıklama</Text>
                    <TextInput className="bg-secondary p-4 rounded-2xl border border-border h-32" multiline placeholder="Egzersiz detayları..." />
                  </View>
                </View>
              )}

              {modalType === 'blog' && (
                <View className="gap-4">
                  <View>
                    <Text className="text-sm font-bold text-muted-foreground mb-2">Blog Başlığı</Text>
                    <TextInput className="bg-secondary p-4 rounded-2xl border border-border" placeholder="Örn: KOAH ve Beslenme" />
                  </View>
                  <View>
                    <Text className="text-sm font-bold text-muted-foreground mb-2">İçerik</Text>
                    <TextInput className="bg-secondary p-4 rounded-2xl border border-border h-48" multiline placeholder="Yazı içeriği..." />
                  </View>
                </View>
              )}

              {modalType === 'user' && (
                <View className="gap-4">
                  <View>
                    <Text className="text-sm font-bold text-muted-foreground mb-2">Ad Soyad</Text>
                    <TextInput className="bg-secondary p-4 rounded-2xl border border-border" placeholder="Örn: Mehmet Can" />
                  </View>
                  <View>
                    <Text className="text-sm font-bold text-muted-foreground mb-2">E-posta</Text>
                    <TextInput className="bg-secondary p-4 rounded-2xl border border-border" placeholder="mehmet@example.com" keyboardType="email-address" />
                  </View>
                </View>
              )}

              <TouchableOpacity 
                onPress={handleSave}
                className="bg-primary p-4 rounded-2xl mt-8 shadow-lg shadow-primary/30"
              >
                <Text className="text-white text-center font-bold text-lg">Kaydet</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
