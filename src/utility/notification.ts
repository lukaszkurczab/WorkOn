import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

export async function createNotificationChannels() {
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('training', {
      name: 'Training Notifications',
      importance: Notifications.AndroidImportance.HIGH,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#00FF00',
    });

    await Notifications.setNotificationChannelAsync('chat', {
      name: 'Chat Notifications',
      importance: Notifications.AndroidImportance.DEFAULT,
      vibrationPattern: [0, 500, 500, 500],
      lightColor: '#0000FF',
    });
  }
}

export async function registerForPushNotificationsAsync() {
  let token: string | null = null;

  await createNotificationChannels();

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    alert('Nie udało się uzyskać tokenu do powiadomień push!');
    return null;
  }

  token = (await Notifications.getExpoPushTokenAsync()).data;
  return token;
}

interface UseNotificationProps {
  title: string;
  body: string;
  notificationId: string;
  channelId?: 'training' | 'chat';
  shouldShowAlert?: boolean;
  shouldPlaySound?: boolean;
  shouldSetBadge?: boolean;
  triggerTime?: number | null;
  data?: Record<string, any>;
}

export const useNotification = ({
  title,
  body,
  notificationId,
  channelId,
  shouldShowAlert = true,
  shouldPlaySound = true,
  shouldSetBadge = true,
  triggerTime = null,
  data = {},
}: UseNotificationProps) => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: shouldShowAlert,
      shouldPlaySound: shouldPlaySound,
      shouldSetBadge: shouldSetBadge,
    }),
  });

  Notifications.dismissNotificationAsync(notificationId);

  Notifications.scheduleNotificationAsync({
    content: {
      title: title,
      body: body,
      data: data,
    },
    identifier: notificationId,
    trigger: {
      seconds: triggerTime || 0,
      channelId,
    },
  });
};
