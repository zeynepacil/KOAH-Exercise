import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';

export default function BilgilendirmeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-background">
      {/* Header */}
      <View className="flex-row items-center px-6 py-4">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <ChevronLeft size={24} color="#4A7C59" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-foreground">Bilgilendirme Formu</Text>
      </View>

      <ScrollView className="flex-1 px-6 pt-4" showsVerticalScrollIndicator={false}>
        <View className="bg-card p-6 rounded-[24px] mb-6 shadow-sm border border-border">
          <Text className="text-primary font-bold text-lg mb-3">Çalışmanın Adı</Text>
          <Text className="text-muted-foreground leading-6 mb-6">
            KOAH Hastaları İçin Ev Tabanlı Pulmoner Rehabilitasyon Egzersiz Programı.
          </Text>

          <Text className="text-primary font-bold text-lg mb-3">Çalışmanın Konusu ve Amacı</Text>
          <Text className="text-muted-foreground leading-6">
            Bu uygulama, KOAH (Kronik Obstrüktif Akciğer Hastalığı) tanısı almış bireylerin solunum kapasitelerini artırmak, fiziksel aktivitelerini desteklemek ve yaşam kalitelerini iyileştirmek amacıyla tasarlanmıştır.{"\n\n"}
            Program kapsamında sunulan nefes egzersizleri ve ısınma hareketleri, uzman fizyoterapistler tarafından önerilen standart protokoller temel alınarak hazırlanmıştır.{"\n\n"}
            Egzersizlerin düzenli yapılması, nefes darlığı hissini azaltmaya ve günlük aktivitelerde daha az yorulmaya yardımcı olur.
          </Text>
        </View>

        <View className="bg-primary/5 p-6 rounded-[24px] mb-8 border border-primary/10">
          <Text className="text-primary font-bold mb-2">Önemli Not</Text>
          <Text className="text-muted-foreground italic leading-5">
            Egzersizlere başlamadan önce lütfen doktorunuza danışınız. Çalışma sırasında kendinizi kötü hissederseniz derhal durun.
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => router.push('/exercise-list')}
          className="bg-primary p-5 rounded-[20px] mb-10 items-center shadow-md shadow-primary/20"
        >
          <Text className="text-white font-bold text-lg">Devam Et</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
