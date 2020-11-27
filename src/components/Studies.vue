<template>
    <v-container>
        <v-row align="center">
            <v-col cols="12" md="8">
                <h1 class="text-center mt-6">My school curriculum</h1>
                <p class="mb-6 text-justify">
                    I was Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
                    harum facere vitae perspiciatis libero, dolore a. Ipsum, autem!
                    Asperiores, architecto doloremque. Iusto reiciendis est sequi?
                    Sapiente eius doloremque saepe deleniti.
                </p>
                <p class="text-justify">
                    Interested in Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aut eius est,
                    maxime possimus quos sit. Accusantium, aliquid cupiditate facere iure laboriosam numquam omnis quasi
                    temporibus ut, velit veniam!
                </p>
            </v-col>
            <v-col cols="12" md="4">
                <v-img
                        :src="require('../assets/grad.png')"
                        class="my-3"
                        contain
                        height="350"
                />
            </v-col>
        </v-row>
        <!--        <h1 class="mb-5">-->
        <!--            <v-icon>mdi-certificate-outline</v-icon>-->
        <!--            Degrees-->
        <!--        </h1>-->
        <!--        <v-expansion-panels>-->
        <!--            <v-expansion-panel-->
        <!--                    v-for="(d, index) in degrees" :key="index"-->
        <!--            >-->
        <!--                <v-expansion-panel-header>-->
        <!--                    <v-row>-->
        <!--                        <v-col><strong>{{d.name }}</strong></v-col>-->
        <!--                        &lt;!&ndash;                        <v-col>{{d.field }}</v-col>&ndash;&gt;-->
        <!--                        <v-col>{{d.year }}</v-col>-->
        <!--                        <v-col>{{d.establishment }}</v-col>-->
        <!--                        <v-col>{{d.mention }}</v-col>-->
        <!--                    </v-row>-->
        <!--                </v-expansion-panel-header>-->
        <!--                <v-expansion-panel-content>-->
        <!--                    {{d.description }}-->
        <!--                </v-expansion-panel-content>-->
        <!--            </v-expansion-panel>-->
        <!--        </v-expansion-panels>-->
        <!--        -->
        <section id="experience">

            <div class="container">

                <!-- section title -->
                <h2 class="section-title wow fadeInUp">Experience</h2>

                <div class="spacer" data-height="60"></div>

                <div class="row">

                    <div class="col-md-6">

                        <!-- timeline wrapper -->
                        <div class="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">

                            <!-- timeline item -->
                            <div class="timeline-container wow fadeInUp" v-for="(d, index) in degrees" :key="index">
                                <div class="content">
                                    <span class="time">{{d.year}}</span>
                                    <h3 class="title">{{d.name}}</h3>
                                    <p>{{d.description.slice(0,100)}}</p>
                                </div>
                            </div>

                            <!-- main line -->
                            <span class="line"></span>
                        </div>

                    </div>

                    <div class="col-md-6">

                        <!-- responsive spacer -->
                        <div class="spacer d-md-none d-lg-none" data-height="30"></div>

                        <!-- timeline wrapper -->
                        <div class="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">

                            <!-- timeline item -->
                            <div class="timeline-container wow fadeInUp" v-for="(w, index) in works" :key="index">
                                <div class="content">
                                    <span class="time">{{w.year}}</span>
                                    <h3 class="title">{{w.name}}</h3>
                                    <p>{{w.description.slice(0,100 )}}</p>
                                </div>
                            </div>


                            <!-- main line -->
                            <span class="line"></span>

                        </div>

                    </div>

                </div>

            </div>

        </section>

        <h1 class="my-5">
            <v-icon>mdi-file-certificate-outline</v-icon>
            Trainings
        </h1>
        <v-expansion-panels>
            <v-expansion-panel
                    v-for="(d, index) in trainings" :key="index"
            >
                <v-expansion-panel-header>
                    <v-row>
                        <v-col><strong>{{d.name }}</strong></v-col>
                        <v-col v-if="!$vuetify.breakpoint.xsOnly">{{d.year }}</v-col>
                        <v-col>{{d.field }}</v-col>
                        <v-col>{{d.society }}</v-col>
                    </v-row>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    {{d.description }}
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>


    </v-container>
