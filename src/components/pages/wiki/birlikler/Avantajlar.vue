<template>
    <div class="ozellik" id="Avantajlar">
        <div class="top">
            <h1>Avantajlar</h1>
            <hr>
            <p>
                Bu askerlerden bazılarının çeşitli bonusları veya dezavantajları bulunur.
            </p>
        </div>
        <p>
            <b>Örnek kullanım</b> <br><b class="textRed">Çavuş'un</b> karşısında okçu varsa çavuş +25 bonus alır. <br>
            <b class="textRed">Çavuş'un</b> karşısında şövalye varsa çavuş +50 bonus alır.
        </p>
        <br>
        <div class="askerler">
            <b-row md="12" class="text-center">
                <b-col md="4">
                    <img src="https://calradiaonline.com/public/img/askerler/1.png">
                    <br>
                    <b class="textRed">Çavuş</b>
                    <p>
                        +25<img src="https://calradiaonline.com/public/img/askerler/2.png" width="20"
                                 height="20">
                        +50<img src="https://calradiaonline.com/public/img/askerler/3.png" width="20" height="20">
                    </p>
                </b-col>


                <b-col md="4">
                    <img src="https://calradiaonline.com/public/img/askerler/2.png">
                    <br>
                    <b class="textRed">Nişancı</b>
                    <p>
                        +10<img src="https://calradiaonline.com/public/img/askerler/4.png" width="20"
                                 height="20">
                        +35<img src="https://calradiaonline.com/public/img/askerler/8.png" width="20" height="20">
                        +25<img src="https://calradiaonline.com/public/img/askerler/5.png" width="20" height="20">
                    </p>
                </b-col>



                <b-col md="4">
                    <img src="https://calradiaonline.com/public/img/askerler/3.png">
                    <br>
                    <b class="textRed">Şövalye</b>
                    <p>
                        +35<img src="https://calradiaonline.com/public/img/askerler/2.png" width="20"
                                height="20">
                        +15<img src="https://calradiaonline.com/public/img/askerler/4.png" width="20" height="20">
                        +25<img src="https://calradiaonline.com/public/img/askerler/5.png" width="20" height="20">
                    </p>
                </b-col>

                <b-col md="4">
                    <img src="https://calradiaonline.com/public/img/askerler/4.png">
                    <br>
                    <b class="textRed">Zırhlı Piyade</b>
                    <p>
                        +25<img src="https://calradiaonline.com/public/img/askerler/1.png" width="20"
                                height="20">
                        +25<img src="https://calradiaonline.com/public/img/askerler/5.png" width="20" height="20">
                    </p>
                </b-col>

                <b-col md="4">
                    <img src="https://calradiaonline.com/public/img/askerler/8.png">
                    <br>
                    <b class="textRed">Topçu</b>
                    <p>
                        +25<img src="https://calradiaonline.com/public/img/askerler/1.png" width="20"
                                height="20">
                        +35<img src="https://calradiaonline.com/public/img/askerler/3.png" width="20" height="20">
                        +25<img src="https://calradiaonline.com/public/img/askerler/4.png" width="20" height="20">
                    </p>
                </b-col>

                <b-col md="4">
                    <img src="https://calradiaonline.com/public/img/askerler/5.png">
                    <br>
                    <b class="textRed">Topçu</b>
                    <p>
                        +25<img src="https://calradiaonline.com/public/img/askerler/1.png" width="20"
                                height="20">
                        +35<img src="https://calradiaonline.com/public/img/askerler/8.png" width="20" height="20">
                    </p>
                </b-col>



            </b-row>
        </div>

        <br>
        <p>Savaş düzenini incelemeyi unutmayın. </p>

    </div>

</template>

<style scoped>

    .askerler > div > div > img {
        width: 65px;
        object-fit: contain;
        height: 65px;
    }

    .askerler > div > div > p>img {
        width: 25px;
        object-fit: contain;
        height: 25px;
    }
</style>