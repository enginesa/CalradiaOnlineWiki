<template>
    <div class="ozellik" id="Bina-Sayilari">
        <div class="top">
            <h1>Bina Sayıları</h1>
            <hr>
            <p>Bu başlık altında bir köye kurabileceğiniz bir türde bina sayılarını öğrenebilirsiniz.
            </p>
        </div>
        <br>
        <div class="binalar">
            <b-row md="12" class="text-center">

                <b-col md="3" v-for="(item,index) in builds" :key="index">
                    <img :src="'https://calradiaonline.com/public/img/insaatlar/'+item.id+'.png'">
                    <p><b class="textRed">{{item.name}}</b> <br> {{item.count}}</p>
                </b-col>

            </b-row>
        </div>


        <p><b class="textRed">Not</b>: Bir alana sığacak değerlerden bağımsız olarak sistemde bulunuyor.</p>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                builds: [

                    {name: "Ev", id: "1", count: "25"},
                    {name: "Askeri Baraka", id: "18", count: "25"},
                    {name: "Pazaryeri", id: "19", count: "8"},
                    {name: "Han", id:"20", count: "12"},
                    {name: "Keşif Merkezi", id: "26", count: "Yükseltilebilir"},
                    {name: "Ticaret Merkezi", id: "28", count: "Yükseltilebilir"},
                    {name: "Oduncu", id: "3", count: "25"},
                    {name: "Taşçı", id: "4", count: "25"},
                    {name: "Demirci", id: "5", count: "25"},
                    {name: "Fırın", id: "6", count: "25"},
                    {name: "Zırhhane", id: "9", count: "10"},
                    {name: "Kılıçhane", id: "10", count: "10"},
                    {name: "Yayhane", id: "11", count: "10"},
                    {name: "Mızrakhane", id: "15", count: "10"},
                    {name: "Top Dökümhanesi", id: "25", count: "3"},
                    {name: "Çeşme", id: "7", count: "10"},
                    {name: "Heykel", id: "8", count: "10"},
                    {name: "Mabet Yeri", id: "24", count: "1"},

                ]
            }
        }
    }
</script>

<style scoped>

    .binalar img {
        width: 70px;
        height: 70px;
        object-fit: contain;
    }
</style>