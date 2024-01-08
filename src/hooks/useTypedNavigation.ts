import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  SignIn: undefined;
  // Add other routes here
};

export type Navigation = NativeStackNavigationProp<RootStackParamList>;

export function useTypedNavigation() {
  return useNavigation<Navigation>();
}