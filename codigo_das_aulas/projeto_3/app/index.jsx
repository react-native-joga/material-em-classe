import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, View, Text, TextInput } from "react-native";
import PokemonCard from '../components/PokemonCard'
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { getPokemons } from "../api/pokemonServices";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Index() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  useEffect (()=> {
    const fetchPokemons = async () => {
      setLoading(true);
    const data = await getPokemons(300);
    if (Array.isArray(data)) {
      data.sort((a, b) => a.id - b.id);
      setAllPokemons(data); 
    }
    setLoading(false);
    }
    fetchPokemons();
  },[setAllPokemons, setLoading])

  useEffect(() => {
    if(searchQuery === ''){
      setFilteredPokemons(allPokemons)
    } else{
      const lowerCasedQuery = searchQuery.toLowerCase();
      const filtered = allPokemons.filter(pokemon => 
        pokemon.name.toLowerCase().includes(lowerCasedQuery) || 
        pokemon.id.toString() === lowerCasedQuery
      );
      setFilteredPokemons(filtered);
    }
  }, [searchQuery, allPokemons])

  if(loading){
    return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size='large' color='#dc0a2d'/>
    </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Pokédex</Text>
        <View style={styles.controlsContainer}>
          <View style={styles.searchShadowContainer}>
            <View style={styles.searchInputWrapper}>
              <Ionicons name="search" size={20} color="#919191" style={styles.searchIcon}/>
              <TextInput 
                style={styles.searchInput}
                placeholder="Procurar Pokémon"
                placeholderTextColor="#919191"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>
          </View>
        </View>
      </View>
      
      <View style={styles.listContainer}>
        <FlatList
          data={filteredPokemons}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <PokemonCard pokemon={item} onPress={() => console.log("Não deu tempo")}/>
          )}
          numColumns={2}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}  
        />
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  container: {
    flex:1,
    backgroundColor: "#dc0a2d",
    },
  header: {
    paddingTop: 50,
    paddingHorizontal:20,
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight:'bold',
    marginBottom: 10,
  },
  controlsContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom: 10,
  },
  searchShadowContainer:{
    flex:1,
    height:44,
    backgroundColor: "rgba(0,0,0,0.15)",
    borderRadius: 22,
    paddingTop: 2,
    paddingLeft: 1,
  },
  searchInputWrapper:{
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 22,
    paddingHorizontal: 10,
  },
  searchIcon:{
    marginRight: 10,
  },
  searchInput:{
    flex:1,
    height: 40,
    fontSize: 16,
  },
  listContainer:{
    flex:1, 
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  listContent:{
    padding: 30,
  }
})
