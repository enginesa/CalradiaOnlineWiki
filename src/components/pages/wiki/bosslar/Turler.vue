<template>
    <div class="ozellik" id="bTurler">
        <div class="top">
            <h1>Türler</h1>
            <hr>
            <p>
                Calradia Online 1.1 Graveth Yaması ile oyuna "boss" dediğimiz yüklü miktar dinar ve onur kazandıran özel birimler eklendi.
            </p>
        </div>
        <br>


        <div class="turler">
            <b-row md="12" class="text-center">
                <b-col md="6" v-for="(item,index) in bosslar" :key="index">
                    <img :src="item.link">
                    <p>
                        <b class="textRed">{{item.name}}</b>
                        <br>
                        Savunma Gücü: {{item.power}} <img
                            src="https://calradiaonline.com/public/img/insaat_icon/savunma.png" width="18" height="18"><br>
                        Ödül: {{item.gold}} dinar <img
                            src="https://calradiaonline.com/public/img/genel_icon/altin.png" width="20" height="20">  ve
                        {{item.honor}} onur <img
                            src="https://calradiaonline.com/public/img/genel_icon/onur.png" width="20" height="15"> <br>
                        <b class="textRed">Bonus</b>: 5 adet Kral Ragnar'ın Sandığı çıkma ihtimali

                    </p>
                </b-col>



            </b-row>
            <br>
            <br>
            <p class="text-center">Calradia haritasında çıkma olasılıkları diğerlerine (kurtlar, çapulcular, haydutlar ve kaçaklar) göre daha düşük fakat çıkmayacağı anlamına gelmez.</p>



        </div>


    </div>

</template>

<script>
    export default {

        data() {
            return {
                bosslar: [
                    {id: 0, name: "Minotor", gold: 4500, honor: 1500, power: 3500,link:"https://media.discordapp.net/attachments/657921190936969217/671681916583411752/Patron_Boga.png"},
                    {id: 1, name: "Kong", gold: 7500, honor: 3000, power: 6000,link:"https://media.discordapp.net/attachments/657921190936969217/671681932324503562/Dev_Goril.png"},
                    {id: 2, name: "Kara Şövalye", gold: 10000 , honor: 5000, power: 7500, link:"https://media.discordapp.net/attachments/657921190936969217/671681951110922240/Kara_Sovalye.png"},


                ]
            }
        }
    }
</script>


<style scoped>


    .turler>div>div>img {
        width: 70px;
        background-color: black;
        border-radius: 100%;
    }
</style>