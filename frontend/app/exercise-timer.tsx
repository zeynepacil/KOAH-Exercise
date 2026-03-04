import { View, Text, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ChevronLeft, Play, Pause, Square, CheckCircle2 } from 'lucide-react-native';
import { useState, useEffect } from 'react';

export default function ExerciseTimerScreen() {
  const router = useRouter();
  const { id, title } = useLocalSearchParams();
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes default
  const [isActive, setIsActive] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      setIsFinished(true);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStop = () => {
    Alert.alert(
      'Egzersizi Durdur',
      'Egzersizi bitirmek istediğinize emin misiniz?',
      [
        { text: 'Hayır', style: 'cancel' },
        { text: 'Evet', onPress: () => router.back() },
      ]
    );
  };

  if (isFinished) {
    return (
      <SafeAreaView className="flex-1 bg-background justify-center items-center px-6">
        <View className="bg-primary/10 p-10 rounded-full mb-8">
          <CheckCircle2 size={100} color="hsl(158, 50%, 50%)" />
        </View>
        <Text className="text-3xl font-bold text-foreground mb-2 text-center">Egzersiz tamamlandı</Text>
        <Text className="text-muted-foreground text-center mb-10 text-lg">
          Tebrikler! Bugünlük {title || 'bu egzersizi'} başarıyla bitirdiniz.
        </Text>
        <TouchableOpacity
          onPress={() => router.replace('/')}
          className="bg-primary px-10 py-4 rounded-full w-full"
        >
          <Text className="text-white text-center font-bold text-lg">Ana Sayfaya Dön</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-row items-center px-6 py-4 border-b border-border">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <ChevronLeft size={24} color="hsl(158, 50%, 50%)" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-foreground truncate flex-1">{title || 'Egzersiz'}</Text>
      </View>

      <View className="flex-1 justify-center items-center px-6">
        <View className="w-64 h-64 rounded-full border-[10px] border-primary/20 justify-center items-center mb-12">
           <Text className="text-6xl font-bold text-foreground tabular-nums">
            {formatTime(timeLeft)}
          </Text>
        </View>

        <View className="flex-row gap-8">
          <TouchableOpacity 
            onPress={() => setIsActive(!isActive)}
            className={`w-20 h-20 rounded-full flex justify-center items-center ${isActive ? 'bg-amber-100' : 'bg-primary'}`}
          >
            {isActive ? (
              <Pause size={32} color="#D97706" />
            ) : (
              <Play size={32} color="white" />
            )}
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={handleStop}
            className="w-20 h-20 rounded-full bg-destructive/10 flex justify-center items-center"
          >
            <Square size={32} color="#EF4444" fill="#EF4444" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="bg-secondary/50 p-6 rounded-[24px] mx-6 mb-12">
        <Text className="text-primary font-bold mb-2">Güvenlik Hatırlatması</Text>
        <Text className="text-foreground text-sm">
          Baş dönmesi veya aşırı nefes darlığı hissederseniz lütfen egzersizi hemen durdurun.
        </Text>
      </View>
    </SafeAreaView>
  );
}
