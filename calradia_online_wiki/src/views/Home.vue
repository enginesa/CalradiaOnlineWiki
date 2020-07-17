<template>
    <section>
        <b-container fluid class="mainContainerFluid bg-dark">
            <b-container>
                <b-row>
                    <b-col md="9" class="leftSection">
                        <h1 class="textRed homeHeader">Calradia Online <span class="textOrange">Wiki</span></h1>
                        <p class="explain"><span>Calradia</span> evrenine size derinden bağlı bir köyün derebeyi olarak
                            başlayacaksınız.
                            Bu köyü iyi idare edin ve güçlü bir ekonomi oluşturun. <span>Ticaret</span> yaparak
                            hazinenizi doldurun.
                            <span>Dostluklar</span> yoluyla müttefikler edinin ve klanınızı kurun. <span>İhtişamlı derebeyliğinize</span>
                            sadık bir ordu yetiştirin
                            Çevrenizdeki mülkleri fethederek <span>imparatorluğunuzu</span> genişletin!</p>
                        <ul>
                            <li><img src="../assets/images/list_i.png" width="25">Köyünüzü kurun.</li>
                            <li><img src="../assets/images/list_i.png" width="25">Ekonominizi geliştirin.</li>
                            <li><img src="../assets/images/list_i.png" width="25">Ticaret yapın.</li>
                            <li><img src="../assets/images/list_i.png" width="25">Ordu kurun.</li>
                            <li><img src="../assets/images/list_i.png" width="25">Klan oluşturun.</li>
                            <li><img src="../assets/images/list_i.png" width="25">Bir haneye katılın.</li>
                            <li><img src="../assets/images/list_i.png" width="25">Calradia'yı fethedin!</li>
                        </ul>
                    </b-col>
                    <b-col md="3" class="rightSection">
                        <img src="../assets/images/logo.png">
                    </b-col>
                </b-row>
            </b-container>
        </b-container>
        <b-container fluid class="wtSection">
            <img src="../assets/images/yildiz.png" width="18" alt="calradiaonline" title="calradiaonline">
        </b-container>


        <b-container fluid class="mainTwoContainerFluid">
            <b-container class="newPlayerContainer">
                <h4 class="textRed">Yeni Oyuncular</h4>
                <p>Oyuna yeni başladıysanız hiç bir fikriniiz yoksa ne yapacağınıza karar vermeediyseniz hemen wiki
                    sayfasını incelemeye başlayın
                    Oyuna yeni başladıysanız hiç bir fikriniiz yoksa ne yapacağınıza karar vermeediyseniz hemen wiki
                    sayfasını incelemeye başlayın</p>

                <router-link :to="{ name: 'Wiki'}">
                    <b-button variant="outline-danger">Wiki</b-button>
                </router-link>

            </b-container>
        </b-container>
    </section>
</template>

