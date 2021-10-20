import React from 'react'
import { useState } from 'react';
import { Container, Search, Logo, Wrapper, CarouselTitle, Carousel } from './styles'
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
// import Slider from 'react-slick';
import { Card, Map, Modal, RestaurantCard } from '../../components';



const Home = () => {

    const [inputValue, setInputValue] = useState('');
    const [modalOpened, setModalOpened] = useState(false);
    const [query, setQuery] = useState(null);

    // Configurações do Slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    };

    function handleKeypress(event) {
        if (event.key === 'Enter') {
            setQuery(inputValue);
        }
    }

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="logo do restaurante" />
                    <TextField
                        label='Pesquisar Retaurantes'
                        outlined
                        trailingIcon={<MaterialIcon role="button" icon="search" />}
                    ><Input
                            value={inputValue}
                            onKeyPress={handleKeypress}
                            onChange={(e) => setInputValue(e.target.value)} />
                    </TextField>
                    <CarouselTitle>Na sua Area</CarouselTitle>
                    <Carousel {...settings}>
                        <Card photo={restaurante} title="FOTOS TESTE" />
                        <Card photo={restaurante} title="FOTOS TESTE" />
                        <Card photo={restaurante} title="FOTOS TESTE" />
                        <Card photo={restaurante} title="FOTOS TESTE" />
                        <Card photo={restaurante} title="FOTOS TESTE" />
                        <Card photo={restaurante} title="FOTOS TESTE" />
                        <Card photo={restaurante} title="FOTOS TESTE" />
                        <Card photo={restaurante} title="FOTOS TESTE" />
                        <Card photo={restaurante} title="FOTOS TESTE" />
                        <Card photo={restaurante} title="FOTOS TESTE" />
                    </Carousel>
                </Search>
                <RestaurantCard>

                </RestaurantCard>
                <button onClick={() => setModalOpened(true)}>Abrir Modal</button>
            </Container>
            <Map query={query} />

            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />

        </Wrapper>
    );
}

export default Home;