<template>
    <div>
        <v-container>
            <h1 class="text-center mt-6">Projects I made</h1>
            <p class="mb-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat harum
                facere vitae perspiciatis libero, dolore a. Ipsum, autem! Asperiores,
                architecto doloremque. Iusto reiciendis est sequi? Sapiente eius
                doloremque saepe deleniti.
            </p>
            <v-card class="my-2" v-for="project in projects" :key="project.data().id " :class="project.data().status">
                <v-card-text>
                    <v-row align="center" >
                        <v-col cols="12" md="2" sm="2" xs="4">
                            <v-img
                                    :src="require('../assets/logo.png')"
                                    contain
                                    max-width="50px"
                            />
                        </v-col>
                        <v-col :key="n" cols="12" md="3" sm="10" xs="8">
                            <h3 class="caption">Project name :</h3>
                            <p>
                                {{project.data().name}}
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

    export default {
        name: "Projects",
        data() {
            return {
                projects: []
            }
        },
        created() {
            db.collection('projects').get().then(res => {
                console.log(res.docs)
                this.projects = res.docs
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
    .completed {
        border-left: solid 3px blue !important;

    }

    .current {
        border-left: solid 3px orangered !important;

    }
</style>