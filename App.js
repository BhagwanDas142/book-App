import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./src/screen/login";
import { Register } from "./src/screen/register";
import { Books } from "./src/screen/books";
import { BookDetails } from "./src/screen/bookDetails";
import { Profile } from "./src/screen/profile";
import { Submit } from "./src/screen/submit";
export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <stack.Screen name="register" component={Register} />
        <stack.Screen name="submit" component={Submit} />

        <stack.Screen name="login" component={Login} />
        <stack.Screen name="books" component={Books} />

        <stack.Screen name="bookDetails" component={BookDetails} />
        <stack.Screen name="profile" component={Profile} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
