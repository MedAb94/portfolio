<template>
    <div>
        <v-container>
            <div class="hero">
                <v-row class="text-center" align="center">
                    <v-col cols="12" md="6" sm="12" order="12" order-md="1" class="text-md-left">
                        <div class="my-8">
                            <popup-call/>
                            <v-btn
                                    class="mx-2"
                                    href="https://github.com/medab94"
                                    target="_blank"
                                    fab
                                    color="deep-purple accent-4"
                            >
                                <v-icon color="white" x-large>mdi-github</v-icon>
                            </v-btn>
                            <v-btn
                                    class="mx-2"
                                    href="https://www.linkedin.com/in/medab-vall-8b2475152/"
                                    target="_blank"
                                    fab
                                    color="deep-purple accent-4"
                            >
                                <v-icon color="white" x-large>mdi-linkedin</v-icon>
                            </v-btn>
                        </div>
                        <h1 class="font-weight-bold">
                            I'm <span color="deep-purple accent-4" id="typed"></span>
                        </h1>
                        <p class="my-8">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                            ipsum nesciunt voluptatum ex assumenda maiores ducimus, iure
                            veritatis vitae enim sed labore incidunt dolor praesentium.
                            Distinctio vero rerum debitis eaque?
                        </p>
                        <div>
                            <v-row>
                                <v-col cols="12" md="6" sm="12">
                                    <router-link
                                            :to="{ name: 'Contact' }"
                                            tag="a"
                                            class="default-orange-btn"
                                    >
                                        Hire Me
                                        <v-icon color="white" class="ml-3">mdi-thumb-up</v-icon>
                                    </router-link>
                                </v-col>
                                <v-col cols="12" md="6" sm="12" class="text-right d-none d-md-flex ">
                                    <v-btn color="#ff5000"
                                           class="mx-auto test pa-12"
                                           @click="$vuetify.goTo('#about', options)"
                                    >
                                        <v-icon x-large color="white">mdi-chevron-double-down</v-icon>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6" sm="12" order="1" order-md="12">
                        <v-img src="../assets/hero.png"/>
                    </v-col>

                </v-row>
            </div>

            <div class="about" id="about">
                <v-row>
                    <v-col sm="12" md="6" class="about-img-wrap">
                        <v-img src="../assets/about/about.png"/>
                    </v-col>
                    <v-col sm="12" md="6">
                        <h2>
                            Hi, I'm Mohamed Abdellahi, my clients call me Medab. nice to
                            e-meet you.
                        </h2>
                        <p class="mt-5">
                            Young Mauritanian programmer, aged 26, specialist in IT
                            development, interested in artificial intelligence, Automation,
                            intelligent solutions for companies... <br/>
                            Dynamic who learns quickly and adapts very quickly to any work
                            environment. Serious, curious, pragmatic and persevering.
                        </p>
                        <div>
                            <ul class="about-list">
                                <li>
                                    <span class="list-item-title">Name</span>
                                    <span class="list-item-value">Medab Vall</span>
                                </li>
                                <li>
                                    <span class="list-item-title">Country</span>
                                    <span class="list-item-value">Mauritania</span>
                                </li>
                                <li>
                                    <span class="list-item-title">Age</span>
                                    <span class="list-item-value">26</span>
                                </li>
                                <li>
                                    <span class="list-item-title">Email</span>
                                    <span class="list-item-value">medab.vall@gmail.com</span>
                                </li>
                                <li>
                                    <span class="list-item-title">Univercity</span>
                                    <span class="list-item-value">
                                        Higher Institute of Accounting and Business Administration
                                    </span
                                    >
                                </li>
                                <li>
                                    <span class="list-item-title">Phone</span>
                                    <span class="list-item-value">+222 43 20 40 60</span>
                                </li>
                                <li>
                                    <span class="list-item-title">Familial Status</span>
                                    <span class="list-item-value">Single</span>
                                </li>
                            </ul>
                            <div>
                                <a href="/cv-en.pdf"
                                   target="_blank"
                                   class="default-orange-btn ma-8"
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </div>

            <div class="services">
                <v-row>
                    <v-col cols="12" class="mt-8">
                        <h1 class="text-center" id="scroll">Things I do...</h1>
                    </v-col>
                    <v-col
                            class="d-flex align-stretch"
                            cols="12"
                            xs="12"
                            sm="6"
                            md="4"
                            v-for="(s, index) in services"
                            :key="index"
                    >
                        <v-hover v-slot:default="{ hover }">
                            <v-card :elevation="hover ? 12 : 2" outlined>
                                <v-img :src="require('../assets/'+s.img)"
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
                                  <span v-for="(e, index) in s.text2" :key="index">
                                      {{ index > 0 ? ", " : "" }}{{ e }}
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

    var Typed = require("typed.js");
    export default {
        name: "Home",
        components: {
            PopupCall,
        },
        data() {
            return {
                services: [
                    {
                        img: "designer.svg",
                        title: "Design",
                        text:
                            "I value simple content structure, clean design patterns, and thoughtful interactions.",
                        title2: "Tools I use",
                        text2: ["Photoshop", "Illustrator", "XD"],
                    },
                    {
                        img: "developer.svg",
                        title: "Development",
                        text:
                            "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
                        title2: "Languages I speak",
                        text2: ["Python", "PHP", "JavaScript", "Java"],
                    },

                    {
                        img: "content.png",
                        title: "Content creation",
                        text:
                            "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
                        title2: "Subjects I cover",
                        text2: ["Resume", "Business plan", "Cover letter"],
                    },
                    {
                        img: "business.png",
                        title: "business facilitation",
                        text:
                            "As a business facilitator, I help people in a business to reach an outcome or decision for which everyone will take responsibility and be fully committed. I provide a structure to a process enabling cooperative decision-making.",
                    },
                    {
                        img: "marketing.png",
                        title: "Marketing",
                        text:
                            "I create promotions and programs aimed at influencing public health in a positive manner. The emphasis in social marketing is based on consumer wants and needs to dictate the direction of the marketing campaign.",
                    },
                    {
                        img: "seo.png",
                        title: "SEO Optimization",
                        text:
                            "We Offer Great Prices On High Quality Services. Average Customer Ratings of 4.8 Out Of 5. Free Consultation.",
                    },
                ],
            };
        },
        methods: {},
        // created() {
        //     var options = {
        //         strings: ["Web Designer", "Web Developer", "UI/UX Designer"],
        //         typeSpeed: 80,
        //         backSpeed: 40,
        //         loop: true,
        //     };
        //     var typed = new Typed('#typed', options);
        //
        // },
    };
