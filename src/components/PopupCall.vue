<template>
    <v-dialog
            v-model="dialog"
            width="500"
    >


        <template v-slot:activator="{ on, attrs }">
            <v-btn
                    fab
                    color="deep-purple accent-4"
                    v-bind="attrs"
                    v-on="on"
            >
                <v-icon x-large color="white">mdi-phone</v-icon>
            </v-btn>
        </template>

        <v-card>
            <v-card-title class="headline deep-purple accent-4 white--text">
                Contact me
            </v-card-title>

            <v-card-text align="center" class="pt-5">
                <v-btn
                        class="mx-2"
                        fab
                        color="#25D366"
                        href="https://api.whatsapp.com/send?phone=22243204060&text=Hello%20world%F0%9F%98%8D"
                >
                    <v-icon color="white">mdi-whatsapp</v-icon>
                </v-btn>
                <v-btn
                        class="mx-2"
                        fab
                        color="green"
                        href="tel:+22243204060"
                >
                    <v-icon color="white">mdi-cellphone-iphone</v-icon>
                </v-btn>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                        color="primary"
                        text
                        @click="dialog = false"
                >
                    Cancel
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

</template>

<script>
    export default {
        name: "PopupCall",
        data() {
            return {
                dialog: false,
            }
        },
    }
</script>

<style scoped>
    .c {
        color: #003000;
    }
</style>