import {
  IonContent,
  IonHeader,
  IonLoading,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import "./Home.css";

const Home: React.FC = () => {
  const [state, setstate] = useState([] as any[]);
  const [loading, setLoading] = useState(false as boolean);
  const [loadingData, setLoadingData] = useState(5);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setLoadingData(loadingData+5)
    const response = await fetch(`https://dummyjson.com/products?limit=${loadingData}&skip=0`);
    const data = await response.json();
    setstate(data.products);
    setLoading(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Test LimeCommerce</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Test LimeCommerce</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonLoading
          cssClass="my-custom-class"
          isOpen={loading}
          onDidDismiss={() => setLoading(false)}
          message={"Please wait..."}
        />
        <Card data={state} LoadData={()=>fetchData()} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
