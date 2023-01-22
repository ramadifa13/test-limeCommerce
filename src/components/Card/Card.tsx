import {
  IonBadge,
  IonBreadcrumb,
  IonBreadcrumbs,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonCol,
  IonGrid,
  IonIcon,
  IonItem,
  IonRow,
  IonSlide,
  IonSlides,
  IonSpinner,
  IonText,
} from "@ionic/react";
import ReactStars from "react-rating-stars-component";
import { heart, heartOutline } from "ionicons/icons";
import { useState } from "react";
interface CardProps {
  data: any[];
  LoadData:any
}

const Card: React.FC<CardProps> = ({ data ,LoadData}) => {
  const slideOpts = {
    initialSlide: 1,
    speed: 400,
  };
  let [love, setLove] = useState(false);
  const secondColumnStart = Math.ceil(data.length / 2);
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
        {data.map((d,i) => (
            <IonCard key={i}>
              <IonSlides pager={true} options={slideOpts}>
                {d.images.map((dd: any) => (
                  <IonSlide>
                    <img style={{ width: "auto", height: "300px" }} src={dd} />
                  </IonSlide>
                ))}
              </IonSlides>
              <IonCardHeader>
                <IonCardTitle>
                  <IonRow class="ion-justify-content-between">
                    <IonCol size="10">
                      <IonText>{d.title}</IonText>
                    </IonCol>
                    <IonCol size="2">
                      <IonButton 
                      key={i}
                        fill="clear"
                        onClick={(d) => {
                          console.log(d)
                          // setLove(!love);
                        }}
                      >
                        <IonIcon
                          slot="icon-only"
                          icon={love ? heart : heartOutline}
                          style={{ color: "white" }}
                        ></IonIcon>
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </IonCardTitle>
                <IonCardSubtitle>
                  <IonRow>
                    <IonText>
                      {d.discountPercentage != 0 && (
                        <span
                          style={{ textDecoration: "line-through" }}
                        >{`$ ${d.price}`}</span>
                      )}
                      {` $ ${(
                        d.price -
                        (d.price * d.discountPercentage) / 100
                      ).toFixed(2)}`}
                    </IonText>
                  </IonRow>
                  <IonRow class="ion-justify-content-between">
                    <IonCol size="9">
                      <IonRow>
                        <IonText style={{ fontSize: 12, marginTop: 5 }}>
                          {`${d.rating}  `}
                        </IonText>
                        <ReactStars
                          size={15}
                          value={d.rating}
                          edit={false}
                          a11y={true}
                          isHalf={true}
                        />
                      </IonRow>
                    </IonCol>
                    <IonCol size="3">
                      <IonText style={{ fontSize: 10, marginTop: 5 }}>
                        {d.stock} Stock
                      </IonText>
                    </IonCol>
                  </IonRow>
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <IonRow>
                  <IonText
                    style={{ fontSize: "7pt" }}
                  >{`${d.category} / ${d.brand}`}</IonText>
                  <br />
                  <IonText>{d.description}</IonText>
                </IonRow>
                <IonRow></IonRow>
              </IonCardContent>
            </IonCard>
        ))}
        </IonCol>
      </IonRow>
        <IonButton shape="round" expand="full" onClick={LoadData}>Load More</IonButton>
    </IonGrid>
  );
};

export default Card;
