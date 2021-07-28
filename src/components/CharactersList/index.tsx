import { useEffect, useState, KeyboardEvent } from 'react';
import { FaSearch } from 'react-icons/fa';
import { time, publicKey, hash} from '../../services/authorization';
import { Pagination } from './component/Pagination';
import { ModalComponent } from './component/Modal';
import { CharactersInterface } from './component/types';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Fade } from 'react-reveal';
import api from '../../services/api';

import { 
    Container, 
    List, 
    ListHeader, 
    ListContainer,
    CardContainer, 
    NoResults,
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
    const [loading, setLoading] = useState(false);
    const [noResults, setNoResults] = useState(false);

    const getCharactersEndpoint = `/v1/public/characters?limit=24&offset=${pageOffest}0&ts=${time}&apikey=${publicKey}&hash=${hash}`;
    const searchCharactersEndpoint = `/v1/public/characters?limit=24&offset=${pageOffest}0&${search ? `nameStartsWith=${search}` : ''}&ts=${time}&apikey=${publicKey}&hash=${hash}`;

    useEffect(() => {
        const getCharacters = async () => {
            try {
                setLoading(true);
                const res = await api.get(getCharactersEndpoint);
                    setCharacters(res.data.data.results);
                    setTotalCharacters(res.data.data.total);
                    setLoading(false);
            } catch (error) {
                console.log(error.response?.data?.message || error.toString());
                setLoading(false);
            }
        }
        getCharacters();  
    }, [pageOffest, getCharactersEndpoint]);

    function openModal(character: CharactersInterface) {
        setIsOpen(true);
        setCharacterDetails(character);
    }
    
    function closeModal() {
        setIsOpen(false);
    }

     async function handleSearch() {
         try {
            setLoading(true);
            const res = await api.get(searchCharactersEndpoint);
            if(res.data.data.results.length !== 0) {
                setCharacters(res.data.data.results);
                setTotalCharacters(res.data.data.total);
                setLoading(false);
                setNoResults(false);
            } else {
                setNoResults(true);
            }
         } catch (error) {
            console.log(error.response?.data?.message || error.toString());
            setLoading(false);
         }
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    function renderList() {
        if(!loading) {
            return (
                <ListContainer>
                    {characters.map((character) => (
                        <CardContainer key={character.id} onClick={() => openModal(character)}>
                            <Card>
                                <div className="title" />
                                <p>MOVIES</p>
                                <img 
                                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
                                    alt="Personagem"
                                />
                            </Card>
                            <CardFooter>
                                <p>{character.name}</p>
                            </CardFooter>
                        </CardContainer>
                        ))}
                </ListContainer>)
            } else if(noResults) {
                return (
                    <NoResults>Nenhum resultado encontrado</NoResults>
                 );
            } else {
                return (
                    <SkeletonTheme color="#222" highlightColor="red">
                        <div style={{marginTop: '30px'}}>
                        <Skeleton count={10} duration={2} height={10} />
                        </div>
                    </SkeletonTheme>)
        }
}

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
                {renderList()}
                {!noResults ? (
                 <Pagination 
                    totalCharacters={totalCharacters} 
                    characterPerPage={characters.length}
                    setPageOffest={setPageOffest}
                 />) : ''}
            </List>
            <ModalComponent 
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                characterDetails={characterDetails}
            />
        </Container>
    )
}
