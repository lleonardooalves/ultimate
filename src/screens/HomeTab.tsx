import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

import {
  ButtonAdd,
  ButtonCart,
  ButtonCategoryContainer,
  ButtonFavorites,
  ButtonFavoritesOne,
  ButtonFilter,
  Card,
  CardContainerTwo,
  CardOne,
  CardOneContainer,
  CardOneImage,
  Container,
  Header,
  HeaderText,
  ImageB,
  LabelFilter,
  ProfileImage,
  TextButtonAdd,
  TextCardOne,
  TextContainer,
  TextOne,
} from "../styles/homeTabStyles";
import { useCart } from "../contexts/cartContext";
import { useFav } from "../contexts/favoritesContext";
import axios from "axios";

const profile = require("../images/profile.png");

function HomeTab() {
  interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    category: string;
    categoryId: string;
    image: string;
  }
  interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    category: string;
    categoryId: string;
    image: string;
  }

  const navigation = useNavigation();
  const { addToCart } = useCart();
  const { addToFav } = useFav();
  const route = useRoute();

  const [mostPopularData, setPopularData] = useState<Product[]>([]);
  const [itemsData, setItemsData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredItems, setFilteredItems] = useState<Product[]>([]);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredItems(itemsData);
    } else {
      const filtered = itemsData.filter(
        (item) => item.category === selectedCategory
      );
      console.log("selectedCategory:", selectedCategory);
      setFilteredItems(filtered);
      console.log("filteredItems:", filtered);
    }
  }, [selectedCategory, itemsData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://8jcox47hg2.execute-api.us-east-2.amazonaws.com/dev/"
        );
        setPopularData(response.data.body.data.mostPopular);
        setItemsData(response.data.body.data.items);
        setFilteredItems(response.data.body.data.items);
        setIsLoading(false);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchData();
  }, []);

  function navigateDetailsData(item: Product) {
    navigation.navigate("Details", { item });
  }

  function handleAddToCart(item: Product) {
    addToCart(item);
  }

  function handleAddToFavs(item: Product) {
    addToFav(item);
  }

  return (
    <Container>
      <Header>
        <HeaderText>Hi,Leonardo</HeaderText>
        <ProfileImage source={profile} />
      </Header>
      {isLoading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#418b64" />
          <Text>Loading...</Text>
        </View>
      ) : (
        <>
          <TextOne>Most popular</TextOne>
          <FlatList
            data={mostPopularData}
            horizontal={true}
            renderItem={({ item }) => (
              <CardOneContainer
                onPress={() => navigateDetailsData(item)}
                style={{ elevation: 4 }}
              >
                <CardOne>
                  <CardOneImage source={{ uri: item.image }} />
                  <ButtonFavoritesOne onPress={() => handleAddToFavs(item)}>
                    <Icon name="favorite-border" size={16} />
                  </ButtonFavoritesOne>
                  <TextCardOne>
                    <View>
                      <Text>{item.title}</Text>
                      <Text>{`$${item.price}`}</Text>
                    </View>

                    <View>
                      <ButtonAdd onPress={() => handleAddToCart(item)}>
                        <TextButtonAdd>Add to Cart</TextButtonAdd>
                      </ButtonAdd>
                    </View>
                  </TextCardOne>
                </CardOne>
              </CardOneContainer>
            )}
            keyExtractor={(item) => item.id}
          />

          <ButtonCategoryContainer>
            <ButtonFilter
              onPress={() => setSelectedCategory("all")}
              isActive={selectedCategory === "all"}
            >
              <LabelFilter isActive={selectedCategory === "all"}>
                All
              </LabelFilter>
            </ButtonFilter>
            <ButtonFilter
              onPress={() => setSelectedCategory("Indoor")}
              isActive={selectedCategory === "indoor"}
            >
              <LabelFilter isActive={selectedCategory === "Indoor"}>
                Indoor
              </LabelFilter>
            </ButtonFilter>
            <ButtonFilter
              onPress={() => setSelectedCategory("Outdoor")}
              isActive={selectedCategory === "outdoor"}
            >
              <LabelFilter isActive={selectedCategory === "Outdoor"}>
                Outdoor
              </LabelFilter>
            </ButtonFilter>
          </ButtonCategoryContainer>

          <FlatList
            data={filteredItems}
            horizontal={false}
            renderItem={({ item }) => (
              <CardContainerTwo onPress={() => navigateDetailsData(item)}>
                <Card style={{ elevation: 4 }}>
                  <ImageB source={{ uri: item.image }} />
                  <ButtonFavorites onPress={() => handleAddToFavs(item)}>
                    <Icon name="favorite-border" size={16} />
                  </ButtonFavorites>
                  <TextContainer>
                    <View>
                      <Text>{item.title}</Text>
                      <Text>{`$${item.price}`}</Text>
                    </View>
                    <ButtonCart onPress={() => handleAddToCart(item)}>
                      <Icon name="shopping-bag" size={16} color={"#fff"} />
                    </ButtonCart>
                  </TextContainer>
                </Card>
              </CardContainerTwo>
            )}
            keyExtractor={(item) => item.id}
          />
        </>
      )}
    </Container>
  );
}

export default HomeTab;
