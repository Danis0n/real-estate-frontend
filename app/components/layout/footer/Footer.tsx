import React from 'react';
import Image from 'next/image'
import Logo from '../../../../public/logo.svg'

const Footer = () => {
    return (
        <div className={'mt-20 bg-footer-bg h-[300px]'}>
            <div className={'flex gap-20 text-white justify-center'}>
                <div className={'ml-20 mt-10 w-[200px] text-lg'}>
                    <div>
                        <Image className={'mr-10 h-8 sm:h-9 mb-4'} src={Logo} alt={'logo'}/>
                    </div>
                    <div className={'text-justify'}>
                        Lorem ipsum dolo sit azmet, consecter dipise consult elit.
                        Maecenas mamus antesme non anean a dolor sample tempor nuncest erat.
                    </div>
                </div>
                <div className={'text-lg mt-10'}>
                    <div className={'font-bold mb-5'}>НАШИ КОНТАКТЫ:</div>
                    <div className={'mb-2'}>г. Брянск, ул. Институтская 16</div>
                    <div className={'mb-2'}>+7(777)-777-77-77</div>
                    <div className={'mb-2'}>d.linko@bk.ru</div>
                    <div className={'mb-2'}>Пн-Пт: 09:00 - 18:00</div>
                    <div className={'mb-2'}>Сб-Вс: Выходной</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;