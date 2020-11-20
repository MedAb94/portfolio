<template>
    <div>
        <v-container>
            <div class="hero">
                <v-row class="text-center" align="center">
                    <v-col cols="12" md="8" sm="12" order="12" order-md="1">
                        <h3>
                            I do <span id="typed"></span>
                        </h3>
                        <div>
                            <popup-call/>
                            <v-btn
                                    class="mx-2"
                                    fab
                                    color="#ff5000"

                            >
                                <v-icon>mdi-github</v-icon>
                            </v-btn>
                            <v-btn
                                    class="mx-2"
                                    fab
                                    color="#ff5000"


                            >
                                <router-link :to="{ name: 'Contact' }" tag="span">
                                    <v-icon dark>
                                        mdi-pencil
                                    </v-icon>
                                </router-link>

                            </v-btn>
                        </div>
                    </v-col>
                    <v-col cols="12" md="4" sm="12" order="1" order-md="12">
                        <v-card flat
                                class="mx-auto"
                                max-width="400"
                        >
                            <v-img
                                    class="white--text align-end"
                                    :src="require('../assets/hero.png')"
                            >
                            </v-img>
                        </v-card>

                    </v-col>
                </v-row>
                <div></div>
            </div>

            <div class="about">
                <v-row>
                    <v-col sm="12" md="6">


                        <div >
                            <img src="../assets/about/about-img.jpg" alt="About image"
                                 class="img-fluid ">
                        </div>
                    </v-col>
                    <v-col sm="12" md="6">
                        <h1 data-aos="fade-right">
                            Hi, I'm Mohamed Abdellahi, my clients call me Medab. nice to
                            e-meet you.
                        </h1>
                        <p class="mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias blanditiis
                            consectetur eligendi, enim facilis fugiat harum incidunt iste perferendis quae ratione
                            recusandae rem saepe sequi ut voluptates voluptatibus! Minima.
                        </p>
                        <div>
                            <ul class="about-list">
                                <li>
                                    <span class="list-item-title">Name</span>
                                    <span class="list-item-value">Jack Barker</span>
                                </li>
                                <li>
                                    <span class="list-item-title">Country</span>
                                    <span class="list-item-value">U.S.A</span>
                                </li>
                                <li>
                                    <span class="list-item-title">Age</span>
                                    <span class="list-item-value">29</span>
                                </li>
                                <li>
                                    <span class="list-item-title">Email</span>
                                    <span class="list-item-value">example@example.com</span>
                                </li>
                                <li>
                                    <span class="list-item-title">Univercity</span>
                                    <span class="list-item-value">The New Scholl</span>
                                </li>
                                <li>
                                    <span class="list-item-title">Phone</span>
                                    <span class="list-item-value">+3 123 456 78 88</span>
                                </li>
                            </ul>
                        </div>
                    </v-col>
                </v-row>
            </div>

            <div class="services">
                <v-row>
                    <v-col cols="12">
                        <h1 class="text-center">Things I do</h1>
                    </v-col>
                    <v-col
                            cols="12"
                            xs="12"
                            sm="6"
                            md="4"
                            v-for="(s, index) in services"
                            :key="index"
                            data-aos="flip-left"
                    >
                        <v-hover v-slot:default="{ hover }">
                            <v-card :elevation="hover ? 12 : 2" outlined>
                                <v-img
                                        :src="require('../assets/' + s.img)"
                                        class="my-3"
                                        contain
                                        height="100"
                                />
                                <h3 class="text-center">{{ s.title }}</h3>
                                <v-card-text class="text-justify">
                                    {{ s.text }}
                                </v-card-text>
                                <h4 class="text-center">{{ s.title2 }}</h4>
                                <v-card-text class="text-center">
                  <span v-for="(e, index) in s.text2" :key="index"
                  >{{ index > 0 ? ", " : "" }}{{ e }}
                  </span>
                                </v-card-text>
                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>

<script>
    import PopupCall from "./PopupCall";
    var Typed = require('typed.js')
    export default {
        name: "Home",
        components: {
            PopupCall
        },
        data() {
            return {
                services: [
                    {
                        img: "designer.svg",
                        title: "Disigner",
                        text:
                            "I value simple content structure, clean design patterns, and thoughtful interactions.",
                        title2: "Tools I use",
                        text2: ["Photoshop", "Illustrator", "XD"],
                    },
                    {
                        img: "developer.svg",
                        title: "Developer",
                        text:
                            "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
                        title2: "Languages I speak",
                        text2: ["Python", "PHP", "JavaScript", "Java"],
                    },

                    {
                        img: "content.png",
                        title: "Content creator",
                        text:
                            "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
                        title2: "Subjects I cover",
                        text2: ["Resume", "Business plan", "Cover letter"],
                    },
                    {
                        img: "content.png",
                        title: "business facilitator",
                        text:
                            "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
                        title2: "Subjects I cover",
                        text2: ["Resume", "Business plan", "Cover letter"],
                    },
                    {
                        img: "content.png",
                        title: "Marketing",
                        text:
                            "It is a long established fact that a reader will be distracted by the readable content..",
                        title2: "Subjects I cover",
                        text2: ["Resume", "Business plan", "Cover letter"],
                    },
                    {
                        img: "content.png",
                        title: "Cms & E-Commercer",
                        text:
                            "It is a long established fact that a reader will be distracted by the readable content..",
                        title2: "Subjects I cover",
                        text2: ["Resume", "Business plan", "Cover letter"],
                    },
                ],
            };
        },
        methods: {},
        created() {
            var options = {
                strings: ["Web Apps", "Mobile Apps", "UI/UX Design"],
                typeSpeed: 80,
                backSpeed: 40,
                loop: true,
            };
            var typed = new Typed('#typed', options);

        },
    };
</script>

<style scoped lang="scss">
    .hero {
    }

    #typed {
        color: #ff5000;
    }

    .about {
        @media only screen and (min-width: 600px) {
            .about-img-wrap {
                z-index: 82;
                position: relative;
            }

            .about-img-wrap:before {
                content: "";
                top: 50%;
                left: -30px;
                width: 80%;
                height: 80%;
                z-index: -77;
                position: absolute;
                background: #ff5000;
                border-radius: 10px;
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
                -webkit-box-shadow: 0 6px 12px 0 rgba(255, 80, 0, 0.4);
                box-shadow: 0 6px 12px 0 rgba(255, 80, 0, 0.4);
            }

            .about-img-wrap img {
                border-radius: 10px;
                -webkit-box-shadow: 0 23px 49px 0 rgba(0, 0, 0, 0.1);
                box-shadow: 0 23px 49px 0 rgba(0, 0, 0, 0.1);
                max-height: 77vh;
            }
        }


        .about-inner .about-list {
            margin-bottom: 30px;
        }

        .about-list li {
            margin-bottom: 10px;
            width: 100%;
        }

        .about-list li:last-child {
            margin-bottom: 0;
        }

        .about-list li .list-item-title {
            color: #000;
            font-weight: 700;
        }

        .about-list li .list-item-title:after {
            content: ":";
            display: inline-block;
            margin-right: 10px;
            margin-left: 10px;
        }

    }
</style>
