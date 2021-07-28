import { useEffect, useState } from 'react';
import { time, publicKey, hash} from '../../services/authorization';
import api from '../../services/api';
import { Pagination } from './component/Pagination';
import { ModalComponent } from './component/Modal';
import { CharactersInterface } from './component/types';

import { Container, List, ListContainer, CardContainer, Card, CardFooter } from './style';

export function CharactersList() {
    const [characters, setCharacters] = useState<CharactersInterface[]>([]);
    const [totalCharacters, setTotalCharacters] = useState(0);
    const [pageOffest, setPageOffest] = useState(0);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [characterDetails, setCharacterDetails] = useState<CharactersInterface>();

    useEffect(() => {
        const getCharacters = async () => {
        const res = await api.get(`/v1/public/characters?limit=24&offset=${pageOffest}0&ts=${time}&apikey=${publicKey}&hash=${hash}`);
        setCharacters(res.data.data.results);
        setTotalCharacters(res.data.data.total);
        }
        getCharacters();  
    }, [pageOffest]);

    function openModal(character: CharactersInterface) {
        setIsOpen(true);
        setCharacterDetails(character);
    }
    
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Container>
            <List>
                <h1>LISTA DE PERSONAGENS DA MARVEL</h1>
                <ListContainer>
                    {characters.map((character) => (
                        <CardContainer key={character.id} onClick={() => openModal(character)}>
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
            <ModalComponent 
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                characterDetails={characterDetails}
            />
        </Container>
    )
}
