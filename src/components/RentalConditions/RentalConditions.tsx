import React, { useState } from "react";
import "./Style/_Rental.scss";
import { FaAccusoft } from "react-icons/fa";
interface RentalProps {}

function RentalConditions(props: RentalProps) {
  const [activeQ, setActiveQ] = useState<string | null>(null);

  const openQ = (id: string) => {
    setActiveQ(activeQ === id ? null : id);
  };

  const getClassAnswer = (id: string) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id: string) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      {/* <div style={{backgroundImage: `url(${'/images/whitecar.avif'})`}}> */}

      <section className="faq-section clear-filter">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              <h5>CarRentex</h5>
              <h2>Kiralama Koşulları</h2>
              <p>
                Araç Kiralama Rezervasyon Süreci Hakkında Sıkça Sorulan Sorular,
                CarRentex: Yaygın Endişelere ve Sorulara Yanıtlar.
              </p>
            </div>

            <div className="all-questions ">
              <div className="faq-box ">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__question  ${getClassQuestion("q1")}`}
                >
                  <p>1. Kullanıcı Bilgisi</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__answer ${getClassAnswer("q1")}`}
                >
                  Kiraladığınız aracı yalnızca sözleşme ve teslimat formunda
                  belirtilen kişi/kişiler kullanabilir. Sözleşmede belirtilmeyen
                  üçüncü kişilerin, aracı kullanmaları halinde meydana
                  gelebilecek hasarlarda, hiçbir hasar güvencesi geçerli
                  değildir. Araç kullanıcı sayısını arttırabilmek için
                  şubelerimizden, “Ek Sürücü” hizmeti satın alabilirsiniz. Ek
                  sürücü; aracı kiralayan kişi dışında aracı kullanacak biri
                  veya birileri var ise satın alınmak zorundadır. Bir araç için
                  en fazla 5 adet ek sürücü tanımlanabilir. Araç gruplarında
                  belirlenmiş olan yaş ve ehliyet yılı koşulları dâhilinde
                  kiralama yapılabilmektedir. Bu koşulların sağlanamaması
                  durumunda “Genç Sürücü” hizmet paketi satın alarak bu paket
                  içeriğindeki limitler dâhilinde kiralama yapabilirsiniz. Genç
                  sürücü hizmet paketi “Süper Maksimum Güvence” hizmetini de
                  içermektedir. Ek Sürücü ve Genç Sürücü Hizmet ücretlerini
                  rezervasyon merkezimiz ve şubelerimizden öğrenebilirsiniz.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>2. Kiralama Süresi</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
                  Araçlarımız, günlük olarak en az 24 saat, aylık olarak ise 23
                  gün üzerinden kiralanabilmektedir. Olası gecikmeler durumunda:
                  2 saat üzeri gecikme durumunda, o tarihte geçerli olan araç
                  kiralama bedelinin 1/3’ü 3 saat ve üzeri gecikme durumunda, o
                  an geçerli olan araç kiralama bedelinizin 2/3’ü Teslim ya da
                  alış saatiniz şube kapanma saatinde ise o saatte aracı teslim
                  ya da iade etmeniz gerekmektedir. 2 saate kadar gecikme
                  opsiyonu, şube kapanış saatinde teslim ya da iade saatine
                  sahip kiralamalar için geçerli değildir. 4 saat ve üzeri
                  gecikme durumunda ise, ilgili gün geçerli olan bir günlük kira
                  bedeli sözleşmenize eklenerek, tahsilat kredi kartınızdan
                  yapılacaktır.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__question ${getClassQuestion("q3")}`}
                >
                  <p>3. Araç Teslimi</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__answer ${getClassAnswer("q3")}`}
                >
                  Şubeye İade: Aracınızı kiraladığınız şubeden farklı bir
                  şubemize iade etmek istediğinizde “Tek Yön” ücreti
                  uygulanacaktır. Tek Yön ücreti aynı şehir içerisinde, alınan
                  şubeden farklı bir şubeye iade ettiğinizde de uygulanır.
                  Adresten Teslim Alma ve Adrese Teslim Etme: Adrese teslimat ve
                  adresten teslim alma hizmetimiz şubelerimizin müsaitlik
                  durumuna göre değişiklik göstermektedir. Tüm detaylar için
                  kiralama yapmak istediğiniz şubemiz ile iletişime
                  geçebilirsiniz.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q4"
                  onClick={() => openQ("q4")}
                  className={`faq-box__question ${getClassQuestion("q4")}`}
                >
                  <p>4. Trafik Cezaları</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q4"
                  onClick={() => openQ("q4")}
                  className={`faq-box__answer ${getClassAnswer("q4")}`}
                >
                  Trafik kurallarına uyulmaması sonucu ortaya çıkacak her tür
                  trafik cezasının (köprü ve otoyollarda hatalı gişe
                  kullanılması da dâhil olmak üzere) ödemesi ve hizmet bedeli
                  sözleşmede ismi geçen kiracıya ait kredi kartından
                  yapılacaktır.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q5"
                  onClick={() => openQ("q5")}
                  className={`faq-box__question ${getClassQuestion("q5")}`}
                >
                  <p>5. Önemli Uyarılar</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q5"
                  onClick={() => openQ("q5")}
                  className={`faq-box__answer ${getClassAnswer("q5")}`}
                >
                  Kiralamaya ait tüm ücretler, kiracının şahsına ait kredi
                  kartından tahsil edilmektedir. Banka kartı,sanal kart,debit
                  kart geçerli değildir. Herhangi bir hasar durumunda,
                  sigortanızın geçerli olabilmesi için, acil yardım hattına
                  ihbarda bulunmanız ve aracınızı kaza yerinden hareket
                  ettirmeden Trafik Polisi ya da Trafik Jandarma ekiplerine
                  haber vermeniz ve “Polis Raporu ile birlikte Alkol Raporu”
                  almanız gerekmektedir. Maddi hasarlı trafik kazalarında kaza
                  yapan kişiler kazanın oluş şekli konusunda anlaştıkları
                  takdirde “Maddi Hasarlı Kaza Tespit Tutanağı” da
                  düzenlenebilir. Aracın çalınması durumunda, polis aranarak
                  “Hırsızlık Tespit Tutanağı” alınmalıdır. Alınan raporla
                  birlikte aracın anahtarı tarafımıza teslim edilmelidir.
                  Aracınızla bir kaza geçirmeniz, aracın çalınması,
                  arızalanması, lastik patlaması ve her türlü acil yardıma
                  ihtiyaç duyduğunuz durumda, 7 gün 24 saat, tüm Türkiye’de
                  hizmet veren 0850 222 5 478 numaralı “Acil Yardım” hattımızı
                  arayabilirsiniz. Yurtdışına Çıkış: Hiçbir sigortamız Türkiye
                  sınırları dışında geçerli olmadığı gibi, araçlarımızın Türkiye
                  sınırları dışına çıkarılması da yasaktır. Lütfen teslimat
                  formunu ve sözleşmenizi kontrol ediniz. Araç kiralama
                  rezervasyonunuz araç grubuna konfirme edilmiş olup herhangi
                  bir marka ve/veya model garantisi verilmemektedir. Kiralayan;
                  sağlam ve iyi durumda teslim aldığı araçta, kullanım hatası
                  ve/veya dikkatsizlik, tedbirsizlik vb. nedenlerle
                  (sayılanlarla sınırlı olmaksızın, hatalı vites değiştirilmesi
                  nedeni ile şanzıman arızası, uyarı ışığı yandığı halde aracın
                  kullanılmaya devam edilmesi nedeniyle oluşacak hasarlar,
                  aracın altının vurulması suretiyle ortaya çıkan hasarlar,
                  lastik ve jant gibi aksamlara zarar verilmesi, yakıttan
                  kaynaklı arıza ve hasarlar vb.) oluşan her türlü mekanik ve
                  elektrik dahil olmak üzere tüm zarar ve ziyanları ödemeyi
                  kabul ve taahhüt eder. Bu mekanik ve elektrik dahil olmak
                  üzere tüm zarar ve ziyanlar kasko ve güvenceler kapsamı
                  dışındadır. Kış lastiği opsiyonu ek ürün olarak sunulmakta ve
                  ücrete tabii bir hizmettir. Kış lastiği bölge ve şubeye göre
                  değişkenlik göstermekte olup, stoklarla sınırlıdır. Kiralama
                  yapacağınız şube ile iletişime geçerek stok teyidi yapmanız
                  gerekmektedir. Karayolu Taşıma Yönetmeliği kapsamında, N1 ve
                  N1G araç sınıfında yer alan kamyonet cinsi olarak tescil
                  edilen taşıtlarla yapılan ve taşınan eşyanın ticari olmadığı
                  taşımalar içindir. Kiralama öncesinde sürücüden ek belgeler
                  talep edilebilir.Tüm gruplar
                  için yapacağınız rezervasyonun kesinleşip,aracınızı
                  alabilmeniz için finansal analizinizin* CarRentex kiralama
                  kriterlerine uygun olması gerekmektedir. Tüm bankalardaki
                  kredi, kredi kartı ve kredili mevduat hesabı ve benzeri
                  ürünlerinizin toplam limit ve borç bilgileri, kredili
                  ürünlerinizin açık/kapalı olduğu bilgisi ve kredili
                  ürünlerinizdeki geçmiş ödeme performansına göre Findeks
                  puanınıza bakılmaksızın da değerlendirme yapılabilir.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RentalConditions;
