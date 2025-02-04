import React from "react";
import { useTranslation } from "react-i18next";

import logo2 from "../assets/img/Logo/logo1.png";
import logo3 from "../assets/img/Logo/logo (1).svg";
import logo4 from "../assets/img/Logo/logo (1).png";
import logo5 from "../assets/img/Logo/logo2.png";
import logo6 from "../assets/img/Logo/lucky_poker.png";
import logo7 from "../assets/img/Logo/logo3.png";
import logo8 from "../assets/img/Logo/AUX logo/YGG's Logo/YGG's Logo White/Yggdrasil_Logo_RGB_white.png";

import logo10 from "../assets/img/Logo/logo (4).png";
import logo11 from "../assets/img/Logo/logo5.svg";
import logo12 from "../assets/img/Logo/logo (5).png";
import logo13 from "../assets/img/Logo/logo 6.png";
import logo14 from "../assets/img/Logo/logo (6).png";
import logo15 from "../assets/img/Logo/logo7.png";
import logo16 from "../assets/img/Logo/AUX logo/logo_horizontal_white.png";
import logo17 from "../assets/img/Logo/logo8.png";
import logo18 from "../assets/img/Logo/logo (8).png";
import logo19 from "../assets/img/Logo/logo9.png";
import logo20 from "../assets/img/Logo/Hacksaw Logo/Hacksaw_Logo_White.png";
import logo22 from "../assets/img/Logo/NLC logo/nolimitcity-assets-pack/nl_white.png";
import logo24 from "../assets/img/Logo/playngo.png";
import logo25 from "../assets/img/Logo/turbo.png";
import logo26 from "../assets/img/Logo/smartsoft.png";
import logo27 from "../assets/img/Logo/evoplay.svg";
import logo28 from "../assets/img/Logo/funta.png";
import logo29 from "../assets/img/Logo/peter.png";
import sexyBaccarat from "../assets/img/Logo/Parlaybay Logo/png/Parlaybay-white.png";
import evolution from "../assets/img/Logo/Relax Gaming Logo/Relax-Gaming-white.png";
import playngo from "../assets/img/Logo/Slotmill_Logo/slotmill-logo-all-white-one-line.png";
import mojos from "../assets/img/Logo/mojos.png";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useNavigate } from "react-router";

export const GameProvider = (props) => {
    const { t } = useTranslation();

    const navigation = useNavigate();

    const Logos = [
        {
            Logo: mojos,
            Url: "",
            platform: "7Mojos",
        },
        {
            Logo: logo24,
            Url: "",
            platform: "Play'n GO",
        },
        {
            Logo: logo27,
            Url: "",
            platform: "Evoplay",
        },
        {
            Logo: logo16,
            Url: "",
            platform: "AvatarUX",
        },
        {
            Logo: logo29,
            Url: "",
            platform: "Peter Sons",
        },
        {
            Logo: logo20,
            Url: "",
            platform: "Hacksaw Gaming",
        },
        {
            Logo: logo28,
            Url: "",
            platform: "FunTa Gaming",
        },
        {
            Logo: logo22,
            Url: "",
            platform: "Nolimit City",
        },
        {
            Logo: sexyBaccarat,
            Url: "",
            platform: "ParlayBay",
        },
        {
            Logo: evolution,
            Url: "",
            platform: "Relax Gaming",
        },
        {
            Logo: playngo,
            Url: "",
            platform: "Slotmill",
        },
        {
            Logo: logo8,
            Url: "",
            platform: "Yggdrasil Gaming",
        },
       
        {
            Logo: logo25,
            Url: "",
            platform: "Turbo Games (Asia)",
        },
        {
            Logo: logo26,
            Url: "",
            platform: "SmartSoft",
        },
       
       
       
       
       
    ];

    return (
        <div className="icons-wrapper md:mt-7 text-white">
            <div className="top flex items-center justify-between mb-6">
                <h1 className="flex items-center text-sm md:text-xl text-white font-bold">
                    {t("Providers")}
                </h1>
                {/* <a className='see-all' href='/'>{t("View All")}</a> */}
            </div>
            <div className="slider-area w-full">
                <Splide
                    className="mb-5 SliderAreaFirst"
                    options={{
                        gap: 15,
                        arrows: false,
                        pagination: false,
                        perPage: 8,
                        breakpoints: {
                            500: {
                                perPage: 3,
                                gap: 5,
                            },
                            770: {
                                perPage: 3,
                            },
                            970: {
                                perPage: 3,
                            },
                            1200: {
                                perPage: 4,
                            },
                            1400: {
                                perPage: 5,
                            },
                            1600: {
                                perPage: 6,
                            },
                        },
                    }}
                >
                    {Logos.map((item, index) => (
                        <SplideSlide
                            key={index}
                            onClick={() =>
                                navigation(`/ALL/${item.platform}`, {
                                    replace: true,
                                })
                            }
                            className="rounded-lg cursor-pointer"
                        >
                            <div
                                className={`card cursor-pointer ${
                                    props.direction
                                        ? "rounded-full"
                                        : "rounded-lg"
                                }`}
                            >
                                <div className="w-full h-[30px] py-6 md:h-[62px] overflow-hidden rounded-lg flex items-center bg-[var(--newBgProvider)]">
                                    <img
                                        key={index}
                                        src={item.Logo}
                                        alt="Logo"
                                        className="w-[80%] mx-auto"
                                    />
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
};