</script>

<style scoped lang="scss">
    #typed {
        color: #6200ea;
    }

    .hero {
        min-height: 100vh;
    }
        .default-orange-btn {
            color: #fff;
            font-weight: 500;
            overflow: hidden;
            position: relative;
            border-radius: 5px;
            padding: 15px 30px;
            display: inline-block;
            text-transform: capitalize;
            background: #6200ea;
            -webkit-transition: all 0.25s linear;
            transition: all 0.25s linear;
        }

        .default-orange-btn:hover {
            color: #fff;
            background: #7f2bf5;
            -webkit-animation: pulseOrange 1s 1 linear;
            animation: pulseOrange 1s 1 linear;
        }


    .about {
        @media only screen and (min-width: 600px) {
        }

        .about-img-wrap {
            border-left: solid 6px #6200ea;
            border-radius: 10px;
            box-shadow: 0 23px 49px 0 rgba(0, 0, 0, 0.1);
        }

        .about-list li:not(last-child) {
            margin-bottom: 10px;
            width: 100%;
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

    .test {
        left: 50% !important;
        height: 60px;
        width: 60px;
        border-radius: 50%;
        -webkit-transition: all 0.25s linear;
        transition: all 0.25s linear;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        -webkit-box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.08);
        box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.08);
    }

    .test:hover {
        color: #fff !important;
        background: #e64800 !important;
        -webkit-animation: pulseOrange 1s 1 linear !important;
        animation: pulseOrange 1s 1 linear !important;
    }
</style>
