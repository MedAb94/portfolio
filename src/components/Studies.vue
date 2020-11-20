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
        <h3>Degrees</h3>
        <div>
            <v-simple-table fixed-header>
                <template v-slot:default>
                    <thead>
                    <tr>
                        <th class="text-left">
                            Name
                        </th>
                        <th class="text-left">
                            Year
                        </th>
                        <th class="text-left">
                            Establishment
                        </th>
                        <th class="text-left">
                            Mention
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(d, index) in degrees" :key="index">
                        <td><strong>{{d.name }}</strong></td>
                        <td>{{d.year }}</td>
                        <td>{{d.establishment }}</td>
                        <td>{{d.mention }}</td>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </div>

        <h3>Trainings</h3>
        <v-simple-table fixed-header>
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-left">
                        Year
                    </th>
                    <th class="text-left">
                        Establishment
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="n in 3" :key="n">
                    <td>Licence</td>
                    <td>2020</td>
                    <td>ISCAE</td>
                </tr>
                </tbody>
            </template>
        </v-simple-table>
        <h3>Honors</h3>
        <v-simple-table fixed-header>
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-left">
                        Year
                    </th>
                    <th class="text-left">
                        Establishment
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="n in 3" :key="n">
                    <td>Licence</td>
                    <td>2020</td>
                    <td>ISCAE</td>
                </tr>
                </tbody>
            </template>
        </v-simple-table>
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
                        establishment: "ISCAE",
                        mention: "Good",
                    },
                ],
            };
        },
    };
</script>
