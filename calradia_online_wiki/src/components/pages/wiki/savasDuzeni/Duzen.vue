<template>
    <div class="ozellik" id="Duzen">
        <div class="top">
            <h1>Düzen</h1>
            <hr>
            <p>Savaş düzeni; saldırı hazırlığında ve mülklerinizin savunma düzeninde kullanılır. Toplam altı hattan oluşur.
            </p>
        </div>
        <br>

        <h5>Hatlar</h5>
        <ul>
            <li>Merkez Sol</li>
            <li>Merkez Sağ</li>
            <li>Sol Kanat</li>
            <li>Sağ Kanat</li>
            <li>Arka Sol</li>
            <li>Arka Sağ</li>
        </ul>

        <b-img thumbnail fluid src="https://media.discordapp.net/attachments/666196679753465878/694996298641703042/savas_raporu.jpg"></b-img>
        <p>(Örnek savaş düzeni. Birliklerin avantajları ve dezavantajları için avantajlar konusunu inceleyin.)</p>

        <h5>Hatlarla ilgili temel bilgiler</h5>

        <ul>
            <li>Her hatta askerler düşman savaş düzenine göre bonus alır. Örneğin, sol kanatta süvarileri savaşa gönderdiyseniz ve düşmanınız da sol kanadına kiralık kılıç yerleştirdiyse bonus kazanırsınız.</li>
            <li>Savaş düzeninide boş bırakılan yer olur ve rakibiniz boş olan yerden saldırı yaparsa birlikleri <b class="textRed">+15 saldırı/savunma bonusu</b> kazanır. Aynı şekilde siz de boş yerlerden saldırırsanız bonus kazanırsınız.</li>
            <li>Bir savaş hattından kazanılan en fazla avantaj, hatta bulunan asker sayınız kadar hesaplanır. Örneğin, 5 çavuş ile 1 şövalyeye saldırırsanız çavuşlarınızın tamamı bonus kazanır.</li>
            <li>Eğer tek türdeki askerinizi tüm cephelere yayarsanız bu sayı her hatta eşit olarak dağılır. Örneğin, 60 süvarinizi tüm hatlara yerleştirirseniz her hatta 10 şövalye savaşmış sayılır.</li>
            <li>Hatlara yerleşmeyen birliklerin saldırı/savunma puanları yarı yarıya azalır.</li>
            <li>Vahşi hayvanlar, çapulcular, haydutlar, kaçaklar ve bosslar boş yönden +5 savunma bonusu kazanırlar.</li>
        </ul>

        <br>
        <br>
        <h5>Saldırı Düzeni</h5>
        <b-img thumbnail fluid src="https://media.discordapp.net/attachments/666196679753465878/694990370685321357/Screenshot_4.jpg"></b-img>

        <ul>
          <li>Savunma düzeni oluşturmak için asker bulundurma şartı aranmaz.</li>
         <li>Bir düşman saldırısı anında eğer oluşturduğunuz hatlara uygun asker yoksa pozisyon boş sayılır.</li>
          <li>Hatta olmayan birlikler bonus kazanamaz.</li>
          <li>Hatta yerleşmeyen birimler düzensiz sayılır.</li>
        </ul>


    </div>

</template>

<style scoped>

    .askerler > div>div> img {
        width: 65px;
        object-fit: contain;
        height: 65px;
    }
</style>