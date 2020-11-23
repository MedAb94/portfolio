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
        <h1 class="mb-5">
            <v-icon>mdi-certificate-outline</v-icon>
            Degrees
        </h1>
        <v-expansion-panels>
            <v-expansion-panel
                    v-for="(d, index) in degrees" :key="index"
            >
                <v-expansion-panel-header>
                    <v-row>
                        <v-col><strong>{{d.name }}</strong></v-col>
<!--                        <v-col>{{d.field }}</v-col>-->
                        <v-col>{{d.year }}</v-col>
                        <v-col>{{d.establishment }}</v-col>
                        <v-col>{{d.mention }}</v-col>
                    </v-row>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    {{d.description }}
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>

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
                        <v-col>{{d.year }}</v-col>
                        <v-col>{{d.field }}</v-col>
                    </v-row>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    {{d.description }}
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
        <h1 class="my-5">
            <v-icon>mdi-medal-outline</v-icon>
            Honors
        </h1>
        <v-expansion-panels>
            <v-expansion-panel
                    v-for="(d, index) in honors" :key="index"
            >
                <v-expansion-panel-header>
                    <v-row>
                        <v-col><strong>{{d.name }}</strong></v-col>
                        <v-col>{{d.year }}</v-col>
                        <v-col>{{d.field }}</v-col>
                    </v-row>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-col>{{d.description }}</v-col>

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
                        name: "Bachelor",
                        year: "2020",
                        field: "IT",
                        establishment: "ISCAE",
                        mention: "Good",
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    },
                    {
                        name: "BAC",
                        year: "2017",
                        field: "SCIENCES",
                        establishment: "Nimlane High School",
                        mention: "Good",
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    },
                    {
                        name: "BAC",
                        year: "2017",
                        field: "Literature",
                        establishment: "Toujounine 2 High School",
                        mention: "Acceptable",
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    },
                ],
                trainings: [
                    {
                        name: "3 months",
                        year: "2017",
                        field: "EVAD",
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    },
                    {
                        name: "3 months",
                        year: "Entrepreneurship",
                        field: "KOSMOS",
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    },
                ],
                honors: [
                    {
                        name: "Medal",
                        year: "2016",
                        field: "ARC - UEA",
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    },
                    {
                        name: "Medal",
                        year: "2016",
                        field: "ARC - UEA",
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    },
                ],
            };
        },
    };
</script>
