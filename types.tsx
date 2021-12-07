import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Activity: undefined;
  Notification: undefined;
  Account: undefined;
};

export type HomeParamList = {
  Home: undefined;
  Search: undefined;
  Sameday: undefined;
};

export type ActivityParamList = {
  Activity: undefined;
};

export type HomeStackNavProps<T extends keyof HomeParamList> = {
  navigation: StackNavigationProp<HomeParamList, T>;
  route: RouteProp<HomeParamList, T>;
};
