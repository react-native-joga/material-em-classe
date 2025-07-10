import { ImageBackground } from "expo-image";
import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";

const typeColors = {
    normal: "#A8A77A", fire: "#EE8130", water: "#6390F0",
    electric: "#F7D02C", grass: "#7AC74C", ice: "#96D9D6",
    fighting: "#C22E28", poison: "#A33EA1", ground: "#E2BF65",
    flying: "#A98FFF", psychic: "#F95587",
    bug: "#A6B91A", rock: "#B6A136", ghost: "#735797",
    dragon: "#6F35FC", dark: "#705746", steel: "#B7B7CE",
    fairy: "#D685AD",
}


const PokemonCard = ({pokemon, onPress}) => {
    const pokemonId = pokemon.id.toString().padStart(3, '0');
    const imageURL = pokemon.sprites.front_default;
    const cardColor = typeColors[pokemon.types[0].type.name];
    const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    return (
    <TouchableOpacity style={styles.cardContainer} activeOpacity={1}>
        <View style={[styles.card ,{backgroundColor: cardColor}]}>
        <ImageBackground 
        source={require('../assets/pokeballCard.png')}
        style={styles.backgroundImage}
        imageStyle = {{opacity: 0.1, resizeMode: 'contain', top: -10, left: -10}}
        >
            <Text style={styles.id}>#{pokemonId}</Text>
            <Text style={styles.name}>{pokemonName}</Text>
            <Image source={{uri: imageURL }} style={styles.pokeImage}/>
        </ImageBackground>
        </View>
    </TouchableOpacity>
    
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        flex:1/2,
        padding: 8,
    },
    card:{
        borderRadius: 15,
        padding: 10,
        overflow: "visible",
        elevation: 8,
        shadowColor: "#171717",
        shadowOffset: {width:0 , height: 4},
        shadowOpacity: 0.25,
        shadowRadius: 5,
    },
    id:{
        color: '#17171b',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'right'
    },
    backgroundImage:{
        width: '100%',
        height: 120, 
        borderRadius: 8,
        overflow: 'hidden'
    },
    name:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 2,
        paddingLeft: 5,
        textShadowColor: "rgba(0,0,0,0.6)",
        textShadowOffset: {width: 0, height:2},
        textShadowRadius: 2,
    },
    pokeImage:{
        position: 'absolute',
        width: 90,
        height: 90,
        bottom: -15,
        right: -10,
    },
})

export default PokemonCard;