const data = {
    slides: ['/images/slider/Banner_1.jpg', '/images/slider/Banner_2.jpg', '/images/slider/Banner_3.jpg', '/images/slider/Banner_4.jpg', '/images/slider/Banner_5.jpg', '/images/slider/Banner_6.jpg', '/images/slider/Banner_7.jpg', '/images/slider/Banner_8.jpg'  ],
    categories:[
        {
            categoryName: 'Power Banks',
            _id : '1',
            categoryImg: '/images/A01.png'
            },
        {
        categoryName: 'Bluetooth Speakers',
        _id : '2',
        categoryImg: '/images/tur.png'
        }
        
    ],

    products: [
        {
            _id : '1',
            productId: '1',
            productOrder: '1',
            name: 'Teknobyte Power Bank A01'z, 
            slug: 'teknobyte-power-bank-A01',
            image: '/images/A01_black.png',
            imageBig: '/images/bigProduct/powerBankBlackBig.jpg',
            pColor : 'black',
            color: [
                {colorName: 'black',
                colorImg :  'https://teknobyte.com/images/powerBank/powerBankBlackSmall.jpg', 
                gallery :  '/images/bigProduct/powerBankBlackBig.jpg', 
                },
                {colorName: 'white',
                colorImg :  'https://teknobyte.com/images/powerBank/powerBankWhiteSmall.jpg', 
                gallery :  '/images/bigProduct/powerBankWhiteBig.jpg', 
                }
            ], 
            price: 1999,
            offerPrice: 999,
            Specification: {
                Capacity: '10000mAh',
                Battery : 'Li-Polymer',
                'USB output port': '2',
                Material:'ABS & PC',
                Dimension:'153.3mm X 75.6mm X 16.4mm',
                'Net weight':'216.8 gm',
                'Packing Contain':'1 Portable Charger Unit, 1 Charging Cable'
            }
        },
        {
            _id : '1',
            productId: '2',
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
            _id : '1',
            productId: '3',
            productOrder: '4',
            name: 'Teknobyte Power Bank A03',
            slug: 'teknobyte-power-bank-A03', 
            image: '/images/A03.png',
            imageBig: '/images/A03.png', 
            price: 1499,
            offerPrice: 699, 
            Specification: {
                Capacity: '5000mAh',
                Battery : 'Li-Polymer',
                'USB output port': '3',
                Material:'ABS & PC',
                Dimension:'93.30mm*68.5mm*23mm',
                'Net weight':'114 gm',
                'Packing Contain':'1 Portable Charger Unit, 1 Charging Cable'
            }
        },
        {
            _id : '2',
            productId: '4',
            productOrder: '0',
            name: 'Bluetooth Speaker TUR',  
            slug: 'bluetooth-speaker-TUR',
            image: '/images/tur.png',
            imageBig: 'https://teknobyte.com/images/speaker/turoBlueBig.png',
            pColor : 'blue',
            color:[
                {colorName: 'blue' ,
                colorImg :  '/images/TUR_blue.png',
                gallery: 'https://teknobyte.com/images/speaker/turoBlueBig.png'
                },
                {colorName: 'black' ,
                colorImg :  '/images/TUR_black.png',
                gallery: 'https://teknobyte.com/images/speaker/turoBlackBig.png'
                },
                {colorName: 'green',
                colorImg :  '/images/TUR_green.png',
                gallery : 'https://teknobyte.com/images/speaker/turoGreenBig.png'
                }
            ],
            price: 2999,
            offerPrice: 1499, 
            Specification: {
                'Bluetooth Version': 'v4.2',
                Output : '3W',
                Size: '117*38*78mm',
                Weight:'200g',
                color:'Blue Green, & Black',
                'Net Weight':'216.8 gm',
                'Packing contain':'1 Portable Charger Unit, 1 Charging Cable'
            }
        },
        {
            _id : '2',
            productId: '5',
            productOrder: '2',
            name: 'Bluetooth Speaker B01.3', 
            slug: 'bluetooth-speaker-B01.3',
            image: '/images/B01-3.png',
            imageBig: 'https://teknobyte.com/images/speaker/bo1BlueBig.jpg',
            pColor : 'blue',
            color:[
                    {colorName: 'blue' ,
                    colorImg :  'https://teknobyte.com/images/speaker/bo1BlueSmall.jpg',
                    gallery: 'https://teknobyte.com/images/speaker/bo1BlueBig.jpg',
                    },
                    {colorName: 'grey' ,
                    colorImg :  'https://teknobyte.com/images/speaker/bo1SilverSmall.jpg',
                    gallery : 'https://teknobyte.com/images/speaker/bo1SilverBig.jpg'
                    }
                  ],
            price: 1999,
            offerPrice: 999, 
            Specification: {
                'Bluetooth Version': 'v4.2',
                Output : '3W',
                Size: '117*38*78mm',
                Weight:'200g',
                color:'Blue & Silver',
                'Net weight':'216.8 gm',
                'Packing contain':'1 Portable Charger Unit, 1 Charging Cable'
            }
        }
    ]
}
export default data;