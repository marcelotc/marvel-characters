import { useEffect, useState, KeyboardEvent } from 'react';
import { FaSearch } from 'react-icons/fa';
import { time, publicKey, hash} from '../../services/authorization';
import { Pagination } from './component/Pagination';
import { ModalComponent } from './component/Modal';
import { CharactersInterface } from './component/types';
import api from '../../services/api';

import { 
    Container, 
    List, 
    ListHeader, 
    ListContainer,
    CardContainer, 
    Card, 
    CardFooter, 
    SearchInput } from './style';

export function CharactersList() {
    const [characters, setCharacters] = useState<CharactersInterface[]>([]);
    const [totalCharacters, setTotalCharacters] = useState(0);
    const [pageOffest, setPageOffest] = useState(0);
    const [search, setSearch] = useState('');
    const [modalIsOpen, setIsOpen] = useState(false);
    const [characterDetails, setCharacterDetails] = useState<CharactersInterface>();

    const getCharactersEndpoint = `/v1/public/characters?limit=24&offset=${pageOffest}0&ts=${time}&apikey=${publicKey}&hash=${hash}`;
    const searchCharactersEndpoint = `/v1/public/characters?limit=24&offset=${pageOffest}0&${search ? `nameStartsWith=${search}` : ''}&ts=${time}&apikey=${publicKey}&hash=${hash}`;

    useEffect(() => {
        const getCharacters = async () => {
            try {
                const res = await api.get(getCharactersEndpoint);
                    setCharacters(res.data.data.results);
                    setTotalCharacters(res.data.data.total);
            } catch (error) {
                console.log(error.response?.data?.message || error.toString());
            }
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

     async function handleSearch() {
         try {
            const res = await api.get(searchCharactersEndpoint);
            if(res.data.data.results.length !== 0) {
                setCharacters(res.data.data.results);
                setTotalCharacters(res.data.data.total);
            }
         } catch (error) {
            console.log(error.response?.data?.message || error.toString());
         }
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <Container>
            <List>
                <ListHeader>
                    <h1>LISTA DE PERSONAGENS DA MARVEL</h1>
                    <SearchInput>
                        <input 
                            placeholder="Procurar personagem por nome..." 
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <FaSearch onClick={() => handleSearch()} />
                    </SearchInput>
                </ListHeader>
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
