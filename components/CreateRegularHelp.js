import React, {Component} from 'react';
import Svg, {
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';

class CreateRegularHelp extends Component {
    render() {
        return (
            <Svg width="375" height="74" viewBox="0 0 375 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M12 24C12 18.3995 12 15.5992 13.0899 13.4601C14.0487 11.5785 15.5785 10.0487 17.4601 9.08993C19.5992 8 22.3995 8 28 8H347C352.601 8 355.401 8 357.54 9.08993C359.422 10.0487 360.951 11.5785 361.91 13.4601C363 15.5992 363 18.3995 363 24V54C363 59.6005 363 62.4008 361.91 64.5399C360.951 66.4215 359.422 67.9513 357.54 68.9101C355.401 70 352.601 70 347 70H28C22.3995 70 19.5992 70 17.4601 68.9101C15.5785 67.9513 14.0487 66.4215 13.0899 64.5399C12 62.4008 12 59.6005 12 54V24Z" fill="#F5F5F5"/>
                <Path d="M43 21C43.5523 21 44 21.4477 44 22L44.0007 23.1598C44.8406 23.2934 45.3843 23.5093 45.9305 23.8014C46.9083 24.3243 47.6757 25.0917 48.1986 26.0695C48.6737 26.9578 48.947 27.8396 48.993 29.9991L49 30V37.3083L48.9947 37.9184C48.9539 40.1381 48.6797 41.031 48.1986 41.9305C47.6757 42.9083 46.9083 43.6757 45.9305 44.1986C44.9528 44.7215 43.9829 45 41.3083 45H34.6917L34.0816 44.9947C31.8619 44.9539 30.969 44.6797 30.0695 44.1986C29.0917 43.6757 28.3243 42.9083 27.8014 41.9305C27.2994 40.9919 27.0227 40.0605 27.0013 37.6212L27 30.6917V30C27.053 27.8396 27.3263 26.9578 27.8014 26.0695C28.3243 25.0917 29.0917 24.3243 30.0695 23.8014C30.6159 23.5092 31.1599 23.2933 32.0003 23.1597L32 22C32 21.4477 32.4477 21 33 21C33.5523 21 34 21.4477 34 22L33.9991 23.007C34.2165 23.0023 34.447 23 34.6917 23H41.3083C41.5534 23 41.7842 23.0023 42.0019 23.007L42 22C42 21.4477 42.4477 21 43 21ZM46.999 32H29L29.0009 37.5913L29.0098 38.1601C29.0486 39.6673 29.2079 40.3196 29.565 40.9873C29.9015 41.6166 30.3834 42.0985 31.0127 42.435C31.759 42.8341 32.4859 42.9861 34.4087 42.9991H41.5913L42.1601 42.9902C43.6673 42.9514 44.3196 42.7921 44.9873 42.435C45.6166 42.0985 46.0985 41.6166 46.435 40.9873C46.8341 40.241 46.9861 39.5141 46.9991 37.5913L46.999 32ZM43.046 37C43.4788 37 43.8196 37.0812 44.1047 37.2337C44.3899 37.3863 44.6137 37.6101 44.7663 37.8953C44.9188 38.1804 45 38.5212 45 38.954V39.046C45 39.4788 44.9188 39.8196 44.7663 40.1047C44.6137 40.3899 44.3899 40.6137 44.1047 40.7663C43.8196 40.9188 43.4788 41 43.046 41H42.954C42.5212 41 42.1804 40.9188 41.8953 40.7663C41.6101 40.6137 41.3863 40.3899 41.2337 40.1047C41.0812 39.8196 41 39.4788 41 39.046V38.954C41 38.5212 41.0812 38.1804 41.2337 37.8953C41.3863 37.6101 41.6101 37.3863 41.8953 37.2337C42.1804 37.0812 42.5212 37 42.954 37H43.046ZM41.5913 25.0009H34.4087L34 25.006V26C34 26.5523 33.5523 27 33 27C32.4477 27 32 26.5523 32 26L31.9992 25.1925C31.6186 25.2804 31.3172 25.4021 31.0127 25.565C30.3834 25.9015 29.9015 26.3834 29.565 27.0127C29.1956 27.7034 29.0379 28.3776 29.0062 29.9986L46.993 30L46.9902 29.8399C46.9514 28.3327 46.7921 27.6804 46.435 27.0127C46.0985 26.3834 45.6166 25.9015 44.9873 25.565C44.6829 25.4022 44.3816 25.2805 44.001 25.1926L44 26C44 26.5523 43.5523 27 43 27C42.4477 27 42 26.5523 42 26L42.0024 25.0062C41.8717 25.0036 41.7348 25.0019 41.5913 25.0009Z" fill="#3F8AE0"/>
                <Path d="M65.4688 24.7266V36H67.4844V32.2734H69.9297C72.2109 32.2734 73.8047 30.75 73.8047 28.5234C73.8047 26.2578 72.2656 24.7266 70.0156 24.7266H65.4688ZM67.4844 26.375H69.4844C70.9375 26.375 71.7578 27.125 71.7578 28.5234C71.7578 29.8828 70.9141 30.6484 69.4766 30.6484H67.4844V26.375ZM81.0472 33.6641C80.7659 34.3047 80.1019 34.6641 79.1409 34.6641C77.8675 34.6641 77.0472 33.7578 77.0003 32.3125V32.2109H82.9691V31.5938C82.9691 28.9141 81.5081 27.2969 79.0706 27.2969C76.5941 27.2969 75.055 29.0234 75.055 31.7656C75.055 34.5 76.5706 36.1719 79.0863 36.1719C81.1019 36.1719 82.5316 35.2031 82.8831 33.6641H81.0472ZM79.0628 28.8047C80.2269 28.8047 80.9925 29.625 81.0316 30.9219H77.0081C77.0941 29.6406 77.9066 28.8047 79.0628 28.8047ZM90.5006 28.9766V27.4609H84.7428V36H86.6803V28.9766H90.5006ZM93.0556 39.0938C94.9697 39.0938 95.8838 38.3984 96.6103 36.2969L99.6963 27.4609H97.6494L95.6572 34.1641H95.5244L93.5244 27.4609H91.3994L94.4541 36.0312L94.3525 36.4297C94.1025 37.2344 93.6416 37.5469 92.8213 37.5469C92.6884 37.5469 92.3994 37.5391 92.29 37.5234V39.0625C92.415 39.0859 92.9384 39.0938 93.0556 39.0938ZM103.4 32.0469L103.611 28.9766H106.118V36H108.048V27.4609H101.923L101.642 31.9453C101.556 33.3828 101.275 34.375 100.447 34.375C100.236 34.375 100.064 34.3359 99.9778 34.3125V35.9922C100.087 36.0312 100.306 36.0859 100.626 36.0859C102.603 36.0859 103.236 34.5 103.4 32.0469ZM114.931 36H116.838V27.4609H113.314C111.322 27.4609 110.009 28.5781 110.009 30.3672C110.009 31.5469 110.72 32.4609 111.884 32.8047L109.595 36H111.814L113.814 33.125H114.931V36ZM113.463 31.6875C112.533 31.6875 111.923 31.1406 111.923 30.3672C111.923 29.5078 112.525 28.9688 113.463 28.9688H114.931V31.6875H113.463ZM123.705 27.3203C122.533 27.3203 121.541 27.9062 121.049 28.875H120.916V27.4609H119.049V38.8359H120.986V34.7031H121.119C121.557 35.6094 122.502 36.1406 123.728 36.1406C125.885 36.1406 127.228 34.4453 127.228 31.7344C127.228 29 125.869 27.3203 123.705 27.3203ZM123.096 34.5312C121.775 34.5312 120.955 33.4609 120.947 31.7344C120.955 30.0078 121.783 28.9375 123.103 28.9375C124.432 28.9375 125.236 29.9844 125.236 31.7344C125.236 33.4844 124.439 34.5312 123.096 34.5312ZM134.557 36H136.494V27.4609H134.557V30.8438H130.94V27.4609H129.002V36H130.94V32.3594H134.557V36ZM146.667 36H148.596V27.4609H146.667V36ZM138.698 36H142.331C144.323 36 145.596 34.8438 145.596 33.0234C145.596 31.2031 144.323 30.0391 142.331 30.0391H140.635V27.4609H138.698V36ZM142.096 31.5391C143.049 31.5391 143.667 32.125 143.667 33.0156C143.667 33.8984 143.057 34.4922 142.096 34.4922H140.635V31.5391H142.096ZM151.745 23.5234C151.745 25.0625 152.886 26.1875 154.612 26.1875C156.339 26.1875 157.479 25.0625 157.479 23.5234H155.948C155.94 24.3594 155.433 25.0469 154.612 25.0469C153.8 25.0469 153.284 24.3594 153.276 23.5234H151.745ZM152.714 36L156.354 30.25H156.487V36H158.401V27.4609H156.487L152.847 33.1797H152.714V27.4609H150.8V36H152.714ZM171.941 30.3125C171.738 28.5469 170.41 27.2969 168.214 27.2969C165.644 27.2969 164.136 28.9453 164.136 31.7109C164.136 34.5078 165.652 36.1719 168.222 36.1719C170.386 36.1719 171.73 34.9688 171.941 33.2031H170.097C169.894 34.1016 169.222 34.5781 168.214 34.5781C166.894 34.5781 166.097 33.5234 166.097 31.7109C166.097 29.9297 166.886 28.8828 168.214 28.8828C169.277 28.8828 169.918 29.4844 170.097 30.3125H171.941ZM177.371 36.1719C179.918 36.1719 181.496 34.5156 181.496 31.8203C181.496 29.2734 179.973 27.7188 177.738 27.7188C176.324 27.7188 175.387 28.3672 174.871 29.3203H174.738C174.973 27.3516 175.66 26.2578 177.832 26.1719L178.816 26.1328C180.379 26.0781 180.933 25.7109 180.933 25.7109V24.1406C180.941 24.1406 180.035 24.4766 178.699 24.5312L177.691 24.5703C174.449 24.7031 173.199 26.8672 173.199 31.0547C173.199 34.4922 174.73 36.1719 177.371 36.1719ZM177.348 34.5859C175.973 34.5859 175.191 33.5938 175.191 31.8594C175.191 30.2031 175.98 29.2422 177.348 29.2422C178.715 29.2422 179.504 30.2031 179.504 31.8594C179.504 33.5938 178.715 34.5859 177.348 34.5859ZM186.996 36.1719C189.551 36.1719 191.106 34.5 191.106 31.7266C191.106 28.9688 189.543 27.2969 186.996 27.2969C184.457 27.2969 182.887 28.9766 182.887 31.7266C182.887 34.5 184.434 36.1719 186.996 36.1719ZM186.996 34.5859C185.645 34.5859 184.871 33.5391 184.871 31.7344C184.871 29.9297 185.645 28.8828 186.996 28.8828C188.34 28.8828 189.113 29.9297 189.113 31.7344C189.113 33.5391 188.348 34.5859 186.996 34.5859ZM197.551 27.3203C196.379 27.3203 195.387 27.9062 194.895 28.875H194.762V27.4609H192.895V38.8359H194.832V34.7031H194.965C195.403 35.6094 196.348 36.1406 197.575 36.1406C199.731 36.1406 201.075 34.4453 201.075 31.7344C201.075 29 199.715 27.3203 197.551 27.3203ZM196.942 34.5312C195.622 34.5312 194.801 33.4609 194.793 31.7344C194.801 30.0078 195.629 28.9375 196.95 28.9375C198.278 28.9375 199.082 29.9844 199.082 31.7344C199.082 33.4844 198.286 34.5312 196.942 34.5312Z" fill="black"/>
                <Path d="M70.9062 53.9717H66.374V50.8232H70.6714V49.8076H66.374V46.8687H70.9062V45.8403H65.2314V55H70.9062V53.9717ZM78.547 50.252C78.3566 49.0332 77.3409 48.0366 75.6779 48.0366C73.7609 48.0366 72.5421 49.4204 72.5421 51.5532C72.5421 53.7305 73.7672 55.1206 75.6842 55.1206C77.3282 55.1206 78.3502 54.1938 78.547 52.937H77.4425C77.2394 53.7114 76.5983 54.1367 75.6779 54.1367C74.4591 54.1367 73.672 53.1338 73.672 51.5532C73.672 50.0044 74.4464 49.0205 75.6779 49.0205C76.6617 49.0205 77.2648 49.5728 77.4425 50.252H78.547ZM81.846 51.9976L82.0618 49.0713H84.4548V55H85.5466V48.1572H81.0715L80.8049 51.9722C80.7161 53.2417 80.4558 54.0352 79.7766 54.0352C79.6179 54.0352 79.491 54.0034 79.4338 53.9844V54.9873C79.51 55.019 79.637 55.0571 79.8337 55.0571C81.2556 55.0571 81.7063 53.8765 81.846 51.9976ZM88.7313 55L92.14 49.8965H92.2416V55H93.3334V48.1572H92.2416L88.8329 53.2607H88.7313V48.1572H87.6395V55H88.7313ZM103.467 55H104.559V48.1572H99.0236V55H100.115V49.0713H103.467V55ZM109.47 55.1206C111.419 55.1206 112.625 53.7749 112.625 51.5786C112.625 49.376 111.419 48.0366 109.47 48.0366C107.521 48.0366 106.315 49.376 106.315 51.5786C106.315 53.7749 107.521 55.1206 109.47 55.1206ZM109.47 54.1367C108.175 54.1367 107.445 53.1973 107.445 51.5786C107.445 49.9536 108.175 49.0205 109.47 49.0205C110.765 49.0205 111.495 49.9536 111.495 51.5786C111.495 53.1973 110.765 54.1367 109.47 54.1367ZM115.473 55V50.1313H115.594L117.758 54.8096H118.609L120.773 50.1313H120.894V55H121.992V48.1572H120.716L118.26 53.4639H118.158L115.708 48.1572H114.381V55H115.473ZM126.91 55.1206C128.858 55.1206 130.064 53.7749 130.064 51.5786C130.064 49.376 128.858 48.0366 126.91 48.0366C124.961 48.0366 123.755 49.376 123.755 51.5786C123.755 53.7749 124.961 55.1206 126.91 55.1206ZM126.91 54.1367C125.615 54.1367 124.885 53.1973 124.885 51.5786C124.885 49.9536 125.615 49.0205 126.91 49.0205C128.205 49.0205 128.935 49.9536 128.935 51.5786C128.935 53.1973 128.205 54.1367 126.91 54.1367ZM131.821 55H140.32V56.8091H141.381V54.0859H140.276V48.1572H139.184V54.0859H136.594V48.1572H135.503V54.0859H132.913V48.1572H131.821V55ZM142.737 55H145.181C146.749 55 147.752 54.0986 147.752 52.6768C147.752 51.2549 146.749 50.3535 145.181 50.3535H143.829V48.1572H142.737V55ZM145.181 51.2676C146.076 51.2676 146.66 51.8198 146.66 52.6768C146.66 53.5273 146.082 54.0859 145.181 54.0859H143.829V51.2676H145.181ZM157.473 55H158.564V48.1572H157.473V50.9883H154.058V48.1572H152.966V55H154.058V51.9023H157.473V55ZM161.248 57.4756C162.46 57.4756 163.006 57.0059 163.59 55.4189L166.262 48.1572H165.101L163.228 53.7876H163.127L161.248 48.1572H160.067L162.6 55.0063L162.473 55.4126C162.187 56.2378 161.844 56.5361 161.216 56.5361C161.064 56.5361 160.892 56.5298 160.759 56.5044V57.4375C160.911 57.4629 161.102 57.4756 161.248 57.4756ZM168.247 55L170.704 51.8643H171.11V55H172.177V51.8643H172.583L175.039 55H176.423L173.452 51.3691L176.283 48.1572H174.976L172.583 51.0391H172.177V48.1572H171.11V51.0391H170.704L168.311 48.1572H166.984L169.834 51.3945L166.883 55H168.247ZM182.274 55H183.366V48.1572H182.274V50.9883H178.859V48.1572H177.767V55H178.859V51.9023H182.274V55ZM187.369 55.1206C188.283 55.1206 189.032 54.7207 189.477 53.9907H189.578V55H190.619V50.3154C190.619 48.8936 189.686 48.0366 188.017 48.0366C186.557 48.0366 185.478 48.7603 185.332 49.8584H186.436C186.588 49.3188 187.16 49.0078 187.979 49.0078C189.001 49.0078 189.527 49.4712 189.527 50.3154V50.9375L187.553 51.0581C185.96 51.1533 185.059 51.8579 185.059 53.083C185.059 54.3335 186.043 55.1206 187.369 55.1206ZM187.572 54.1621C186.779 54.1621 186.189 53.7559 186.189 53.0576C186.189 52.3721 186.646 52.0103 187.687 51.9404L189.527 51.8198V52.4482C189.527 53.4258 188.696 54.1621 187.572 54.1621ZM200.81 53.229C200.524 53.832 199.928 54.1558 199.045 54.1558C197.884 54.1558 197.128 53.2988 197.071 51.9468V51.896H201.991V51.4771C201.991 49.3506 200.867 48.0366 199.02 48.0366C197.141 48.0366 195.935 49.4331 195.935 51.585C195.935 53.7495 197.122 55.1206 199.02 55.1206C200.518 55.1206 201.584 54.397 201.902 53.229H200.81ZM199.007 49.0015C200.093 49.0015 200.816 49.8013 200.842 51.0137H197.071C197.154 49.8013 197.915 49.0015 199.007 49.0015ZM204.039 55L206.496 51.8643H206.902V55H207.968V51.8643H208.374L210.831 55H212.215L209.244 51.3691L212.075 48.1572H210.768L208.374 51.0391H207.968V48.1572H206.902V51.0391H206.496L204.102 48.1572H202.776L205.626 51.3945L202.674 55H204.039ZM217.907 53.229C217.621 53.832 217.024 54.1558 216.142 54.1558C214.981 54.1558 214.225 53.2988 214.168 51.9468V51.896H219.087V51.4771C219.087 49.3506 217.964 48.0366 216.117 48.0366C214.238 48.0366 213.032 49.4331 213.032 51.585C213.032 53.7495 214.219 55.1206 216.117 55.1206C217.615 55.1206 218.681 54.397 218.999 53.229H217.907ZM216.104 49.0015C217.19 49.0015 217.913 49.8013 217.939 51.0137H214.168C214.251 49.8013 215.012 49.0015 216.104 49.0015ZM221.936 55V50.1313H222.056L224.221 54.8096H225.071L227.236 50.1313H227.357V55H228.455V48.1572H227.179L224.722 53.4639H224.621L222.171 48.1572H220.844V55H221.936ZM235.093 53.229C234.807 53.832 234.21 54.1558 233.328 54.1558C232.166 54.1558 231.411 53.2988 231.354 51.9468V51.896H236.273V51.4771C236.273 49.3506 235.15 48.0366 233.303 48.0366C231.424 48.0366 230.218 49.4331 230.218 51.585C230.218 53.7495 231.405 55.1206 233.303 55.1206C234.801 55.1206 235.867 54.397 236.184 53.229H235.093ZM233.29 49.0015C234.375 49.0015 235.099 49.8013 235.124 51.0137H231.354C231.436 49.8013 232.198 49.0015 233.29 49.0015ZM243.698 50.252C243.508 49.0332 242.492 48.0366 240.829 48.0366C238.912 48.0366 237.693 49.4204 237.693 51.5532C237.693 53.7305 238.918 55.1206 240.835 55.1206C242.479 55.1206 243.501 54.1938 243.698 52.937H242.594C242.391 53.7114 241.749 54.1367 240.829 54.1367C239.61 54.1367 238.823 53.1338 238.823 51.5532C238.823 50.0044 239.598 49.0205 240.829 49.0205C241.813 49.0205 242.416 49.5728 242.594 50.252H243.698ZM248.87 55H249.962V48.1572H247.581C246.013 48.1572 245.01 49.0142 245.01 50.4233C245.01 51.3628 245.594 52.0737 246.559 52.3467L244.649 55H245.95L247.695 52.5498H248.87V55ZM247.581 51.6357C246.686 51.6357 246.102 51.1216 246.102 50.3979C246.102 49.5664 246.68 49.0713 247.581 49.0713H248.87V51.6357H247.581ZM257.272 55V48.1572H256.18V51.0454C255.895 51.3628 255.292 51.5913 254.435 51.5913C253.502 51.5913 253.019 51.0137 253.019 50.1123V48.1572H251.927V50.1123C251.927 51.5723 252.784 52.5625 254.435 52.5625C255.171 52.5625 255.711 52.4102 256.079 52.1499H256.18V55H257.272ZM263.872 55H264.964V48.1572H263.872V50.9883H260.457V48.1572H259.365V55H260.457V51.9023H263.872V55ZM269.875 55.1206C271.824 55.1206 273.03 53.7749 273.03 51.5786C273.03 49.376 271.824 48.0366 269.875 48.0366C267.926 48.0366 266.72 49.376 266.72 51.5786C266.72 53.7749 267.926 55.1206 269.875 55.1206ZM269.875 54.1367C268.58 54.1367 267.85 53.1973 267.85 51.5786C267.85 49.9536 268.58 49.0205 269.875 49.0205C271.17 49.0205 271.9 49.9536 271.9 51.5786C271.9 53.1973 271.17 54.1367 269.875 54.1367Z" fill="#6D7885"/>
                <Path d="M341.232 39L335.116 32.8839C334.628 32.3957 334.628 31.6043 335.116 31.1161C335.604 30.628 336.396 30.628 336.884 31.1161L343.884 38.1161C344.372 38.6043 344.372 39.3957 343.884 39.8839L336.884 46.8839C336.396 47.372 335.604 47.372 335.116 46.8839C334.628 46.3957 334.628 45.6043 335.116 45.1161L341.232 39Z" fill="#B8C1CC"/>
                <Path d="M17.4601 68.9101L17.6099 68.616L17.4601 68.9101ZM13.0899 64.5399L12.7959 64.6897L13.0899 64.5399ZM361.91 64.5399L361.616 64.3901L361.91 64.5399ZM357.54 68.9101L357.39 68.616L357.54 68.9101ZM357.54 9.08993L357.39 9.38397L357.54 9.08993ZM361.91 13.4601L362.204 13.3103L361.91 13.4601ZM17.4601 9.08993L17.6099 9.38397L17.4601 9.08993ZM28 8.33H347V7.67H28V8.33ZM362.67 24V54H363.33V24H362.67ZM347 69.67H28V70.33H347V69.67ZM12.33 54V24H11.67V54H12.33ZM28 69.67C25.1943 69.67 23.1099 69.6697 21.4589 69.5349C19.8118 69.4003 18.6252 69.1333 17.6099 68.616L17.3103 69.2041C18.4341 69.7767 19.7172 70.0548 21.4051 70.1927C23.0892 70.3303 25.2052 70.33 28 70.33V69.67ZM11.67 54C11.67 56.7948 11.6697 58.9108 11.8073 60.5949C11.9452 62.2828 12.2233 63.5659 12.7959 64.6897L13.384 64.3901C12.8667 63.3748 12.5997 62.1882 12.4651 60.5411C12.3303 58.8901 12.33 56.8057 12.33 54H11.67ZM17.6099 68.616C15.7904 67.6889 14.3111 66.2096 13.384 64.3901L12.7959 64.6897C13.7863 66.6334 15.3666 68.2137 17.3103 69.2041L17.6099 68.616ZM362.67 54C362.67 56.8057 362.67 58.8901 362.535 60.5411C362.4 62.1882 362.133 63.3748 361.616 64.3901L362.204 64.6897C362.777 63.5659 363.055 62.2828 363.193 60.5949C363.33 58.9108 363.33 56.7948 363.33 54H362.67ZM347 70.33C349.795 70.33 351.911 70.3303 353.595 70.1927C355.283 70.0548 356.566 69.7767 357.69 69.2041L357.39 68.616C356.375 69.1333 355.188 69.4003 353.541 69.5349C351.89 69.6697 349.806 69.67 347 69.67V70.33ZM361.616 64.3901C360.689 66.2096 359.21 67.6889 357.39 68.616L357.69 69.2041C359.633 68.2137 361.214 66.6334 362.204 64.6897L361.616 64.3901ZM347 8.33C349.806 8.33 351.89 8.33026 353.541 8.46515C355.188 8.59972 356.375 8.86665 357.39 9.38397L357.69 8.7959C356.566 8.22328 355.283 7.94525 353.595 7.80734C351.911 7.66974 349.795 7.67 347 7.67V8.33ZM363.33 24C363.33 21.2052 363.33 19.0892 363.193 17.4051C363.055 15.7172 362.777 14.4341 362.204 13.3103L361.616 13.6099C362.133 14.6252 362.4 15.8118 362.535 17.4589C362.67 19.1099 362.67 21.1943 362.67 24H363.33ZM357.39 9.38397C359.21 10.3111 360.689 11.7904 361.616 13.6099L362.204 13.3103C361.214 11.3666 359.633 9.78627 357.69 8.7959L357.39 9.38397ZM28 7.67C25.2052 7.67 23.0892 7.66974 21.4051 7.80734C19.7172 7.94525 18.4341 8.22328 17.3103 8.7959L17.6099 9.38397C18.6252 8.86665 19.8118 8.59972 21.4589 8.46515C23.1099 8.33026 25.1943 8.33 28 8.33V7.67ZM12.33 24C12.33 21.1943 12.3303 19.1099 12.4651 17.4589C12.5997 15.8118 12.8667 14.6252 13.384 13.6099L12.7959 13.3103C12.2233 14.4341 11.9452 15.7172 11.8073 17.4051C11.6697 19.0892 11.67 21.2052 11.67 24H12.33ZM17.3103 8.7959C15.3666 9.78627 13.7863 11.3666 12.7959 13.3103L13.384 13.6099C14.3111 11.7904 15.7904 10.3111 17.6099 9.38397L17.3103 8.7959Z" fill="black" fill-opacity="0.08"/>
            </Svg>

        );
    }
}

export default CreateRegularHelp;
