// import about icons
import featureImg01 from "./assets/images/service-01.png"
import featureImg02 from "./assets/images/service-02.png"
import featureImg03 from "./assets/images/service-03.png"

// all images imported from images directory
import product_01_image_01 from "./assets/images/product_01.jpg";
import product_01_image_02 from "./assets/images/product_01.1.jpg";
import product_01_image_03 from "./assets/images/product_01.3.jpg";

import product_02_image_01 from "./assets/images/product_2.1.jpg";
import product_02_image_02 from "./assets/images/product_2.2.jpg";
import product_02_image_03 from "./assets/images/product_2.3.jpg";

import product_03_image_01 from "./assets/images/product_3.1.jpg";
import product_03_image_02 from "./assets/images/product_3.2.jpg";
import product_03_image_03 from "./assets/images/product_3.3.jpg";

import product_04_image_01 from "./assets/images/product_4.1.jpg";
import product_04_image_02 from "./assets/images/product_4.2.jpg";
import product_04_image_03 from "./assets/images/product_4.3.png";

import product_05_image_01 from "./assets/images/product_04.jpg";
import product_05_image_02 from "./assets/images/product_08.jpg";
import product_05_image_03 from "./assets/images/product_09.jpg";

import product_06_image_01 from "./assets/images/bread(1).png";
import product_06_image_02 from "./assets/images/bread(2).png";
import product_06_image_03 from "./assets/images/bread(3).png";

// about images
import ProfilePhoto1 from "./assets/images/bread(1).png";
import ProfilePhoto2 from "./assets/images/bread(2).png";
import ProfilePhoto3 from "./assets/images/bread(3).png";


// navigation data
export const navigation = [
    {
        name: 'Home',
        path: '/home',
    },
    {
        name: 'AllProducts',
        path: '/products',
    },
    {
        name: 'Cart',
        path: '/cart',
    }
];

// skills data
export const FeatureImages = [
    {
        icon: featureImg01,
        title: 'Easy to Order',
        description:
            'You only need a few steps in food ordering.',
    },
    {
        icon: featureImg02,
        title: 'Easy to Order',
        description:
            'Delivery that is always on time even faster.',
    },
    {
        icon: featureImg03,
        title: 'Easy to Order',
        description:
            'Not only fast for us, quality is also number one.',
    },
];

// products

export const products = [
    {
        id: "01",
        title: "Chicken Burger",
        price: 24.0,
        image01: product_01_image_01,
        image02: product_01_image_02,
        image03: product_01_image_03,
        category: "Burger",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },

    {
        id: "02",
        title: "Vegetarian Pizza",
        price: 115.0,
        image01: product_02_image_01,
        image02: product_02_image_02,
        image03: product_02_image_03,
        category: "Pizza",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "03",
        title: "Double Cheese Margherita",
        price: 110.0,
        image01: product_03_image_01,
        image02: product_03_image_02,
        image03: product_03_image_03,
        category: "Pizza",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "04",
        title: "Maxican Green Wave",
        price: 110.0,
        image01: product_04_image_01,
        image02: product_04_image_02,
        image03: product_04_image_03,
        category: "Pizza",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "05",
        title: "Cheese Burger",
        price: 24.0,
        image01: product_05_image_01,
        image02: product_05_image_02,
        image03: product_05_image_03,
        category: "Burger",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },
    {
        id: "06",
        title: "Royal Cheese Burger",
        price: 24.0,
        image01: product_01_image_01,
        image02: product_01_image_02,
        image03: product_01_image_03,
        category: "Burger",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "07",
        title: "Seafood Pizza",
        price: 115.0,
        image01: product_02_image_02,
        image02: product_02_image_01,
        image03: product_02_image_03,
        category: "Pizza",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "08",
        title: "Thin Cheese Pizza",
        price: 110.0,
        image01: product_03_image_02,
        image02: product_03_image_01,
        image03: product_03_image_03,
        category: "Pizza",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "09",
        title: "Pizza With Mushroom",
        price: 110.0,
        image01: product_04_image_02,
        image02: product_04_image_01,
        image03: product_04_image_03,
        category: "Pizza",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "10",
        title: "Classic Hamburger",
        price: 24.0,
        image01: product_05_image_02,
        image02: product_05_image_01,
        image03: product_05_image_03,
        category: "Burger",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "11",
        title: "Crunchy Bread ",
        price: 35.0,
        image01: product_06_image_01,
        image02: product_06_image_02,
        image03: product_06_image_03,
        category: "Bread",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "12",
        title: "Delicious Bread ",
        price: 35.0,
        image01: product_06_image_02,
        image02: product_06_image_01,
        image03: product_06_image_03,
        category: "Bread",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },

    {
        id: "13",
        title: "Loaf Bread ",
        price: 35.0,
        image01: product_06_image_03,
        image02: product_06_image_02,
        image03: product_06_image_03,
        category: "Bread",

        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
    },
];

// aboutSlider data
export const aboutSlider = [
    {
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem rem ad consequuntur similique sequi illum dolorum omnis inventore labore odio!',
      name: 'Jane Cooper',
      image: ProfilePhoto1,
      position: 'Web Developer',
    },
    {
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem rem ad consequuntur similique sequi illum dolorum omnis inventore labore odio!',
      name: 'Theresa Webb',
      image: ProfilePhoto2,
      position: 'Web Designer',
    },
    {
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem rem ad consequuntur similique sequi illum dolorum omnis inventore labore odio!',
      name: 'Kathryn Murphy',
      image: ProfilePhoto3,
      position: 'UI/UX Designer',
    },
  ];