'use client'

import { useRef, useState } from 'react'
import axios from 'axios'
import dynamic from 'next/dynamic';
import LoadingSkleaton from './LoadingSkleaton';

const WeatherInfo = dynamic(() => import('./WeatherInfo'), { ssr: false });

function WeatherSearch() {

    const inputRef = useRef(null);

    const [isLoading, setIsLoading] = useState(false);
    const [weatherInfoData, setWeatherInfoData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const getWeatherInfo = async () => {

        const inputValue = inputRef.current.value

        try {

            if (inputValue?.trim() != '') {

                setIsLoading(true);
                setWeatherInfoData(null)
                const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=ccbdeda720fc4dadb5c93016240905&q=${inputValue}&aqi=yes`);

                const { location, current } = response.data || {};

                if (location && current) {
                    setWeatherInfoData(response.data)
                }
            }

        } catch (error) {
            console.log(error)

            if (error.response) {
                setErrorMessage(error.response.data.error?.message)
            }
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <>
            <div className="w-full h-auto flex justify-center px-3 my-10">
                <div className="sticky top-0">
                    <div className="relative">
                        <label htmlFor="Search" className="sr-only"> Search </label>

                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Type area name"
                            className="w-full md:min-w-96 rounded-md border border-gray-200 py-2.5 px-4 shadow-sm sm:text-xs"
                        />

                        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                            <button
                                onClick={getWeatherInfo}
                                type="button" className="text-gray-600 hover:text-gray-700">
                                <span className="sr-only">Search</span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    />
                                </svg>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
            {isLoading && (
                <LoadingSkleaton />
            )}
            {!isLoading && weatherInfoData ? (
                <WeatherInfo weatherData={weatherInfoData} />
            ) : (
                <>
                    {errorMessage && (
                        <h2 className="text-2xl mobile:text-base font-bold my-20 text-center">{errorMessage}</h2>
                    )}
                </>
            )}

        </>
    )
}

export default WeatherSearch
