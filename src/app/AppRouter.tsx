import App from "./App";
import AboutPage from "./AboutPage";
import { NavigationProvider, useNavigation } from "./navigation";
import { AppProviders } from "./providers";

function Routes() {
  const { pathname } = useNavigation();

  if (pathname === "/sobre") return <AboutPage />;
  return <App />;
}

export function AppRouter() {
  return (
    <AppProviders>
      <NavigationProvider>
        <Routes />
      </NavigationProvider>
    </AppProviders>
  );
}
