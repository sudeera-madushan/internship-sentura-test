import { WeavyClient, WeavyProvider, Chat } from '@weavy/uikit-react';
import "@weavy/uikit-react/dist/css/weavy.css";

const weavyClient = new WeavyClient({
    url: "https://8ea71269743349ec9437d28d1cd0278f.weavy.io",
    tokenFactory: async (refresh) => "wys_adTKKp1VrXPVQGp1x5rgd16Rgw9f7A3e3HKF"
});

function App() {
    return (
        <div className="App">
            <WeavyProvider client={weavyClient}>
                <Chat uid="demochat" />
            </WeavyProvider>
        </div>
    )
}

export default App;