</template>
<script>
    export default {
        name: "Studies",
        data() {
            return {
                degrees: [
                    {
                        name: "Bachelor in IT Development",
                        year: "2017 - 2020",
                        field: "IT",
                        establishment: "ISCAE",
                        mention: "Good",
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    },
                    {
                        name: "Teaching CPC",
                        year: "2018 - 2020",
                        field: "Education",
                        establishment: "ENI - NKTT",
                        mention: "Good",
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    },
                    {
                        name: "Science Baccalaureate",
                        year: "2014 - 2017",
                        field: "SCIENCES",
                        establishment: "Nimlane High School",
                        mention: "Good",
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    },
                    {
                        name: "literary Baccalaureate",
                        year: "2013",
                        field: "Literature",
                        establishment: "Toujounine 2 High School",
                        mention: "Acceptable",
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    },
                    // {
                    //     name: "BEPC",
                    //     year: "2010 - 2013",
                    //     field: "Literature",
                    //     establishment: "Toujounine 2 High School",
                    //     mention: "Acceptable",
                    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    // },
                    // {
                    //     name: "CEC",
                    //     year: "2009 - 2010",
                    //     field: "Literature",
                    //     establishment: "Toujounine 2 High School",
                    //     mention: "Acceptable",
                    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    // },
                ],
                works: [
                    {
                        name: "Web Developer",
                        year: "2020 - Present",
                        field: "IT",
                        establishment: "SIDMAH",
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    },
                    {
                        name: "Freelancer",
                        year: "2018 - Present",
                        field: "IT",
                        establishment: "World",
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    },
                    {
                        name: "IT Generalist",
                        year: "2019 - 2020",
                        field: "IT",
                        establishment: "EVAD Services",
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    },
                    {
                        name: "Office manager",
                        year: "2017 - 2019",
                        field: "IT",
                        establishment: "EVAD Services",
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    },
                ],
                trainings: [
                    {
                        name: "4 months intern",
                        year: "2020",
                        field: "Web development",
                        society: "SIDMAH",
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    },
                    {
                        name: "2 months intern",
                        year: "2020",
                        field: "Project management",
                        society: "SSP SARL",
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    },
                    {
                        name: "One month intern",
                        year: "2019",
                        field: "Web Development",
                        society: "GTI International",
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    }, {
                        name: "Three months training",
                        year: "2018",
                        field: "Entrepreneurship",
                        society: "KOSMOS Innovation Center",
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    },
                ],
            };
        },
    };
</script>
<style scoped>

    /* === Timeline === */
    .timeline {
        position: relative;
    }

    .timeline .timeline-container {
        padding-left: 50px;
        margin-bottom: 50px;
        position: relative;
        background-color: inherit;
        width: 100%;
    }

    .timeline .timeline-container:last-of-type {
        margin-bottom: 0;
    }

    .timeline.edu .timeline-container::after {
        content: "";
        background: #fff;
        font-family: "simple-line-icons";
        font-size: 24px;
        color: #ff5000;
        position: absolute;
        left: 12px;
        margin-left: 10px;
        top: 0;
        z-index: 1;
    }

    .timeline.exp .timeline-container::after {
        content: "";
        background: #fff;
        font-family: "simple-line-icons";
        font-size: 24px;
        color: #ff5000;
        position: absolute;
        left: 12px;
        margin-left: 10px;
        top: 0;
        z-index: 1;
    }

    .timeline .content {
        position: relative;
    }

    .timeline .content .time {
        color: #8B88B1;
        font-size: 14px;
    }

    .timeline .content h3 {
        font-size: 20px;
        margin: 10px 0;
        text-shadow: -4px -4px 5px #fff9, 4px 4px 5px #0002;
    }

    .timeline .content p {
        margin: 0;
    }

    .timeline span.line {
        position: absolute;
        width: 1px;
        background-color: #ff5000;
        top: 30px;
        bottom: 30px;
        left: 34px;
    }

    .shadow-dark {
        box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9, 7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001, inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #0001, inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #0001;
    }
</style>
