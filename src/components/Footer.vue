<template>
    <v-card
            flat
            tile
            width="100%"
            class="text-center"
            color="deep-purple accent-4"
    >
        <v-card-text>
            <v-row justify="center" v-if="this.$vuetify.breakpoint.xsOnly">
                <v-col cols="2" sm="2">
                    <v-btn class="mx-4" icon href="tel:+22243204060">
                        <v-icon color="white" >mdi-cellphone-iphone</v-icon>
                    </v-btn>
                </v-col>
                <v-col cols="2" sm="2">
                    <v-btn class="mx-4" icon href="mailto: medab.vall@gmail.com">
                        <v-icon color="white" x-small>mdi-email</v-icon>
                    </v-btn>
                </v-col>
                <v-col cols="2" sm="2">
                    <v-btn
                            class="mx-4"
                            icon
                            color="white"
                            href="https://www.linkedin.com/in/medab-vall-8b2475152/"
                            target="_blank"
                    >
                        <v-icon size="24px">mdi-linkedin</v-icon>
                    </v-btn>
                </v-col>
                <v-col cols="2" sm="2">
                    <v-btn
                            class="mx-4"
                            icon
                            color="white"
                            href="https://github.com/medab94"
                            target="_blank"
                    >
                        <v-icon size="24px">mdi-github</v-icon>
                    </v-btn>
                </v-col>
                <v-col cols="2" sm="2">
                    <v-btn
                            class="mx-4"
                            icon
                            color="white"
                            href="https://facebook.com/medab.vall"
                            target="_blank"
                    >
                        <v-icon size="24px">mdi-facebook</v-icon>
                    </v-btn>
                </v-col>
                <v-col cols="2" sm="2">
                    <v-btn
                            class="mx-4"
                            icon
                            color="white"
                            href="https://twitter.com/MedAb07"
                            target="_blank"
                    >
                        <v-icon size="24px">mdi-twitter</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            <div v-if="!this.$vuetify.breakpoint.xsOnly">
                <v-btn class="mx-4" icon href="tel:+22243204060">
                    <v-icon color="white" size="24px">mdi-cellphone-iphone</v-icon>
                </v-btn>

                <v-btn class="mx-4" icon href="mailto: medab.vall@gmail.com">
                    <v-icon color="white" size="24px">mdi-email</v-icon>
                </v-btn>
                <v-btn
                        class="mx-4"
                        icon
                        color="white"
                        href="https://www.linkedin.com/in/medab-vall-8b2475152/"
                        target="_blank"
                >
                    <v-icon size="24px">mdi-linkedin</v-icon>
                </v-btn>
                <v-btn
                        class="mx-4"
                        icon
                        color="white"
                        href="https://github.com/medab94"
                        target="_blank"
                >
                    <v-icon size="24px">mdi-github</v-icon>
                </v-btn>
                <v-btn
                        class="mx-4"
                        icon
                        color="white"
                        href="https://facebook.com/medab.vall"
                        target="_blank"
                >
                    <v-icon size="24px">mdi-facebook</v-icon>
                </v-btn>
                <v-btn
                        class="mx-4"
                        icon
                        color="white"
                        href="https://twitter.com/MedAb07"
                        target="_blank"
                >
                    <v-icon size="24px">mdi-twitter</v-icon>
                </v-btn>
            </div>


        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Medab</strong>
        </v-card-text>
    </v-card>
</template>
<script>
    export default {
        name: "AppFooter",
        data() {
            return {};
        },
    };
</script>
