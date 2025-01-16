//import bcrypt from 'bcryptjs';
const data = {
    slides: [{slideImg: '/images/slider/Banner_1.jpg'}, {slideImg: '/images/slider/Banner_2.jpg'}, {slideImg:'/images/slider/Banner_3.jpg'}, {slideImg:'/images/slider/Banner_4.jpg'} ],
    categories: [
        {
            categoryName: 'Bluetooth Speakers',
            categoryImg: '/images/tur.png',
        },
        {categoryName: 'Power Banks',
       categoryImg: '/images/A01_black.png',
        }
    ],
    products: [
        {
            category : 'Power Banks',
            productOrder: '1',
            name: 'Teknobyte Power Bank A01', 
            slug: 'teknobyte-power-bank-A01',
            image: '/images/A01_black.png',
            imageBig: '/images/bigProduct/powerBankBlackBig.jpg',
            pColor : 'black',
            color: [
                {colorName: 'black',
                colorImg :  '/images/smallProduct/powerBankBlackSmall.jpg', 
                gallery :  '/images/bigProduct/powerBankBlackBig.jpg',
                },
                {colorName: 'white',
                colorImg :  '/images/smallProduct/powerBankWhite.jpg', 
                gallery :  '/images/bigProduct/powerBankWhiteBig.jpg', 
                }
            ], 
            price: 1999,
            offerPrice: 999,
            Specification: {
                Capacity: '10000mAh',
                BatteCapacityry : 'Li-Polymer',
                'USB output port': '2',
                Material:'ABS & PC',
                Dimension:'153.3mm X 75.6mm X 16.4mm',
                'Net weight':'216.8 gm',
                'Packing Contain':'1 Portable Charger Unit, 1 Charging Cable'
            }
        },
        {
            category : 'Power Banks',
           // _id: '2',
            productOrder: '3',
            name: 'Teknobyte Power Bank A02', 
            slug: 'teknobyte-power-bank-A02',
            image: '/images/A02.png',
            imageBig: '/images/A02.png',
            price: 1999,
            offerPrice: 999, 
            Specification: {
                Capacity: '10000mAh',
                Battery : 'Li-Polymer',
                'USB output port': '2',
                Material:'ABS & PC',
                Dimension:'153.3mm X 75.6mm X 16.4mm',
                'net weight':'216.8 gm',
                'Packing contain':'1 Portable Charger Unit, 1 Charging Cable'
             }
        },
        { 
            name: 'Bluetooth Speaker TUR', 
            category: 'Bluetooth Speakers',
            slug:'bluetooth-cpeaker-TUR',
            image: '/images/tur.png', 
            imageBig: '/images/tur.png', 
            productOrder: '3',
            price: 2999,
            offerPrice: 1499,
            Specification: {
                Bluetooth_Version: 'v4.2',
                Output : '3W',
                Size: '117*38*78mm',
                Weight:'200g',
                color:'Blue Green, & Black',
                netWeight:'216.8 gm',
                packingContain:'1 Portable Charger Unit, 1 Charging Cable'
            }
        },
    ]
}
export default data;