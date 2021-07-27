import { useEffect, useState } from 'react';
import { time, publicKey, hash} from '../../services/authorization';
import api from '../../services/api';
import { Pagination } from './component/Pagination';

import { Container, List, ListContainer, CardContainer, Card, CardFooter } from './style';

interface CharactersInterface {
    id: string;
    name: string;
    thumbnail: {
      extension: string;
      path: string;
    }
  }

export function CharactersList() {
    const [characters, setCharacters] = useState<CharactersInterface[]>([]);
    const [totalCharacters, setTotalCharacters] = useState(0);
    const [pageOffest, setPageOffest] = useState(0);

    useEffect(() => {
        const getCharacters = async () => {
        const res = await api.get(`/v1/public/characters?limit=24&offset=${pageOffest}0&ts=${time}&apikey=${publicKey}&hash=${hash}`);
        setCharacters(res.data.data.results);
        setTotalCharacters(res.data.data.total);
        }
        getCharacters();  
    }, [pageOffest]);

    return (
        <Container>
            <List>
                <h1>LISTA DE PERSONAGENS DA MARVEL</h1>
                <ListContainer>
                    {characters.map((character) => (
                        <CardContainer key={character.id}>
                            <Card>
                                <div className="title" />
                                <p>MOVIES</p>
                                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
                            </Card>
                            <CardFooter>
                                <p>{character.name}</p>
                            </CardFooter>
                        </CardContainer>
                        ))}
                 </ListContainer>
                 <Pagination 
                    totalCharacters={totalCharacters} 
                    characterPerPage={characters.length}
                    setPageOffest={setPageOffest}
                 />
            </List>
        </Container>
    )
}
