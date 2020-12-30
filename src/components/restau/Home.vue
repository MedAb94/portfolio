<template>
    <div class="primary">
        <div class="jumbotron">
            <div class="container">
                <v-row>
                    <v-col>about</v-col>
                    <v-col>
                        <v-select
                                :items="items"
                                label="Standard"
                        />
                    </v-col>
                    <v-col>
                        Contact
                    </v-col>
                </v-row>
                <div>
                    <v-text-field
                            label="Prepend inner"
                            prepend-inner-icon="mdi-map-marker"
                    />
                </div>
            </div>
        </div>
        <v-carousel v-model="model">
            <v-carousel-item
                    v-for="(color, i) in colors"
                    :key="color"
            >
                <v-sheet
                        :color="color"
                        height="100%"
                        tile
                >
                    <v-row
                            class="fill-height"
                            align="center"
                            justify="center"
                    >
                        <div class="display-3">
                            Slide {{ i + 1 }}
                        </div>
                    </v-row>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
        <div class="text-center container">
            <h1>LAZARE'S CHICKEN BBQ HOUSE</h1>
            <div class="text-left">
                <v-img
                    :src="require('../../assets/grad.png')"
                    contain
                    height="350"
                />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
                model: 0,
                colors: [
                    'secondary',
                    'yellow darken-2',
                    'red',
                    'orange',
                ],
            }
        }
    }
</script>

<style scoped>
    .jumbotron {
        height: 30vh;
    }
</style>