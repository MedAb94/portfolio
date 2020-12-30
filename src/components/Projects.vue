<template>
    <div>
        <v-container>
            <h1 class="text-center mt-6">Projects I made</h1>
            <p class="mb-6">

            </p>
            <div align="center">
                <moon-loader :loading="loading" :color="'blue'"></moon-loader>

            </div>
            <v-card class="my-2" v-for="project in projects" :key="project.data().id " :class="project.data().status">
                <v-card-text>
                    <v-row align="center">
                        <v-col cols="12" md="2" sm="2" xs="4">
                            <v-img
                                    :src="require('../assets/logo.png')"
                                    contain
                                    max-width="50px"
                            />
                        </v-col>
                        <v-col cols="12" md="3" sm="10" xs="8">
                            <h3 class="caption">Project name :</h3>
                            <p>
                                {{project.data().name}}
                            </p>
                            <h3 class="caption">Project Link :</h3>
                            <p>
                                <a :href="project.data().link" target="_blank">Visit link</a>
                            </p>
                        </v-col>
                        <v-col cols="12" md="5" sm="12" xs="12">
                            <h3 class="caption">Project Details :</h3>
                            <p>
                                {{project.data().description}}
                            </p>
                        </v-col>
                        <v-col md="2">
                            <h3 class="caption">Status</h3>
                            <div>
                                <v-chip :class="project.data().status">
                                    {{project.data().status}}
                                </v-chip>
                            </div>

                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>
<script>
    import db from '@/fb'
    import MoonLoader from 'vue-spinner/src/MoonLoader.vue'

    export default {
        name: "Projects",
        components: {
            MoonLoader
        },
        data() {
            return {
                projects: [],
                loading: false
            }
        },
        created() {
            this.loading = true
            db.collection('projects').orderBy("order").get().then(res => {
                this.loading = false
                console.log(res.docs)
                this.projects = res.docs
            }).catch(err => {
                console.log(err);
                this.loading = false
            })
        }
    };
</script>
<style>
    .v-chip.completed {
        background: blue !important;
        color: white !important;
        font-weight: bold;
    }

    .v-chip.current {
        background: orangered !important;
        color: white !important;
        font-weight: bold;
    }

    .v-chip.published {
        background: green !important;
        color: white !important;
        font-weight: bold;
    }

    .completed {
        border-left: solid 3px blue !important;
    }

    .current {
        border-left: solid 3px orangered !important;
    }

    .published {
        border-left: solid 3px green !important;
    }
</style>