<template>
    <div class="ozellik" id="Hakkinda">
        <div class="top">
            <h1>Hakkında</h1>
            <hr>
            <p>Haneler, klanlardan oluşmuş güçlü siyasi yapılardır. Calradia Online'da haneler, "<b class="textRed">devlet/krallık</b>"
                işlevlerini üstlenmektedir. Bu yüzden klanlar bir haneye katılır ve güçlerini birleştirir. Hane lideri
                en çok desteği almış kişidir. Nüfuzlu ve şöhreti her tarafa yayılmış kişilerin lider olma şansı elbette
                daha yüksek.
            </p>
        </div>
        <h3 class="text-center">Haneler</h3>
        <br>
        <div class="haneler">
            <b-row md="12" class="text-center">
                <b-col md="3" v-for="(item,index) in haneler" :key="index">
                    <img :src="'https://calradiaonline.com/public//img/haneler/'+item.id+'.png'">
                    <p>Hane {{item.id}} <br><b class="textRed">{{item.name}}</b></p>
                </b-col>

            </b-row>
        </div>

        <h5>Özellikler</h5>
        <ul>
            <li>Haneler, savaş ve barışa karar verebilir. Klanlardan farkı ise savaş ilanının klana değil, haneye
                olmasıdır.
            </li>
            <li>Her hanenin kendi has bir rengi vardır ve haritadan uzaklaştıkça bir bölgeyi hangi hanenin yönettiğini
                kolaylıkla anlayabilirsiniz.
            </li>
            <li>Haneye bağlı klanlar ne kadar fazla mülk yönetirse hane de o kadar çok <b class="textRed">şan</b>
                kazanır.
            </li>
            <li>Haneden ayrılan klanlar 24 saat boyunca başka bir haneye katılamazlar.</li>
        </ul>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                haneler: [
                    {"id": 1 ,name:"Yurtaşlar"},
                    {"id": 2 ,name:"Cennetin Askerleri"},
                    {"id": 3 ,name:"Bozkırın Çocukları"},
                    {"id": 4 ,name:"Çiftçiler"},
                    {"id": 5 ,name:"Birlik"},
                    {"id": 6 ,name:"Aslan Yürekliler"},
                    {"id": 7 ,name:"Savaşçılar"},
                    {"id": 8 ,name:"Soylular"},
                    {"id": 9 ,name:"Kahramanlar"},
                    {"id": 10,name:"Süvariler"}
                ],
            }
        }
    }
</script>

<style scoped>

    .haneler img {
        width: 70px;
    }
</style>