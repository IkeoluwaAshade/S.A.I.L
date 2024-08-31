import React, { useState, useEffect } from 'react'
import { useTheme } from './globalTheme/ThemeContext'
import styled from 'styled-components'
import axios from 'axios'
import { BsToggle2On, BsToggle2Off } from 'react-icons/bs';
import { IoRainy } from 'react-icons/io5'


const WeatherApp = () => {
    const [cityName, setCityName] = useState('');
    const [weather, setWeather] = useState(null);
    const [query, setQuery] = useState('London');
    const {theme, toggleTheme} = useTheme();


    const getWeatherData = async () => {
        const apiKey = 'c2612685640758e8a78af676f8179ea5';
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`;

        try {
            const res = await axios.get(URL);
            setWeather(res.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            alert('City not found. Please enter valid city name.');
            setWeather(null);
        }
    };

    useEffect(() => {
        getWeatherData();
    }, [query]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(cityName);
    };

    const currentDate = new Date().toLocaleDateString
    (undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    

  return (
    <Container>
        <Wrapper>
            <InputDiv>
                <input 
                    type='search'
                    placeholder='Enter your City'
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}    
                />
                <button onClick={handleSubmit}>Search</button>
                <Theme onClick={toggleTheme}>
                    {theme === 'light' ? <BsToggle2Off size={25} /> : <BsToggle2On size={25} />}
                    <Tooltip>{theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'} </Tooltip>
                </Theme>
            </InputDiv>

            {weather && (
                <Card>
                    <Country>{weather.sys.country}</Country>
                    <City>{weather.name}</City>
                    <MainDate>{currentDate}</MainDate>
                    <Cond>
                        <IoRainy />
                    <span>{weather.weather[0].description}</span>
                    </Cond>
                    <WeatherReading>
                        <span>{Math.round(weather.main.temp)}</span>
                        <label htmlFor="">ºC</label>
                    </WeatherReading>
                </Card>
                
            )}
        </Wrapper>
    </Container>
  )
}

export default WeatherApp

const Container = styled.div`
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const InputDiv = styled.div`
    margin-bottom: 20px;

    input {
        height: 40px;
        width: 300px;
        padding-left: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        outline: none;
    }

    button {
        height: 40px;
        width: 100px;
        margin-left: 10px;
        border: none;
        border-radius: 5px;
        background-color: #007bff;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s;
    

        &:hover {
            background-color: #0056b3;
        }
    }
`

const Theme = styled.button`
    background: ${(props) => props.theme.background};
    background: ${(props) => props.theme.color};
    margin-left: 10px;
    cursor: pointer;
`

const Tooltip = styled.div`
  visibility: hidden;
  background-color: aqua;
  color: #000;
  text-align: center;
  font-size: small;
  font-weight: 500;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  top: 40px;
  width: max-content;
  opacity: 0;
  transition: opacity 0.3s;
  white-space: nowrap;
`

const Card = styled.div`
    width: 300px;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    color: #fff;

    @media (max-width: 500px) {
        width: 90%;
    }
`

const Country = styled.div`
    font-size: 1.25rem;
    font-weight: bold;
`

const City = styled.div`
    font-size: 2.25rem;
    font-weight: 300;
`
const MainDate = styled.div`
    font-weight: 500;
    margin: 20px 0;
`
const Cond = styled.div`
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        margin-left: 10px;
        text-transform: capitalize;
    }
`
const WeatherReading = styled.div`
    font-size: 3rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;

    label {
        margin-left: 5px;
        font-size: 1.5rem;
        font-weight: normal;
    }
`