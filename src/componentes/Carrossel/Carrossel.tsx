import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carrossel.css";

import { Pagination, Navigation } from "swiper";

function Carrossel() {

    var items = [
        { img: "https://imgur.com/a/JpLDwD9" },
        { img: "https://static.poder360.com.br/2022/04/acampamento-terra-livre-marcelo-camargo-agencia-brasil--848x477.jpeg" },
        { img: "https://observatorio3setor.org.br/wp-content/uploads/2019/08/voluntariado.jpg" }
    ]

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {
                    items.map((item) => (
                        <SwiperSlide>
                            <img src={item.img} alt="Imagem" />
                        </SwiperSlide>
                    ))
                }

                {/* 
                    Funções Nominais: function (){}
                    Arrow Function: () => {}
                
                */}

            </Swiper>
        </>
    )
}

export default Carrossel