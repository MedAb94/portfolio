<template>
    <v-container>
        <!--<v-card>-->
        <v-form v-model="valid">
            <v-row class="justify-center">
                <v-col md="6" sm="12" blue>
                    <div align="center" class="mb-5">
                        <h2>Happy to hear from you.</h2>

                    </div>
                    <div>
                        <v-text-field
                                outlined
                                v-model="name"
                                :rules="nameRules"
                                label="You name"
                                required
                        />
                    </div>

                    <div>
                        <v-text-field
                                outlined
                                v-model="email"
                                :rules="emailRules"
                                label="Your E-mail"
                                required
                        />
                    </div>
                    <div>
                        <v-textarea v-model="message"
                                    outlined
                                    label="Your message here..."
                                    auto-grow
                        />
                    </div>
                    <div>
                        <v-file-input
                                v-model="files"
                                color="deep-purple accent-4"
                                counter
                                label="Attachements"
                                multiple
                                placeholder="Select your files"
                                prepend-icon="mdi-paperclip"
                                outlined
                                :show-size="1000"
                        >
                            <template v-slot:selection="{ index, text }">
                                <v-chip
                                        v-if="index < 2"
                                        color="deep-purple accent-4"
                                        dark
                                        label
                                        small
                                >
                                    {{ text }}
                                </v-chip>

                                <span v-else-if="index === 2"
                                      class="overline grey--text text--darken-3 mx-2"
                                > +{{ files.length - 2 }} File(s)
                                </span>
                            </template>
                        </v-file-input>
                    </div>
                    <div>
                        <v-btn
                                block
                                color="deep-purple accent-4"
                                class="white--text"
                                elevation="2"
                                :loading="loading"
                                @click="sendMessage"
                        >
                            Send Message
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-form>
        <!--</v-card>-->
    </v-container>
</template>

<script>
    import db from '@/fb'
    import Swal from 'sweetalert2'

    export default {
        data() {
            return {
                valid: false,
                name: "",
                email: "",
                message: '',
                loading: false,
                files: [],
                nameRules: [
                    (v) => !!v || "Name is required",
                    (v) => v.length <= 10 || "Name must be less than 10 characters",
                ],
                emailRules: [
                    (v) => !!v || "E-mail is required",
                    (v) => /.+@.+/.test(v) || "E-mail must be valid",
                ],
            };
        },
        methods: {
            sendMessage() {
                this.loading = true;
                const message = {
                    name: this.name,
                    email: this.email,
                    message: this.message,
                    files: this.files
                };
                db.collection('messages').add(message).then(res => {
                    this.loading = false;
                    Swal.fire(
                        'Thank you!',
                        'I received your message successfully and I will come back to you shortly',
                        'success',
                    )
                })
            }
        },
        created() {

        }
    };
</script>
