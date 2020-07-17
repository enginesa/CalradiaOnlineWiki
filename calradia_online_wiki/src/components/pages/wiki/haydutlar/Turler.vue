<template>
    <div class="ozellik" id="hTurler">
        <div class="top">
            <h1>Türler</h1>
            <hr>
            <p>
                Calradia haritasına geçtiğinizde çeşitli bölgelerde yuvalanmış vahşi kurtları, çapulcuları, haydutları
                ve kaçakları görebilirsiniz. Bunlar çevrenin güvenliği tehdit eder. Bu grupları yok etmeniz karşılığında
                onur ve dinar kazanırsınız.
            </p>
        </div>
        <br>


        <div class="turler">
            <b-row md="12" class="text-center">
                <b-col md="6" v-for="(item,index) in haydutlar" :key="index">
                    <img :src="'https://calradiaonline.com/public/img/yumurtalar/haydut/'+item.id+'.png'">
                    <p>
                        <b class="textRed">{{item.name}}</b>
                        <br>
                        Öldürdüğünüz hayvan başına {{item.gold}} dinar <img
                            src="https://calradiaonline.com/public/img/genel_icon/altin.png" width="20" height="20">
                        ve {{item.honor}} onur <img
                            src="https://calradiaonline.com/public/img/genel_icon/onur.png" width="20" height="15">
                        kazanırsınız.
                        <br>
                        Güç: {{item.power}} <img
                            src="https://calradiaonline.com/public/img/insaat_icon/savunma.png" width="18" height="18">
                    </p>
                </b-col>


            </b-row>
            <br>
            <br>
            <p class="text-center textRed">Hızlı bir şekilde para ve onur kazanılabilir.</p>

        </div>


    </div>


</template>

<script>
    export default {

        data() {
            return {
                haydutlar: [
                    {id: 0, name: "Vahşi Hayvanlar", gold: 25, honor: 5, power: 25},
                    {id: 1, name: "Çapulcular", gold: 35, honor: 10, power: 35},
                    {id: 2, name: "Haydutlar", gold: 50, honor: 15, power: 55},
                    {id: 3, name: "Kaçaklar", gold: 75, honor: 25, power: 70},


                ]
            }
        }
    }
</script>

<style scoped>


    .turler > div > div > img {
        width: 70px;
        background-color: black;
        border-radius: 100%;
    }
</style>