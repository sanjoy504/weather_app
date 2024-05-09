import Image from "next/image";

function WeatherInfo({ weatherData }) {

    const { location, current } = weatherData;
    const { name, region } = location;
    const { condition, feelslike_c } = current

    return (
        <div className="w-full flex justify-center text-gray-700 p-10 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200">

            <div className="w-full max-w-screen-sm bg-white p-10 rounded-xl ring-8 ring-white ring-opacity-40">

                <div className="flex justify-between items-center gap-2">

                    <div className="flex flex-col">
                        <span className="text-6xl mobile:text-2xl font-bold">{feelslike_c}°C</span>
                        <span className="font-semibold mt-1 text-gray-500 text-xl mobile:text-sm">{name}, {region}</span>
                    </div>

                    <div className="flex flex-col">
                        <Image
                        className="block ml-auto mr-auto"
                            width={100}
                            height={100}
                            src={'https:' + condition.icon}
                            alt="weather condition icon"
                        />
                        <div className="text-xs font-bold text-center">{condition.text}</div>
                    </div>

                </div>

                {/** This is past weather history show i add only static because 
 * i cant get this from my api but its a arry i just loop ans show the pase 7 days data  **/}
                <div className="flex justify-between mt-12">

                    <div className="flex flex-col items-center">
                        <span className="font-semibold text-lg">35°C</span>
                        <svg className="h-10 w-10 fill-current text-gray-400 mt-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z" />
                        </svg>
                        <span className="font-semibold mt-1 text-sm">11:00</span>
                        <span className="text-xs font-semibold text-gray-400">AM</span>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default WeatherInfo;
